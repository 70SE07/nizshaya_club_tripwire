#!/usr/bin/env bash
#
# Deploy script for nizshaya.club — blue-green via shared library.
#
# Triggered by the `deploy-nizshaya` webhook on push to main.
#
# Стратегия (симметрично с creo/ideation/aimarketolog-new — через
# /usr/local/lib/deploy-bluegreen.sh):
#   0. flock — refuse to run if another deploy is already in progress
#   1. git pull (bootstrap-блок)
#   2. docker build new image
#   3. bg::setup + bg::start_standby + bg::wait_healthy
#   4. bg::swap_caddy (sed snippet + Caddy Admin API hot reload)
#   5. bg::drain_old + bg::stop_old + bg::commit_state
#
# Zero-downtime: Caddy admin API hot reload без пересоздания listeners.
# Rollback на предыдущий color через hot-standby (stopped, не rm'ed).
#
# Все output → /var/log/nizshaya-deploy.log

set -euo pipefail

APP_DIR="$(cd "$(dirname "$(readlink -f "$0")")/.." && pwd)"
RUNTIME_DIR="/var/www/nizshaya"
LOG=/var/log/nizshaya-deploy.log
LOCK=/var/lock/nizshaya-deploy.lock

IMAGE=nizshaya:latest

# ── Self-modifying script guard ─────────────────────────────────────
# См. creo/deploy/deploy.sh — bash читает скрипт по offsets, а `git reset
# --hard` внутри самого скрипта заменяет файл. Re-exec бутстрап: быстрый
# pull + exec заново, основной flow идёт после повторного вхождения.
if [ "${DEPLOY_REEXECED:-0}" != "1" ]; then
    mkdir -p "$(dirname "$LOG")"
    {
        echo ""
        echo "=== Deploy bootstrap $(date --iso-8601=seconds) ==="
        cd "$APP_DIR"
        git fetch --quiet origin main
        git reset --hard origin/main
        echo "  → bootstrap at commit $(git rev-parse --short HEAD)"
    } >> "$LOG" 2>&1
    export DEPLOY_REEXECED=1
    exec /bin/bash "$APP_DIR/deploy/deploy.sh"
fi

# Shared blue-green library — zero-downtime deploy через Caddy Admin API
source /usr/local/lib/deploy-bluegreen.sh

exec > >(tee -a "$LOG") 2>&1

# ── single-runner lock ───────────────────────────────────────
# Две GitHub webhook отправки подряд не должны обе запустить swap.
# flock -n возвращается сразу если кто-то держит lock.
exec 200>"$LOCK"
if ! flock -n 200; then
  echo "$(date --iso-8601=seconds) · deploy already running, skipping this invocation"
  exit 0
fi

# ── ROLLBACK composite через library primitives ─────────────
SWAP_DONE=false
ROLLBACK_ARMED=false

rollback() {
    echo "[ROLLBACK] starting..."
    if [ "$SWAP_DONE" = "true" ]; then
        bg::rollback_caddy
        bg::cleanup_standby
    else
        bg::cleanup_standby
    fi
    echo "=== Deploy FAILED with rollback: $(date -Iseconds) ==="
}

on_error() {
    if [ "$ROLLBACK_ARMED" = "true" ]; then
        rollback
    fi
}
trap on_error ERR

echo
echo "═══════════════════════════════════════════════════════"
echo "deploy-nizshaya · $(date --iso-8601=seconds)"
echo "APP_DIR=$APP_DIR"
echo "═══════════════════════════════════════════════════════"

cd "$APP_DIR"

# ── 1. pull (уже сделан bootstrap-блоком, фиксируем SHA) ──
echo "→ [1/5] git fetch + reset"
GIT_SHA=$(git rev-parse --short HEAD)
git log -1 --oneline

# ── 2. build ─────────────────────────────────────────────
echo "→ [2/5] docker build"
docker build -t "$IMAGE" .
echo "  → built $IMAGE"

# ── 3. Blue-green: start standby + health check ─────────
echo "→ [3/5] blue-green: start standby"
export BG_PROJECT=nizshaya
export BG_CONTAINER_PREFIX=nizshaya
export BG_IMAGE="$IMAGE"
export BG_BLUE_PORT=3021
export BG_GREEN_PORT=3022
export BG_INTERNAL_PORT=3000
export BG_STATE_FILE="$RUNTIME_DIR/deploy.state"
export BG_CADDY_SNIPPETS="/etc/caddy/snippets/nizshaya-backend.caddy"
export BG_HEALTH_PATH=/
bg::setup

bg::start_standby

if ! bg::wait_healthy 15 2; then
    echo "✗ FAIL: standby health check"
    bg::cleanup_standby
    exit 1
fi

# ── 4. Swap Caddy upstream (hot reload) ─────────────────
echo "→ [4/5] swap Caddy upstream"
ROLLBACK_ARMED=true

if ! bg::swap_caddy; then
    echo "✗ FAIL: Caddy swap"
    bg::cleanup_standby
    exit 1
fi
SWAP_DONE=true

# ── 5. Drain + stop old + commit state + prune ──────────
echo "→ [5/5] drain, stop old active, commit state"
bg::drain_old 10
bg::stop_old
bg::commit_state

# Prune dangling images (keeps :latest и предыдущий color image)
docker image prune -f 2>&1 | tail -3 || true

ROLLBACK_ARMED=false
echo "✓ deploy succeeded (blue-green, 0s downtime) · commit $GIT_SHA"

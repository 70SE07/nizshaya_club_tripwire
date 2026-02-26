'use client'

import { useRef, useState, useCallback, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

const VARIANTS = {
  full: {
    barCount: 60,
    container: "flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-sm",
    button: "shrink-0 flex items-center justify-center size-10 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors",
    icon: "w-4 h-4",
    waveHeight: "h-8",
    playedColor: "bg-rose-500",
    unplayedColor: "bg-neutral-700",
    showTime: true,
  },
  compact: {
    barCount: 28,
    container: "flex items-center gap-2",
    button: "shrink-0 flex items-center justify-center size-8 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors backdrop-blur-sm",
    icon: "w-3.5 h-3.5",
    waveHeight: "h-5",
    playedColor: "bg-rose-400",
    unplayedColor: "bg-white/20",
    showTime: false,
  },
} as const

type Variant = keyof typeof VARIANTS

// Static fallback waveform (deterministic, no randomness)
const makeFallback = (count: number) =>
  Array.from({ length: count }, (_, i) =>
    0.15 + 0.7 * Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.3))
  )

const FALLBACK_CACHE = new Map<number, number[]>()
function getFallback(count: number) {
  if (!FALLBACK_CACHE.has(count)) FALLBACK_CACHE.set(count, makeFallback(count))
  return FALLBACK_CACHE.get(count)!
}

function useAudioPlayer(src: string, barCount: number) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [bars, setBars] = useState<number[]>(getFallback(barCount))

  useEffect(() => {
    let cancelled = false
    let ctx: AudioContext | null = null

    async function decode() {
      try {
        ctx = new AudioContext()
        const response = await fetch(src)
        const buf = await response.arrayBuffer()
        const decoded = await ctx.decodeAudioData(buf)
        if (cancelled) return

        const raw = decoded.getChannelData(0)
        const step = Math.floor(raw.length / barCount)
        const peaks: number[] = []
        for (let i = 0; i < barCount; i++) {
          let sum = 0
          for (let j = 0; j < step; j++) {
            sum += Math.abs(raw[i * step + j])
          }
          peaks.push(sum / step)
        }
        const max = Math.max(...peaks)
        setBars(peaks.map(p => Math.max(0.08, p / max)))
      } catch {
        // Keep fallback bars
      } finally {
        ctx?.close().catch(() => {})
      }
    }

    decode()
    return () => { cancelled = true }
  }, [src, barCount])

  const toggle = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play().catch(() => {}); setPlaying(true) }
  }, [playing])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return

    const onTime = () => {
      setCurrent(a.currentTime)
      setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0)
    }
    const onMeta = () => setDuration(a.duration)
    const onEnd = () => { setPlaying(false); setProgress(0); setCurrent(0) }

    a.addEventListener("timeupdate", onTime)
    a.addEventListener("loadedmetadata", onMeta)
    a.addEventListener("ended", onEnd)
    return () => {
      a.removeEventListener("timeupdate", onTime)
      a.removeEventListener("loadedmetadata", onMeta)
      a.removeEventListener("ended", onEnd)
    }
  }, [])

  const seek = (e: React.MouseEvent<HTMLDivElement>, waveEl: HTMLDivElement | null) => {
    const a = audioRef.current
    if (!a || !waveEl || !a.duration) return
    const rect = waveEl.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    a.currentTime = ratio * a.duration
  }

  return { audioRef, playing, progress, currentTime, duration, bars, toggle, seek }
}

const fmt = (s: number) => {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, "0")}`
}

export function AudioPlayer({ src, variant = "full" }: { src: string; variant?: Variant }) {
  const v = VARIANTS[variant]
  const waveRef = useRef<HTMLDivElement>(null)
  const { audioRef, playing, progress, currentTime, duration, bars, toggle, seek } = useAudioPlayer(src, v.barCount)

  return (
    <div className={v.container}>
      <audio ref={audioRef} src={src} preload="metadata" />

      <button
        onClick={toggle}
        className={v.button}
        aria-label={playing ? "Пауза" : "Воспроизвести"}
      >
        {playing
          ? <Pause className={cn(v.icon, "text-white")} fill="white" />
          : <Play className={cn(v.icon, "text-white ml-0.5")} fill="white" />
        }
      </button>

      <div className={cn("flex-1", v.showTime && "flex flex-col gap-1.5")}>
        <div
          ref={waveRef}
          className={cn("flex items-end gap-px cursor-pointer", v.showTime ? v.waveHeight : cn(v.waveHeight, "flex-1"))}
          onClick={(e) => seek(e, waveRef.current)}
        >
          {bars.map((h, i) => {
            const pct = (i / bars.length) * 100
            const played = pct < progress
            return (
              <div
                key={i}
                className={cn(
                  "flex-1 rounded-sm transition-colors duration-150",
                  played ? v.playedColor : v.unplayedColor,
                )}
                style={{ height: `${h * 100}%` }}
              />
            )
          })}
        </div>
        {v.showTime && (
          <div className="flex justify-between text-xs text-muted">
            <span>{fmt(currentTime)}</span>
            <span>{duration ? fmt(duration) : "—"}</span>
          </div>
        )}
      </div>
    </div>
  )
}

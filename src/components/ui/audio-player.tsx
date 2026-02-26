'use client'

import { useRef, useState, useCallback, useEffect } from "react"
import { Play, Pause } from "lucide-react"

const BAR_COUNT = 60

// Static fallback waveform (deterministic, no randomness)
const FALLBACK_BARS = Array.from({ length: BAR_COUNT }, (_, i) =>
  0.15 + 0.7 * Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.3))
)

export function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const waveRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [bars, setBars] = useState<number[]>(FALLBACK_BARS)

  // Decode audio → generate real waveform bars
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
        const step = Math.floor(raw.length / BAR_COUNT)
        const peaks: number[] = []
        for (let i = 0; i < BAR_COUNT; i++) {
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
  }, [src])

  const toggle = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    if (playing) a.pause()
    else a.play()
    setPlaying(!playing)
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

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current
    const wave = waveRef.current
    if (!a || !wave || !a.duration) return
    const rect = wave.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    a.currentTime = ratio * a.duration
  }

  const fmt = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-sm">
      <audio ref={audioRef} src={src} preload="metadata" />

      <button
        onClick={toggle}
        className="shrink-0 flex items-center justify-center size-10 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
        aria-label={playing ? "Пауза" : "Воспроизвести"}
      >
        {playing
          ? <Pause className="w-4 h-4 text-white" fill="white" />
          : <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
        }
      </button>

      <div className="flex-1 flex flex-col gap-1.5">
        {/* Waveform */}
        <div
          ref={waveRef}
          className="flex items-end gap-px h-8 cursor-pointer"
          onClick={seek}
        >
          {bars.map((h, i) => {
            const pct = (i / bars.length) * 100
            const played = pct < progress
            return (
              <div
                key={i}
                className={`flex-1 rounded-sm transition-colors duration-150 ${
                  played ? "bg-rose-500" : "bg-neutral-700"
                }`}
                style={{ height: `${h * 100}%` }}
              />
            )
          })}
        </div>
        <div className="flex justify-between text-xs text-neutral-500">
          <span>{fmt(currentTime)}</span>
          <span>{duration ? fmt(duration) : "—"}</span>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useRef } from "react"
import { Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAudioPlayer } from "@/hooks/use-audio-player"

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

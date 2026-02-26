import { useRef, useState, useCallback, useEffect } from "react"

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

export function useAudioPlayer(src: string, barCount: number) {
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

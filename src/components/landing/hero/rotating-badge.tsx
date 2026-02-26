'use client'

import { useRef, useState, useEffect } from "react"
import { gsap } from "@/lib/gsap"

interface RotatingBadgeProps {
  texts: readonly string[]
  intervalMs?: number
  className?: string
}

export function RotatingBadge({ texts, intervalMs = 2500, className }: RotatingBadgeProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const interval = setInterval(() => {
      const el = textRef.current
      if (!el) return
      if (prefersReduced) {
        setIdx(i => (i + 1) % texts.length)
        return
      }
      tweenRef.current?.kill()
      tweenRef.current = gsap.to(el, {
        opacity: 0, y: -6, duration: 0.25, ease: "power2.in",
        onComplete: () => {
          setIdx(i => (i + 1) % texts.length)
          tweenRef.current = gsap.fromTo(el, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" })
        },
      })
    }, intervalMs)
    return () => {
      clearInterval(interval)
      tweenRef.current?.kill()
    }
  }, [texts.length, intervalMs])

  return (
    <div className={className}>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
      </span>
      <span ref={textRef} className="text-rose-400 text-sm font-medium">{texts[idx]}</span>
    </div>
  )
}

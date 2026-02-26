import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger, useGSAP }

/* ── Animation presets ── */

export const MOTION = {
  /** Section headers: label → title → subtitle */
  header: { duration: 0.6, stagger: 0.1, offset: 28 },
  /** Cards, tiles, metrics */
  card: { duration: 0.5, stagger: 0.08, offset: 20 },
  /** List items, rows */
  list: { duration: 0.4, stagger: 0.06, offset: 16 },
} as const

/* ── useScrollReveal ── */

export type RevealEntry = {
  /** CSS selector within the scoped section */
  selector: string
  /** Direction: 'up' | 'left' | 'right' | 'fade' (default: 'up') */
  direction?: "up" | "left" | "right" | "fade"
  /** ScrollTrigger trigger — CSS selector, or 'section' to use the section ref */
  trigger?: string
  /** ScrollTrigger start (default: "top 80%") */
  start?: string
  /** Duration in seconds (default: 0.5) */
  duration?: number
  /** Stagger in seconds (default: 0) */
  stagger?: number
  /** Pixel offset for the direction (default: 24) */
  offset?: number
}

/**
 * Declarative scroll-reveal animations scoped to a section.
 * Returns a ref to attach to the section's root element.
 */
export function useScrollReveal(entries: RevealEntry[]) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      entries.forEach(
        ({
          selector,
          direction = "up",
          trigger,
          start = "top 80%",
          duration = 0.5,
          stagger = 0,
          offset = 24,
        }) => {
          const vars: gsap.TweenVars = {
            opacity: 0,
            duration,
            stagger,
            ease: "power2.out",
            scrollTrigger: {
              trigger:
                trigger === "section"
                  ? ref.current
                  : (trigger ?? selector),
              start,
              once: true,
            },
          }

          if (direction === "up") vars.y = offset
          else if (direction === "left") vars.x = -offset
          else if (direction === "right") vars.x = offset

          gsap.from(selector, vars)
        },
      )
    },
    { scope: ref },
  )

  return ref
}

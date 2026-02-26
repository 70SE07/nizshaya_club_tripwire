import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import type { RevealEntry } from "@/lib/animation-presets"

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger, useGSAP }
export type { RevealEntry } from "@/lib/animation-presets"

/**
 * Declarative scroll-reveal animations scoped to a section.
 * Returns a ref to attach to the section's root element.
 */
export function useScrollReveal(entries: RevealEntry[]) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

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

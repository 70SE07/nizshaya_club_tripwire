/* ── Animation presets ── */
/* Server-safe — no React hooks, no client-only code */

export const MOTION = {
  /** Section headers: label → title → subtitle */
  header: { duration: 0.6, stagger: 0.1, offset: 28 },
  /** Cards, tiles, metrics */
  card: { duration: 0.5, stagger: 0.08, offset: 20 },
  /** List items, rows */
  list: { duration: 0.4, stagger: 0.06, offset: 16 },
} as const

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

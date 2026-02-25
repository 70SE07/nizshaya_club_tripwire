'use client'

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function ForWhoSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".for-who-inner > *", {
      opacity: 0,
      y: 28,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        once: true,
      },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-neutral-950 ds-section">
      <div className="ds-container">
        <div className="ds-grid">
          <div className="ds-col-3 for-who-inner">
            <p className="t-label text-rose-400" style={{ marginBottom: "var(--sp-xs)" }}>
              Для кого
            </p>
            <h2 className="t-h2 text-white" style={{ marginBottom: "var(--sp-sm)" }}>
              Все говорят про AI.
              <br />
              А мы на нём зарабатываем.
            </h2>
            <p className="t-body text-neutral-400 max-w-2xl">
              Мы не учим — мы показываем экран и делаем вместе.
              Что работает, то и берём. Здесь из низшей лиги переходят
              в высшую. Без воды, без теории, без соплей.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { VladScene } from "@/components/ui/vlad-model"
import { Spotlight } from "@/components/ui/spotlight"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
    tl.from(".hero-badge", { opacity: 0, y: -12, duration: 0.5 })
      .from(".hero-h1",   { opacity: 0, y: 40,  duration: 0.7 }, "-=0.25")
      .from(".hero-body", { opacity: 0, y: 24,  duration: 0.6 }, "-=0.4")
      .from(".hero-proof",{ opacity: 0,          duration: 0.5 }, "-=0.3")
      .from(".hero-cta",  { opacity: 0, y: 16,  duration: 0.5 }, "-=0.2")
  }, { scope: ref })

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e11d48" />

      {/* 3D — full-section layer, desktop only, behind text */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ zIndex: 0, transform: "scale(0.8)", transformOrigin: "right center" }}
      >
        <VladScene className="w-full h-full" />
      </div>

      <div className="ds-container w-full relative" style={{ zIndex: 1 }}>
        <div className="ds-grid">

          {/* Text — 2 cols */}
          <div className="ds-col-2 flex flex-col justify-center ds-section">
            {/* Badge */}
            <div
              className="hero-badge inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-1.5 w-fit"
              style={{ marginBottom: "var(--sp-sm)" }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
              </span>
              <span className="text-rose-300 t-small font-medium">Стримы 2 раза в месяц</span>
            </div>

            {/* H1 */}
            <h1
              className="hero-h1 t-h1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
              style={{ marginBottom: "var(--sp-sm)" }}
            >
              Первый результат —
              <br />
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                уже на первом стриме.
              </span>
            </h1>

            {/* Body */}
            <p
              className="hero-body t-body text-neutral-300 max-w-lg"
              style={{ marginBottom: "var(--sp-sm)" }}
            >
              Низшая Лига — это закрытое AI комьюнити, где вместо теории тебе отдают готовые агенты, воркфлоу и связки. Мы показываем экран и строим инструмент вживую. Ты повторяешь следом.
            </p>

            {/* Proof-line */}
            <p
              className="hero-proof t-small text-neutral-500"
              style={{ marginBottom: "var(--sp-md)" }}
            >
              50+ практиков внутри · 2 стрима в месяц · Показываем экран, не слайды · Без кода · Доступ открывается мгновенно
            </p>

            {/* CTA */}
            <div className="hero-cta">
              <a
                href="https://t.me/ligayasko_bot?start=tariffs"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-xl text-lg hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 transform"
              >
                Вступить в клуб за $79 / мес
              </a>
              <p className="t-small text-neutral-500" style={{ marginTop: "var(--sp-sm)" }}>
                Или 3 месяца за $150 (экономия 37%). Гарантия возврата после первого стрима — если не получишь рабочий инструмент, вернём деньги.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

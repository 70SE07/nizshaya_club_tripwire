'use client'

import { useRef, useState, useEffect } from "react"
import { gsap, useGSAP } from "@/lib/gsap"
import { VladScene } from "@/components/ui/vlad-model"
import { Spotlight } from "@/components/ui/spotlight"
import { CtaButton } from "@/components/landing/cta-button"
import { heroBadgeTexts } from "@/constants/content"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const badgeTextRef = useRef<HTMLSpanElement>(null)
  const [badgeIdx, setBadgeIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const el = badgeTextRef.current
      if (!el) return
      gsap.to(el, {
        opacity: 0, y: -6, duration: 0.25, ease: "power2.in",
        onComplete: () => {
          setBadgeIdx(i => (i + 1) % heroBadgeTexts.length)
          gsap.fromTo(el, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" })
        },
      })
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
    tl.from(".hero-badge", { opacity: 0, y: -12, duration: 0.5 })
      .from(".hero-h1",   { opacity: 0, y: 40,  duration: 0.7 }, "-=0.25")
      .from(".hero-body", { opacity: 0, y: 24,  duration: 0.6 }, "-=0.4")
      .from(".hero-cta",  { opacity: 0, y: 16,  duration: 0.5 }, "-=0.2")
  }, { scope: ref })

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-dvh flex items-center bg-black overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e11d48" />

      {/* 3D — right side layer, desktop only, behind text */}
      <div className="absolute right-0 hidden md:flex items-center z-0 top-1/2 -translate-y-1/2 w-[65%] h-[clamp(460px,80vh,800px)]">
        <VladScene className="w-full h-full" />
      </div>

      <div className="max-w-300 mx-auto px-container-px w-full relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Text — 2 cols */}
          <div className="sm:col-span-2 flex flex-col justify-center py-sp-lg">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-1.5 w-fit mb-sp-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
              </span>
              <span ref={badgeTextRef} className="text-rose-400 text-sm font-medium">{heroBadgeTexts[badgeIdx]}</span>
            </div>

            {/* H1 */}
            <h1 className="hero-h1 text-4xl md:text-5xl lg:text-6xl leading-none font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 mb-sp-lg">
              Первый результат —
              <br />
              <span className="bg-linear-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                уже на первом стриме.
              </span>
            </h1>

            {/* Body */}
            <p className="hero-body text-lg leading-[1.65] text-body max-w-lg mb-sp-lg">
              «Низшая Лига» — закрытое AI комьюнити практиков, которые называют себя «низшей лигой» с самоиронией. Никакой теории — тебе отдают готовые связки, которые работают. Берёшь, копируешь, зарабатываешь.
            </p>

            {/* CTA */}
            <div className="hero-cta">
              <CtaButton>
                Вступить в клуб за $79 / мес
              </CtaButton>
              <p className="text-sm text-muted mt-sp-sm">
                Сэкономь 37% — возьми сразу 3 месяца за $150. Не понравится после первого стрима — вернём деньги.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

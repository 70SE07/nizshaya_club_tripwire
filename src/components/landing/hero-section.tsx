'use client'

import { useRef } from "react"
import dynamic from "next/dynamic"
import { gsap, useGSAP } from "@/lib/gsap"

const VladScene = dynamic(
  () => import("@/components/ui/vlad-model").then(m => ({ default: m.VladScene })),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
)
import { Spotlight } from "@/components/ui/spotlight"
import { CtaButton } from "@/components/landing/cta-button"
import { RotatingBadge } from "@/components/landing/hero/rotating-badge"
import { heroBadgeTexts } from "@/constants/content"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
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
        <div className="grid-section">

          {/* Text — 2 cols */}
          <div className="sm:col-span-2 flex flex-col justify-center py-sp-lg">
            {/* Badge */}
            <RotatingBadge
              texts={heroBadgeTexts}
              className="hero-badge inline-flex items-center gap-2 badge-accent rounded-full px-4 py-1.5 w-fit mb-sp-lg"
            />

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
                Вступить в клуб от $50 / мес
              </CtaButton>
              <p className="text-sm text-muted mt-sp-sm">
                при оплате за 3 месяца · Не понравится после первого стрима — вернём деньги.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

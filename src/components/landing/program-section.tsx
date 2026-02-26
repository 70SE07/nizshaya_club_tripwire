'use client'

import { useRef } from "react"
import { Monitor, Zap, Mic, Users, MessageSquare } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { programItems } from "@/constants/content"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"

const icons = [Monitor, Zap, Mic, Users, MessageSquare]

export function ProgramSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    /* Mobile — strips */
    gsap.from(".program-row", {
      opacity: 0, x: -20, duration: 0.4, stagger: 0.08, ease: "power2.out",
      scrollTrigger: { trigger: ".program-mobile", start: "top 80%", once: true },
    })
    /* Desktop — bento */
    gsap.from(".program-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".program-card", {
      opacity: 0, y: 20, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: ".program-desktop", start: "top 80%", once: true },
    })
  }, { scope: ref })

  return (
    <SectionContainer ref={ref}>

      <SectionHeader
        label="Программа"
        title="Что конкретно внутри клуба"
        subtitle="Не курс с модулями. Живой клуб — стримы, стек, практики рядом."
        className="program-header"
      />

      {/* ── Mobile: cards ── */}
      <div className="program-mobile sm:hidden space-y-3">
        {programItems.map((item, i) => {
          const Icon = icons[i]
          const isPremium = 'premium' in item && item.premium
          return (
            <div
              key={i}
              className={`program-row rounded-xl px-4 py-4 ${
                isPremium
                  ? "bg-linear-to-r from-rose-500/10 to-transparent border border-rose-500/20"
                  : "bg-neutral-900/50 border border-neutral-800"
              }`}
            >
              <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-1 mb-3 ${
                isPremium
                  ? "text-rose-400 bg-rose-500/10 border border-rose-500/20"
                  : "text-body bg-neutral-800 border border-neutral-700"
              }`}>
                {item.freq}
              </span>
              <div className="flex items-center gap-2.5 mb-1">
                <Icon className={`w-5 h-5 shrink-0 ${isPremium ? "text-rose-400" : "text-body"}`} />
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-body">{item.desc}</p>
            </div>
          )
        })}
      </div>

      {/* ── Desktop: bento grid (Variant C) ── */}
      <div className="program-desktop hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-3">
        {programItems.map((item, i) => {
          const Icon = icons[i]
          const isPremium = 'premium' in item && item.premium
          return (
            <div
              key={i}
              className={`program-card relative flex flex-col ${
                isPremium
                  ? "col-span-1 lg:col-span-2 rounded-2xl p-sp-sm bg-linear-to-r from-rose-500/10 to-transparent border border-rose-500/20"
                  : i === 0
                    ? "col-span-2 card-base"
                    : i >= 3
                      ? "col-span-1 lg:col-span-2 card-base"
                      : "col-span-1 card-base"
              }`}
            >
              <span className={`absolute top-4 right-4 text-xs font-medium rounded-full px-2.5 py-1 ${
                isPremium
                  ? "text-rose-400 bg-rose-500/10 border border-rose-500/20"
                  : "text-body bg-neutral-800 border border-neutral-700"
              }`}>
                {item.freq}
              </span>

              <Icon className={`w-7 h-7 mb-sp-sm ${isPremium ? "text-rose-400" : "text-body"}`} />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-sp-xs pr-24">{item.title}</h3>
              <p className="text-sm text-body">{item.desc}</p>
            </div>
          )
        })}
      </div>

    </SectionContainer>
  )
}

'use client'

import { Monitor, Zap, Mic, Users, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { PROGRAM_REVEAL } from "@/constants/animations"
import { programItems } from "@/constants/content"
import { AnimatedSection } from "@/components/landing/animated-section"

const icons = [Monitor, Zap, Mic, Users, MessageSquare]

export function ProgramSection() {
  return (
    <AnimatedSection
      reveal={PROGRAM_REVEAL}
      label="Программа"
      title="Что конкретно внутри клуба"
      subtitle="Не курс с модулями. Живой клуб — стримы, стек, практики рядом."
      headerClassName="program-header"
    >
      {/* ── Mobile: cards ── */}
      <div className="program-mobile sm:hidden space-y-3">
        {programItems.map((item, i) => {
          const Icon = icons[i]
          const isPremium = item.premium
          return (
            <div
              key={i}
              className={`program-row rounded-xl px-4 py-4 ${
                isPremium ? "card-premium" : "bg-neutral-900/50 border border-neutral-800"
              }`}
            >
              <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-1 mb-3 ${
                isPremium
                  ? "badge-accent"
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
          const isPremium = item.premium
          return (
            <div
              key={i}
              className={cn(
                "program-card relative flex flex-col",
                isPremium
                  ? "col-span-1 lg:col-span-2 rounded-2xl p-sp-sm card-premium"
                  : "card-base",
                !isPremium && i === 0 && "col-span-2",
                !isPremium && i >= 3 && "col-span-1 lg:col-span-2",
                !isPremium && i > 0 && i < 3 && "col-span-1",
              )}
            >
              <span className={`absolute top-4 right-4 text-xs font-medium rounded-full px-2.5 py-1 ${
                isPremium
                  ? "badge-accent"
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
    </AnimatedSection>
  )
}

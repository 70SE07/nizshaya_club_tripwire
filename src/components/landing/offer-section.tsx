'use client'

import { useRef } from "react"
import { Check, X, Gift } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { valueStack, bonuses, monthlyFeatures } from "@/constants/pricing"
import { LINKS } from "@/constants/links"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"

export function OfferSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".offer-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".offer-tariff", {
      opacity: 0, y: 32, duration: 0.7, stagger: 0.15, ease: "power2.out",
      scrollTrigger: { trigger: ".offer-tariffs", start: "top 80%", once: true },
    })
    gsap.from(".offer-value-item", {
      opacity: 0, y: 20, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: ".offer-value-grid", start: "top 80%", once: true },
    })
    gsap.from(".offer-bonus", {
      opacity: 0, x: -16, duration: 0.4, stagger: 0.08, ease: "power2.out",
      scrollTrigger: { trigger: ".offer-bonuses", start: "top 80%", once: true },
    })
  }, { scope: ref })

  return (
    <SectionContainer ref={ref} id="offer">

      <SectionHeader
        label="Оффер"
        title="Что ты получаешь. Всё и сразу."
        className="offer-header"
      />

      {/* ── Tariff cards ── */}
      <div className="offer-tariffs grid grid-cols-1 lg:grid-cols-2 gap-5 mb-sp-md">
        {/* Monthly */}
        <div className="offer-tariff bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-md hover:border-rose-500/30 transition-colors flex flex-col">
          <div className="mb-sp-md">
            <p className="text-sm text-muted font-medium mb-sp-xs">Подписка · 1 месяц</p>
            <div className="flex items-end gap-2 mb-sp-xs">
              <span className="text-white font-bold text-[2.5rem] leading-none">$79</span>
              <span className="text-muted text-lg">/мес</span>
            </div>
          </div>
          <div className="flex-1 space-y-2.5 mb-sp-md">
            {monthlyFeatures.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-body-em text-sm">{item}</span>
              </div>
            ))}
            <div className="flex items-start gap-2.5">
              <X className="w-4 h-4 text-dimmed shrink-0 mt-0.5" />
              <span className="text-muted text-sm">Q&A-сессии не входят</span>
            </div>
          </div>
          <a href={LINKS.telegram} className="block w-full text-center bg-neutral-800 text-white font-bold rounded-xl hover:bg-neutral-700 transition-colors p-sp-sm">
            Вступить за $79
          </a>
        </div>

        {/* Quarterly */}
        <div className="offer-tariff relative bg-linear-to-b from-rose-500/10 to-neutral-900/50 border border-rose-500/30 rounded-2xl p-sp-md flex flex-col">
          <div className="absolute bg-rose-500 text-white font-bold rounded-full text-xs top-4 right-4 py-1 px-3">-37%</div>
          <div className="mb-sp-md">
            <p className="text-sm text-muted font-medium mb-sp-xs">Подписка · 3 месяца</p>
            <div className="flex items-end gap-2 mb-sp-xs">
              <span className="text-white/40 line-through text-xl">$237</span>
              <span className="text-white font-bold text-[2.5rem] leading-none">$150</span>
            </div>
            <p className="text-rose-400 text-sm">$50/мес</p>
          </div>
          <div className="flex-1 space-y-2.5 mb-sp-md">
            {monthlyFeatures.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-body-em text-sm">{item}</span>
              </div>
            ))}
            <div className="border-t border-rose-500/20 pt-2.5 mt-1">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-body-em text-sm">Q&A: личный разбор кейса с Владом</span>
              </div>
              <div className="flex items-start gap-2.5 mt-2.5">
                <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-body-em text-sm">Приоритетный доступ к материалам</span>
              </div>
            </div>
          </div>
          <a href={LINKS.telegram} className="block w-full text-center bg-linear-to-r from-rose-500 to-pink-600 text-white font-bold rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:scale-[1.02] transform p-sp-sm">
            Взять 3 месяца за $150
          </a>
        </div>
      </div>

      {/* ── Value stack — invoice (desktop only) ── */}
      <div className="offer-value-grid hidden sm:block card-base mb-sp-md">
        <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-sm">Сколько это стоит по отдельности</p>

        {valueStack.map((row, i) => (
          <div
            key={i}
            className={`offer-value-item flex items-start justify-between gap-4 py-2.5 ${
              i < valueStack.length - 1 ? "border-b border-neutral-800/60" : ""
            }`}
          >
            <span className="text-sm text-body-em flex items-center gap-2">
              {'bonus' in row && row.bonus && <Gift className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
              {row.item}
            </span>
            <span className="text-sm text-muted shrink-0 tabular-nums">{row.price}</span>
          </div>
        ))}

        <div className="flex items-center justify-between border-t border-neutral-700 pt-sp-xs mt-sp-xs">
          <span className="text-sm font-bold text-white">Итого ценность</span>
          <span className="text-sm font-bold text-rose-400">от $2 800</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm font-bold text-white">Ты платишь</span>
          <span className="text-sm font-bold text-emerald-400">от $50/мес</span>
        </div>
      </div>

      {/* ── Bonuses ── */}
      <div className="mb-sp-sm">
        <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-sm">Бонусы — включены в подписку</p>
      </div>
      <div className="offer-bonuses space-y-3 mb-sp-md">
        {bonuses.map((b, i) => {
          const isPremium = 'premium' in b && b.premium
          return (
            <div
              key={i}
              className={`offer-bonus rounded-xl px-4 py-3.5 ${
                isPremium
                  ? "bg-linear-to-r from-rose-500/10 to-transparent border border-rose-500/20"
                  : "bg-neutral-900/50 border border-neutral-800"
              }`}
            >
              <div className="flex items-start gap-3">
                <Gift className={`w-4 h-4 shrink-0 mt-0.5 ${isPremium ? "text-rose-400" : "text-amber-400"}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <p className="text-sm font-semibold text-white">{b.title}</p>
                    <span className="text-xs text-muted shrink-0">{isPremium ? "$500/час" : b.note.match(/\$[\d,]+/)?.[0]}</span>
                  </div>
                  <p className="text-sm text-body">{b.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Anchor ── */}
      <div className="text-center">
        <p className="text-sm text-muted">
          Соотношение ценности к цене: <span className="text-rose-400 font-bold">35:1</span> на месячном тарифе. За $79 ты получаешь то, что стоит $2 800 при отдельной покупке.
        </p>
      </div>

    </SectionContainer>
  )
}

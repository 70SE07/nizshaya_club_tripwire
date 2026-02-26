'use client'

import { useRef } from "react"
import { Check, X, Gift } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const valueStack = [
  { item: "2 стрима в месяц с разбором экрана + записи", price: "$200/мес" },
  { item: "Готовые AI-агенты и рабочие воркфлоу", price: "$500" },
  { item: "Ежедневный проверенный стек нейронок", price: "$100/мес" },
  { item: "Закрытая группа 50+ практиков", price: "$200/мес" },
  { item: "Joker Speaker: Стас Цис — контент-заводы и YouTube", price: "$500", bonus: true },
  { item: "Joker Speaker: Дэн — Clowbot для автоматизации продаж", price: "$500", bonus: true },
  { item: "Готовые воркфлоу контент-завода для инстаблогеров", price: "$300", bonus: true },
  { item: "Q&A с разбором кейса лично с Владом (тариф 3 мес)", price: "$500/час", bonus: true },
]

const bonuses = [
  {
    title: "Бонус #1 — Joker Speaker: Стас Цис",
    desc: "Закрытый эфир по контент-заводам и YouTube. Как построить систему, которая производит 50+ единиц контента в день — без копирайтера и SMM-менеджера.",
    note: "Рыночная стоимость: $500 · Включено в любой тариф",
  },
  {
    title: "Бонус #2 — Joker Speaker: Дэн (Clowbot)",
    desc: "Закрытый эфир по Clowbot: автоматизация продаж и клиентской коммуникации. Как убрать ручную обработку входящих, сохранить личный тон и не потерять ни одного лида.",
    note: "Рыночная стоимость: $500 · Включено в любой тариф",
  },
  {
    title: "Бонус #3 — Воркфлоу контент-завода для инстаблогеров",
    desc: "Готовый пакет схем: Reels, сторис, Telegram-посты, лендинги. Скачиваешь → адаптируешь под нишу → запускаешь.",
    note: "Рыночная стоимость: $300 · Включено в любой тариф",
  },
  {
    title: "Бонус #4 — Q&A с личным разбором кейса",
    desc: "Раз в месяц — живой созвон. Приходишь со своей задачей, Влад разбирает её прямо на звонке: какой агент применить, где ошибка, как масштабировать.",
    note: "Рыночная стоимость: $500/час · Только в 3-месячном тарифе",
    premium: true,
  },
]

const monthlyFeatures = [
  "2 стрима/мес с записью",
  "Ежедневный стек нейронок",
  "Готовые AI-агенты и воркфлоу",
  "Закрытая группа практиков",
  "Joker Speaker: Стас Цис",
  "Joker Speaker: Дэн (Clowbot)",
  "Воркфлоу контент-завода",
]

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
    <section ref={ref} id="offer" className="bg-neutral-950 py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="offer-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">Оффер</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white">Что ты получаешь. Всё и сразу.</h2>
          </div>
        </div>

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
            <a href="https://t.me/ligayasko_bot?start=tariffs" className="block w-full text-center bg-neutral-800 text-white font-bold rounded-xl hover:bg-neutral-700 transition-colors p-sp-sm">
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
            <a href="https://t.me/ligayasko_bot?start=tariffs" className="block w-full text-center bg-linear-to-r from-rose-500 to-pink-600 text-white font-bold rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:scale-[1.02] transform p-sp-sm">
              Взять 3 месяца за $150
            </a>
          </div>
        </div>

        {/* ── Value stack — invoice (desktop only) ── */}
        <div className="offer-value-grid hidden sm:block bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-sm mb-sp-md">
          <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-sm">Сколько это стоит по отдельности</p>

          {valueStack.map((row, i) => (
            <div
              key={i}
              className={`offer-value-item flex items-start justify-between gap-4 py-2.5 ${
                i < valueStack.length - 1 ? "border-b border-neutral-800/60" : ""
              }`}
            >
              <span className="text-sm text-body-em flex items-center gap-2">
                {row.bonus && <Gift className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
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
          {bonuses.map((b, i) => (
            <div
              key={i}
              className={`offer-bonus rounded-xl px-4 py-3.5 ${
                b.premium
                  ? "bg-linear-to-r from-rose-500/10 to-transparent border border-rose-500/20"
                  : "bg-neutral-900/50 border border-neutral-800"
              }`}
            >
              <div className="flex items-start gap-3">
                <Gift className={`w-4 h-4 shrink-0 mt-0.5 ${b.premium ? "text-rose-400" : "text-amber-400"}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <p className="text-sm font-semibold text-white">{b.title}</p>
                    <span className="text-xs text-muted shrink-0">{b.premium ? "$500/час" : b.note.match(/\$[\d,]+/)?.[0]}</span>
                  </div>
                  <p className="text-sm text-body">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Anchor ── */}
        <div className="text-center">
          <p className="text-sm text-muted">
            Соотношение ценности к цене: <span className="text-rose-400 font-bold">35:1</span> на месячном тарифе. За $79 ты получаешь то, что стоит $2 800 при отдельной покупке.
          </p>
        </div>

      </div>
    </section>
  )
}

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
  { item: "Q&A с разбором кейса лично с Владом (тариф 3 мес)", price: "$500/мес", bonus: true },
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
    note: "Рыночная стоимость: $500/мес · Только в 3-месячном тарифе",
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

const quarterlyExtra = [
  "Всё из месячного тарифа",
  "Q&A раз в месяц: личный разбор твоего кейса с Владом",
  "Приоритетный доступ к материалам",
]

export function OfferSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".offer-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".offer-value-row", {
      opacity: 0, x: -16, duration: 0.4, stagger: 0.05, ease: "power2.out",
      scrollTrigger: { trigger: ".offer-value-stack", start: "top 80%", once: true },
    })
    gsap.from(".offer-bonus", {
      opacity: 0, y: 24, duration: 0.5, stagger: 0.08, ease: "power2.out",
      scrollTrigger: { trigger: ".offer-bonuses", start: "top 80%", once: true },
    })
    gsap.from(".offer-card", {
      opacity: 0, y: 32, duration: 0.7, stagger: 0.15, ease: "power2.out",
      scrollTrigger: { trigger: ".offer-cards", start: "top 80%", once: true },
    })
    gsap.from(".offer-anchor", {
      opacity: 0, y: 16, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: ".offer-anchor", start: "top 90%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} id="offer" className="bg-neutral-950 py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="offer-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Оффер
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white">
              Что ты получаешь. Всё и сразу.
            </h2>
          </div>
        </div>

        {/* Value stack */}
        <div className="offer-value-stack grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-sm overflow-x-auto">
            <div className="min-w-120">
              {/* Table header */}
              <div className="flex items-center justify-between border-b border-neutral-700 pb-sp-xs mb-sp-xs">
                <span className="text-sm font-semibold text-neutral-400">Что включено</span>
                <span className="text-sm font-semibold text-neutral-400">Рыночная цена</span>
              </div>
              {/* Rows */}
              {valueStack.map((row, i) => (
                <div
                  key={i}
                  className={`offer-value-row flex items-center justify-between py-2 ${
                    i < valueStack.length - 1 ? "border-b border-neutral-800/50" : ""
                  }`}
                >
                  <span className="text-sm text-neutral-300 flex items-center gap-2">
                    {row.bonus && <Gift className="w-4 h-4 text-amber-400 shrink-0" />}
                    {row.item}
                  </span>
                  <span className="text-sm text-neutral-400 shrink-0 ml-4">{row.price}</span>
                </div>
              ))}
              {/* Total */}
              <div className="flex items-center justify-between border-t border-neutral-700 pt-sp-xs mt-sp-xs">
                <span className="text-sm font-bold text-white">Итого ценность пакета</span>
                <span className="text-sm font-bold text-rose-400">от $2 800</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bonuses */}
        <div className="offer-bonuses grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          {bonuses.map((b, i) => (
            <div
              key={i}
              className={`offer-bonus rounded-2xl p-sp-sm ${
                b.premium
                  ? "col-span-1 sm:col-span-2 lg:col-span-4 bg-linear-to-b from-rose-500/10 to-transparent border border-rose-500/20"
                  : "sm:col-span-2 bg-neutral-900/50 border border-neutral-800"
              }`}
            >
              <div className="flex items-center gap-2 mb-sp-xs">
                <Gift className={`w-5 h-5 shrink-0 ${b.premium ? "text-rose-400" : "text-amber-400"}`} />
                <h3 className="text-base font-semibold text-white">{b.title}</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-sp-xs">{b.desc}</p>
              <p className="text-xs text-neutral-500 italic">{b.note}</p>
            </div>
          ))}
        </div>

        {/* Tariff cards */}
        <div className="offer-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">

          {/* Monthly */}
          <div className="offer-card sm:col-span-2 bg-linear-to-b from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-rose-500/30 transition-colors flex flex-col">
            <div className="flex flex-col flex-1 p-sp-md">
              <div className="mb-sp-md">
                <p className="text-sm text-neutral-500 font-medium mb-sp-xs">Подписка</p>
                <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white mb-sp-xs">1 месяц</h3>
                <div className="flex items-end gap-2">
                  <span className="text-white font-bold text-[2.5rem] leading-none">$79</span>
                  <span className="text-neutral-500 text-lg leading-[1.65]">/мес</span>
                </div>
              </div>

              <div className="flex-1 mb-sp-md">
                {monthlyFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-sp-xs">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-neutral-300 text-sm">{item}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3 mb-sp-xs">
                  <X className="w-5 h-5 text-neutral-600 shrink-0 mt-0.5" />
                  <span className="text-neutral-500 text-sm">Q&A-сессии не входят</span>
                </div>
              </div>

              <a
                href="https://t.me/ligayasko_bot?start=tariffs"
                className="block w-full text-center bg-linear-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:scale-[1.02] transform mt-auto p-sp-sm"
              >
                Вступить за $79
              </a>
            </div>
          </div>

          {/* Quarterly */}
          <div className="offer-card sm:col-span-2 bg-linear-to-b from-neutral-900 to-neutral-900/50 border border-rose-500/30 rounded-2xl overflow-hidden relative flex flex-col">
            <div className="absolute bg-rose-500 text-white font-bold rounded-full text-sm top-sp-sm right-sp-sm py-0.5 px-3">
              Рекомендуем
            </div>
            <div className="flex flex-col flex-1 p-sp-md">
              <div className="mb-sp-md">
                <p className="text-sm text-neutral-500 font-medium mb-sp-xs">Подписка</p>
                <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white mb-sp-xs">3 месяца</h3>
                <div className="flex items-end gap-2">
                  <span className="text-white/50 line-through text-2xl">$237</span>
                  <span className="text-white font-bold text-[2.5rem] leading-none">$150</span>
                </div>
                <p className="text-rose-400 text-sm mt-sp-xs">$50/мес — экономия 37%</p>
              </div>

              <div className="flex-1 mb-sp-md">
                {quarterlyExtra.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-sp-xs">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-neutral-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/ligayasko_bot?start=tariffs"
                className="block w-full text-center bg-linear-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:scale-[1.02] transform mt-auto p-sp-sm"
              >
                Взять 3 месяца за $150
              </a>
            </div>
          </div>

        </div>

        {/* Anchor */}
        <div className="offer-anchor grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-sm text-neutral-500">
              Соотношение ценности к цене: <span className="text-rose-400 font-bold">35:1</span> на месячном тарифе. За $79 ты получаешь то, что стоит $2 800 при отдельной покупке.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

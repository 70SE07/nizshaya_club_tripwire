'use client'

import { useRef } from "react"
import { Check, Gift } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const monthlyFeatures = [
  "Стримы 2 раза в месяц с записью",
  "Ежедневный стек нейронок — только проверенные, без воды",
  "Готовые решения на нейронках — скачиваешь и пользуешься",
  "Закрытая группа практиков",
  "Приватный канал с контентом",
]

const monthlyBonuses = [
  "Joker Speaker — закрытый эфир с топовым экспертом AI-рынка",
  "Готовые воркфлоу контент-завода для инстаблогеров",
]

const quarterlyExtra = [
  "Всё из месячного тарифа",
  "Q&A сессия раз в месяц — приходишь со своим кейсом, разбираем вместе",
  "Приоритетный доступ к новым материалам",
]

export function OfferSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".offer-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".offer-card", {
      opacity: 0, y: 32, duration: 0.7, stagger: 0.15, ease: "power2.out",
      scrollTrigger: { trigger: ".offer-cards", start: "top 80%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} id="offer" className="bg-neutral-950 py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="offer-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Тарифы
            </p>
            <h2 className="text-heading font-bold tracking-snug text-white mb-sp-sm">
              Хватит дрочить на бесплатные гайды
            </h2>
            <p className="text-lg leading-[1.65] text-neutral-400 max-w-2xl">
              Одна подписка вместо десятков каналов, курсов и пересказов чужих пересказов.
              Тут не читают — тут делают.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="offer-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Monthly */}
          <div className="offer-card sm:col-span-2 bg-linear-to-b from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-rose-500/30 transition-colors flex flex-col">
            <div className="flex flex-col flex-1 p-sp-md">
              <div className="mb-sp-md">
                <p className="text-sm text-neutral-500 font-medium mb-sp-xs">Подписка</p>
                <h3 className="text-subheading font-semibold text-white mb-sp-xs">1 месяц</h3>
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
              </div>

              <div className="border-t border-neutral-800 pt-sp-md mb-sp-md">
                {monthlyBonuses.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-sp-xs">
                    <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-amber-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/ligayasko_bot?start=tariffs"
                className="block w-full text-center bg-linear-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:scale-[1.02] transform mt-auto p-sp-sm"
              >
                Вступить в клуб
              </a>
            </div>
          </div>

          {/* Quarterly */}
          <div className="offer-card sm:col-span-2 bg-linear-to-b from-neutral-900 to-neutral-900/50 border border-rose-500/30 rounded-2xl overflow-hidden relative flex flex-col">
            <div className="absolute bg-rose-500 text-white font-bold rounded-full text-sm top-sp-sm right-sp-sm py-0.5 px-3">
              Выгодно
            </div>
            <div className="flex flex-col flex-1 p-sp-md">
              <div className="mb-sp-md">
                <p className="text-sm text-neutral-500 font-medium mb-sp-xs">Подписка</p>
                <h3 className="text-subheading font-semibold text-white mb-sp-xs">3 месяца</h3>
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

              <div className="border-t border-neutral-800 pt-sp-md mb-sp-md">
                {monthlyBonuses.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-sp-xs">
                    <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-amber-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/ligayasko_bot?start=tariffs"
                className="block w-full text-center bg-linear-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:scale-[1.02] transform mt-auto p-sp-sm"
              >
                Вступить в клуб
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

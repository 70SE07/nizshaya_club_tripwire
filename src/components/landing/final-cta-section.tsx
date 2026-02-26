'use client'

import { useRef } from "react"
import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function FinalCtaSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".cta-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".cta-urgency", {
      opacity: 0, y: 24, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: ".cta-urgency", start: "top 80%", once: true },
    })
    gsap.from(".cta-buttons", {
      opacity: 0, y: 20, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: ".cta-buttons", start: "top 85%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-linear-to-b from-neutral-950 to-black py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="cta-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white mb-sp-sm">
              Пока ты читаешь —{" "}
              <span className="bg-linear-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                кто-то уже зарабатывает.
              </span>
            </h2>
            <p className="text-lg leading-[1.65] text-body mb-sp-xs">
              Ты уже знаешь, что что-то надо менять. Иначе ты бы не дочитал до этого места.
            </p>
            <p className="text-lg leading-[1.65] text-body">
              AI тебе нужен — это ясно. Осталось перестать смотреть, как это делают другие, и начать самому.
            </p>
          </div>
        </div>

        {/* Urgency */}
        <div className="cta-urgency grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-sm">
            <div className="flex items-center gap-3 mb-sp-sm">
              <Users className="w-5 h-5 text-rose-400 shrink-0" />
              <p className="text-base font-semibold text-white">Первый набор — до 100 участников</p>
            </div>
            <p className="text-sm text-neutral-400 mb-sp-xs">
              Февральский стримовый цикл уже запланирован. Зайдёшь сейчас — попадёшь с самого начала и заберёшь все бонусы от Joker Speaker. Опоздаешь — начнёшь с середины цикла.
            </p>
            <p className="text-sm text-neutral-400">
              При ограниченном составе Влад может лично разбирать кейсы каждого. При 500+ участниках формат изменится. Войти сейчас = максимальное внимание по минимальной цене.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="cta-buttons grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row items-center gap-sp-sm">
            <a
              href="https://t.me/ligayasko_bot?start=tariffs"
              className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transform py-sp-sm px-sp-md text-lg"
            >
              Вступить за $79/мес <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-neutral-600 text-sm">или</span>
            <a
              href="https://t.me/ligayasko_bot?start=tariffs"
              className="inline-flex items-center justify-center gap-3 bg-neutral-900/50 border border-rose-500/30 text-white font-bold rounded-2xl hover:border-rose-500/60 hover:bg-neutral-900 transition-all py-sp-sm px-sp-md text-lg"
            >
              3 месяца за $150 · экономия 37%
            </a>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <p className="text-neutral-600 text-sm text-center sm:text-left">
              Доступ открывается мгновенно · Отмена в один клик
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-900 text-neutral-700 text-sm pt-sp-md">
          <p className="mb-sp-xs">© Низшая Лига | Все права защищены</p>
          <div className="flex gap-4">
            <Link href="/oferta" className="hover:text-neutral-400 transition-colors">Публичная оферта</Link>
            <Link href="/policy" className="hover:text-neutral-400 transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>

      </div>
    </section>
  )
}

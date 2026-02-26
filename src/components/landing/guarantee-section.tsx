'use client'

import { useRef } from "react"
import { ShieldCheck } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function GuaranteeSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".guarantee-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".guarantee-content", {
      opacity: 0, y: 24, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: ".guarantee-content", start: "top 80%", once: true },
    })
    gsap.from(".guarantee-math", {
      opacity: 0, y: 16, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: ".guarantee-math", start: "top 85%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-black py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="guarantee-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Гарантия
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white">
              Никакого риска с твоей стороны.
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="guarantee-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-linear-to-b from-rose-500/10 to-transparent border border-rose-500/20 rounded-2xl p-sp-md">
            <div className="flex items-center gap-3 mb-sp-sm">
              <ShieldCheck className="w-7 h-7 text-rose-400 shrink-0" />
              <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white">Гарантия первого стрима</h3>
            </div>
            <p className="text-sm text-neutral-400 mb-sp-sm">
              Приди на первый стрим. Открой инструмент. Повтори 3 шага, которые покажет Влад.
            </p>
            <p className="text-sm text-neutral-400 mb-sp-sm">
              Если после этого у тебя не будет ни одного рабочего AI-инструмента, применимого к твоему бизнесу — напиши нам. Мы вернём деньги. Без вопросов. Без «давайте обсудим». Без «а почему не сработало». Просто возврат на карту.
            </p>
            <p className="text-sm text-neutral-400">
              Мы уверены в результате. Если ты придёшь и сделаешь — ты получишь результат. Если не получишь — это наш косяк, а не твой. Мы несём ответственность деньгами.
            </p>
          </div>
        </div>

        {/* Risk math */}
        <div className="guarantee-math grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-sm text-neutral-400 mb-sp-xs">
              Максимальный убыток, если тебе не понравится: <span className="text-white font-bold">$79</span> и 2 часа первого стрима.
            </p>
            <p className="text-sm text-neutral-400 mb-sp-xs">
              Альтернатива — ещё 6 месяцев читать бесплатные каналы без результата.
            </p>
            <p className="text-sm text-neutral-500">
              Если час твоего времени стоит $15 — за последние полгода ты уже потратил <span className="text-neutral-400 font-bold">$2 400+</span> на «бесплатные» исследования. $79 — это самая дешёвая проверка гипотезы, которую ты можешь сделать.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

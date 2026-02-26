'use client'

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const steps = [
  {
    title: "Оплачиваешь — получаешь доступ мгновенно",
    desc: "Никакого «ожидания на неделю». Кликнул → оплатил → уже внутри. Сразу видишь приватный канал, группу и архив предыдущих стримов.",
  },
  {
    title: "Смотришь стрим — видишь сборку с экрана",
    desc: "Влад включает экран и строит AI-агента или воркфлоу в реальном времени. Каждый клик, каждая ошибка, каждое исправление. Настоящая работа, не идеальный прогон.",
  },
  {
    title: "Забираешь воркфлоу — запускаешь за час",
    desc: "После стрима получаешь файл: агент, схему, шаблон. Рабочий инструмент, не «вдохновение». Вставляешь свои данные — запускаешь. Без кода, без «разберись сам».",
  },
  {
    title: "Спрашиваешь — практики отвечают",
    desc: "50+ человек, которые применяют те же инструменты. Написал вопрос → через 20 минут три человека скинули решение. На 3-месячном тарифе — плюс личная Q&A-сессия с Владом по твоему конкретному кейсу.",
  },
]


export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".hiw-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".hiw-step", {
      opacity: 0, y: 24, duration: 0.5, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ".hiw-steps", start: "top 80%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-black py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="hiw-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Как это работает
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white">
              Как это устроено
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="hiw-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          {steps.map((step, i) => (
            <div
              key={i}
              className="hiw-step bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-sm"
            >
              <span className="inline-flex items-center justify-center size-8 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold text-sm mb-sp-sm">
                {i + 1}
              </span>
              <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white mb-sp-xs">
                {step.title}
              </h3>
              <p className="text-sm text-body">{step.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

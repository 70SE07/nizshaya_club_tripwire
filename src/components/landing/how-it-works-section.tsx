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
    title: "Приходишь на стрим — смотришь, как собирают инструмент с экрана",
    desc: "Влад включает экран и строит AI-агента, контент-машину или воркфлоу в реальном времени. Ты видишь каждый клик, каждую ошибку, каждое исправление. Настоящая работа, а не идеальный прогон.",
  },
  {
    title: "Берёшь готовый воркфлоу — адаптируешь за 30–60 минут",
    desc: "После стрима ты получаешь файл: агент, схему, шаблон. Рабочий инструмент, не «вдохновение». Вставляешь свои данные — запускаешь. Без программирования. Без «разберись сам».",
  },
  {
    title: "Задаёшь вопросы — получаешь ответы от практиков",
    desc: "50+ человек, которые применяют те же инструменты. Написал вопрос → через 20 минут три человека скинули решение. На 3-месячном тарифе — плюс личная Q&A-сессия с Владом по твоему конкретному кейсу.",
  },
]

const rhythm = [
  "2 стрима/мес",
  "Ежедневный стек нейронок",
  "1 Joker Speaker/мес",
  "Q&A (тариф 3 мес)",
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
    gsap.from(".hiw-rhythm", {
      opacity: 0, y: 16, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: ".hiw-rhythm", start: "top 90%", once: true },
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
              <p className="text-sm text-neutral-400">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Ритм клуба */}
        <div className="hiw-rhythm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-wrap items-center gap-sp-sm">
            <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Ритм клуба</span>
            {rhythm.map((item, i) => (
              <span key={i} className="text-sm text-neutral-400 bg-neutral-900/50 border border-neutral-800 rounded-full px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

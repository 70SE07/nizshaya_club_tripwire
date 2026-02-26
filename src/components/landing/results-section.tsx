'use client'

import { useRef } from "react"
import { Clock, Zap, TrendingUp, Gem, Check } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const metrics = [
  { icon: Clock,      value: "30 дней",  desc: "до первого рабочего AI-агента" },
  { icon: Zap,        value: "4 часа",   desc: "ежедневной рутины заменяет один воркфлоу" },
  { icon: TrendingUp, value: "2×",       desc: "быстрее конкурентов без автоматизации" },
  { icon: Gem,        value: "35:1",     desc: "соотношение ценности к цене на старте" },
]

const outcomes = [
  "Готовым AI-агентом, который делает рутину вместо тебя — браузер, задачи, коммуникация с клиентами",
  "Контент-заводом на нейросетях: от идеи до поста за 15 минут, без копирайтера",
  "Цифровым продуктом — сайт, лендинг или приложение — без единой строчки кода",
  "Инструментами для AI-видео и дизайна: без монтажёра, без дизайнера",
  "Обновляемым стеком: только то, что реально работает прямо сейчас",
  "Окружением практиков, которые уже зарабатывают на AI и готовы делиться",
]

export function ResultsSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".results-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".results-metric", {
      opacity: 0, y: 20, duration: 0.5, stagger: 0.08, ease: "power2.out",
      scrollTrigger: { trigger: ".results-metrics", start: "top 80%", once: true },
    })
    gsap.from(".results-outcome", {
      opacity: 0, x: -16, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: ".results-outcomes", start: "top 80%", once: true },
    })
    gsap.from(".results-dream", {
      opacity: 0, y: 16, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: ".results-dream", start: "top 85%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-neutral-950 py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="results-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Результат
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white">
              Что изменится. Конкретно.
            </h2>
          </div>
        </div>

        {/* Metrics — 4 плитки */}
        <div className="results-metrics grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          {metrics.map((m, i) => (
            <div key={i} className="results-metric bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-sm text-center">
              <m.icon className="w-6 h-6 text-rose-400 mx-auto mb-sp-xs" />
              <p className="text-white font-bold text-2xl mb-sp-xs">{m.value}</p>
              <p className="text-sm text-body">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="results-outcomes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <p className="text-lg leading-[1.65] text-body mb-sp-sm">
              После первого месяца ты уходишь с:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sp-xs">
              {outcomes.map((item, i) => (
                <div key={i} className="results-outcome flex items-start gap-3">
                  <Check className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-body">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dream state */}
        <div className="results-dream grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <blockquote className="bg-linear-to-b from-rose-500/10 to-transparent border border-rose-500/20 rounded-2xl p-sp-md">
              <p className="text-lg leading-[1.65] text-body-em italic">
                «Ты просыпаешься утром, берёшь телефон — и видишь не тревожные уведомления, а уведомления о поступлениях. Агент обработал заявки ночью. Контент-машина выложила посты. Ты наливаешь кофе и думаешь: что там за ночь прилетело?»
              </p>
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  )
}

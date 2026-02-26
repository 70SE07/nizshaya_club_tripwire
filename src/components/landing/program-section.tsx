'use client'

import { useRef } from "react"
import { Monitor, Zap, Mic, Users, MessageSquare } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const items = [
  {
    icon: Monitor,
    freq: "2 раза в месяц",
    title: "Стримы",
    desc: "Влад берёт реальную задачу и решает её прямо при тебе на экране. Темы — то, что он сам сейчас тестирует или внедряет в свои проекты. Записи остаются в архиве навсегда.",
    list: [
      "AI-агент для обработки входящих заявок без участия человека",
      "Контент-завод: от идеи до 10 форматов за 20 минут",
      "Автоматизация onboarding-а клиентов через Telegram",
      "Vibe-coding: сайт или лендинг без программиста за вечер",
    ],
  },
  {
    icon: Zap,
    freq: "Каждый день",
    title: "Ежедневный стек",
    desc: "Короткая выжимка: что сейчас реально работает, что устарело, какой инструмент протестировали сегодня. Не дайджест — фильтр. Только то, что стоит твоего времени.",
  },
  {
    icon: Mic,
    freq: "1 раз в месяц",
    title: "Joker Speaker",
    desc: "Закрытый эфир от практика из другой ниши. Человек, который уже выстроил рабочую систему и показывает её изнутри. Не «вдохновляющий спикер» — конкретный кейс с экраном и цифрами.",
    list: [
      "Стас Цис — контент-заводы и YouTube",
      "Дэн (Clowbot) — автоматизация продаж и клиентских коммуникаций",
    ],
  },
  {
    icon: Users,
    freq: "Постоянно",
    title: "Закрытая группа",
    desc: "50+ практиков в одном месте. Задал вопрос — получил ответ от человека, который уже решал эту задачу. Не от бота, не из чата на 3 000 человек, не от «поддержки».",
  },
  {
    icon: MessageSquare,
    freq: "Тариф 3 мес",
    title: "Q&A с разбором кейса",
    desc: "Раз в месяц — живой созвон с Владом. Приходишь со своей конкретной задачей: какой агент подойдёт, где ошибка в воркфлоу, как масштабировать. Работа с твоим бизнесом, а не общий вебинар.",
    premium: true,
  },
]

export function ProgramSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".program-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".program-card", {
      opacity: 0, y: 24, duration: 0.5, stagger: 0.08, ease: "power2.out",
      scrollTrigger: { trigger: ".program-grid", start: "top 80%", once: true },
    })
    gsap.from(".program-footer", {
      opacity: 0, y: 16, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: ".program-footer", start: "top 90%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-neutral-950 py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="program-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Программа
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white mb-sp-sm">
              Что конкретно внутри клуба
            </h2>
            <p className="text-lg leading-[1.65] text-body">
              Не курс с модулями и «изучи урок 1 перед уроком 2». Живой клуб — два стрима в месяц, ежедневный стек, практики рядом.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="program-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`program-card rounded-2xl p-sp-sm ${
                item.premium
                  ? "col-span-1 sm:col-span-2 lg:col-span-4 bg-linear-to-b from-rose-500/10 to-transparent border border-rose-500/20"
                  : "sm:col-span-2 bg-neutral-900/50 border border-neutral-800"
              }`}
            >
              <div className="flex items-center gap-3 mb-sp-sm">
                <span className={`inline-block text-sm font-medium rounded-full px-3 py-1 ${
                  item.premium
                    ? "text-rose-400 bg-rose-500/10 border border-rose-500/20"
                    : "text-body bg-neutral-800 border border-neutral-700"
                }`}>
                  {item.freq}
                </span>
              </div>
              <item.icon className={`w-7 h-7 mb-sp-sm ${item.premium ? "text-rose-400" : "text-body"}`} />
              <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white mb-sp-xs">{item.title}</h3>
              <p className="text-sm text-body mb-sp-sm">{item.desc}</p>
              {item.list && (
                <div className="flex flex-col gap-1.5">
                  {item.list.map((line, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="text-rose-400 text-sm mt-px shrink-0">—</span>
                      <span className="text-sm text-muted">{line}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="program-footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-muted text-sm italic">
              Это не курс, который ты купишь и забудешь на вкладке. Это среда, которая держит тебя в движении — пока не выстроишь свою систему.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

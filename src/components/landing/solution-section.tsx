'use client'

import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const rows = [
  { old: "Говорят, что делать", now: "Показывают экран — как делать" },
  { old: "40 часов теории до первого результата", now: "Первый результат — на первом стриме" },
  { old: "Информация устаревает через месяц", now: "Новые связки каждые 2 недели, живые стримы" },
  { old: "Чужие кейсы, которые тебе не подходят", now: "Готовые воркфлоу — копируй под свою нишу" },
  { old: "Чат из 3 000 человек с мемами", now: "50+ практиков, которые отвечают по делу" },
  { old: "Нужно знать код и API", now: "Работает без программирования" },
]

export function SolutionSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".solution-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })

    // Фаза 1: строки появляются (только "old" часть видна)
    gsap.from(".solution-row", {
      opacity: 0, y: 16, duration: 0.3, stagger: 0.04, ease: "power2.out",
      scrollTrigger: { trigger: ".solution-rows", start: "top 80%", once: true },
    })

    // Фаза 2: трансформация — old затухает, стрелка и new появляются
    rows.forEach((_, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".solution-rows",
          start: "top 70%",
          once: true,
        },
        delay: 0.4 + i * 0.1,
      })

      // Затухаем old
      tl.to(`.sol-old-${i}`, {
        opacity: 0.4,
        duration: 0.2,
        ease: "power2.out",
      })
      // Показываем стрелку
      tl.from(`.sol-arrow-${i}`, {
        opacity: 0, scale: 0.5,
        duration: 0.15,
        ease: "back.out(2)",
      }, "-=0.08")
      // Показываем new
      tl.from(`.sol-new-${i}`, {
        opacity: 0, x: 20,
        duration: 0.25,
        ease: "power2.out",
      }, "-=0.08")
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-neutral-950 py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="solution-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Решение
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white mb-sp-sm">
              Мы не учим. Мы отдаём готовое.
            </h2>
            <p className="text-lg leading-[1.65] text-neutral-400 max-w-2xl">
              Низшая Лига — AI-клуб, где вместо презентаций ты видишь экран. Влад берёт реальную задачу из своего бизнеса и строит решение прямо при тебе: с ошибками, правками, живыми вопросами из чата. Ты повторяешь следом и уходишь с готовым инструментом.
            </p>
          </div>
        </div>

        {/* Column headers — desktop */}
        <div className="hidden sm:grid sm:grid-cols-[1fr_auto_1fr] items-center gap-4 mb-sp-sm">
          <span className="text-sm font-semibold text-neutral-500 border-b border-neutral-800 pb-sp-xs">Обычные курсы и каналы</span>
          <span className="w-4" />
          <span className="text-sm font-semibold text-rose-400 border-b border-rose-500/20 pb-sp-xs">Низшая Лига</span>
        </div>

        {/* Rows */}
        <div className="solution-rows grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col gap-2">
            {rows.map((row, i) => (
              <div
                key={i}
                className="solution-row rounded-xl border border-neutral-800/30 bg-neutral-900/20 p-sp-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  {/* Old */}
                  <div className={`sol-old-${i} flex items-center gap-2 sm:flex-1`}>
                    <span className="text-neutral-600 text-xs font-medium uppercase tracking-wider sm:hidden">Курсы</span>
                    <p className="text-sm text-neutral-400">
                      {row.old}
                    </p>
                  </div>

                  {/* Arrow — desktop only */}
                  <ArrowRight className={`sol-arrow-${i} w-4 h-4 text-rose-500 shrink-0 hidden sm:block`} />

                  {/* New */}
                  <div className={`sol-new-${i} flex items-center gap-2 sm:flex-1`}>
                    <span className="text-rose-400 text-xs font-medium uppercase tracking-wider sm:hidden">Клуб</span>
                    <p className="text-sm text-white font-medium">
                      {row.now}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

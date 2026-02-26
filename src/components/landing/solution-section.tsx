'use client'

import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { solutionRows } from "@/constants/content"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"

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
    solutionRows.forEach((_, i) => {
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
    <SectionContainer ref={ref}>

      {/* Header */}
      <SectionHeader
        label="Решение"
        title="Мы не учим. Мы отдаём готовое."
        subtitle="Низшая Лига — AI-клуб, где вместо презентаций ты видишь экран. Влад берёт реальную задачу из своего бизнеса и строит решение прямо при тебе: с ошибками, правками, живыми вопросами из чата. Ты повторяешь следом и уходишь с готовым инструментом."
        className="solution-header"
      />

      {/* Column headers — desktop */}
      <div className="hidden sm:grid sm:grid-cols-[1fr_auto_1fr] items-center gap-4 mb-sp-sm">
        <span className="text-sm font-semibold text-body border-b border-neutral-800 pb-sp-xs">Обычные курсы и каналы</span>
        <span className="w-4" />
        <span className="text-sm font-semibold text-rose-400 border-b border-rose-500/20 pb-sp-xs">Низшая Лига</span>
      </div>

      {/* Rows */}
      <div className="solution-rows grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col gap-2">
          {solutionRows.map((row, i) => (
            <div
              key={i}
              className="solution-row rounded-xl border border-neutral-800/30 bg-neutral-900/20 p-sp-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                {/* Old */}
                <div className={`sol-old-${i} flex items-baseline gap-2 sm:items-center sm:flex-1`}>
                  <span className="text-muted text-[11px] font-semibold uppercase tracking-wider sm:hidden min-w-11">Курсы</span>
                  <p className="text-sm sm:text-lg leading-[1.65] text-body">
                    {row.old}
                  </p>
                </div>

                {/* Arrow — desktop only */}
                <ArrowRight className={`sol-arrow-${i} w-4 h-4 text-rose-500 shrink-0 hidden sm:block`} />

                {/* New */}
                <div className={`sol-new-${i} flex items-baseline gap-2 sm:items-center sm:flex-1`}>
                  <span className="text-rose-400 text-[11px] font-semibold uppercase tracking-wider sm:hidden min-w-11">Клуб</span>
                  <p className="text-sm sm:text-lg leading-[1.65] text-white font-medium">
                    {row.now}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </SectionContainer>
  )
}

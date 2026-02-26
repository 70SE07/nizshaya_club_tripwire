'use client'

import { useRef } from "react"
import { Bot, Layers, Code, Video, Lock, Calendar } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { topicsSchedule, topicsHighlights } from "@/constants/content"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"

const icons = [Bot, Layers, Code, Video, Lock]

const monthNames = [
  "январь", "февраль", "март", "апрель", "май", "июнь",
  "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь",
]

export function TopicsSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".topics-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".topic-card", {
      opacity: 0, y: 24, duration: 0.5, stagger: 0.08, ease: "power2.out",
      scrollTrigger: { trigger: ".topics-grid", start: "top 80%", once: true },
    })
    gsap.from(".topics-schedule", {
      opacity: 0, y: 20, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: ".topics-schedule", start: "top 85%", once: true },
    })
  }, { scope: ref })

  const now = new Date()
  const key = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
  const topics = topicsSchedule[key]
  const month = monthNames[now.getMonth()]

  return (
    <SectionContainer ref={ref} bg="bg-black">

      <SectionHeader
        label="Темы стримов"
        title="Разбираем то, что уже приносит деньги"
        subtitle="2 раза в месяц — стрим. Новый инструмент, новый кейс, новая связка. Показываем с экрана, повторяешь — забираешь."
        className="topics-header"
      />

      {/* Cards 2×2 + full */}
      <div className="topics-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {topicsHighlights.map((item, i) => {
          const Icon = icons[i]
          const isFull = 'full' in item && item.full
          return (
            <div
              key={i}
              className={`topic-card bg-linear-to-b from-rose-500/10 to-transparent border border-rose-500/20 rounded-2xl p-sp-sm ${isFull ? "col-span-1 sm:col-span-2 lg:col-span-4" : "sm:col-span-2"}`}
            >
              <span className="inline-block text-sm font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-full px-3 py-1 mb-sp-sm">
                {item.tag}
              </span>
              <Icon className="w-7 h-7 text-rose-400 mb-sp-sm" />
              <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white mb-sp-xs">{item.title}</h3>
              <p className="text-sm text-body">{item.desc}</p>
            </div>
          )
        })}
      </div>

      {/* Schedule */}
      <div className="mt-sp-md">
        {topics && (
          <div className="topics-schedule card-base p-sp-md!">
            <div className="flex items-center gap-2 mb-sp-sm">
              <Calendar className="w-5 h-5 text-rose-400" />
              <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white">Стримы в {month}е</h3>
            </div>
            <div className="flex flex-col gap-sp-xs">
              {topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <span className="text-rose-400 font-bold text-sm w-6 shrink-0">{i + 1}.</span>
                  <span className="text-body text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </SectionContainer>
  )
}

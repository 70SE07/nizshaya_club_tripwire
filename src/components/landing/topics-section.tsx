'use client'

import { useState, useEffect } from "react"
import { Bot, Layers, Code, Video, Lock, Calendar } from "lucide-react"
import { TOPICS_REVEAL } from "@/constants/animations"
import { topicsSchedule, topicsHighlights } from "@/constants/content"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"

const icons = [Bot, Layers, Code, Video, Lock]

const monthNamesLocative: Record<number, string> = {
  0: "січні",
  1: "лютому",
  2: "березні",
  3: "квітні",
  4: "травні",
  5: "червні",
  6: "липні",
  7: "серпні",
  8: "вересні",
  9: "жовтні",
  10: "листопаді",
  11: "грудні",
}

export function TopicsSection() {
  const [schedule, setSchedule] = useState<{ topics: string[]; month: string } | null>(null)

  useEffect(() => {
    const now = new Date()
    const key = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
    const topics = topicsSchedule[key]
    if (topics) {
      setSchedule({ topics, month: monthNamesLocative[now.getMonth()] })
    }
  }, [])

  return (
    <ScrollAnimationWrapper
      reveal={TOPICS_REVEAL}
      bg="bg-black"
      label="Теми стримів"
      title="Розбираємо те, що вже приносить гроші"
      subtitle="2 рази на місяць — стрим. Новий інструмент, новий кейс, нова зв'язка. Показуємо з екрана, повторюєш — забираєш."
      headerClassName="topics-header"
    >
      {/* Cards 2×2 + full */}
      <div className="topics-grid grid-section">
        {topicsHighlights.map((item, i) => {
          const Icon = icons[i]
          const isFull = item.full
          return (
            <div
              key={i}
              className={`topic-card bg-linear-to-b from-rose-500/10 to-transparent border border-rose-500/20 rounded-2xl p-sp-sm ${isFull ? "col-full" : "sm:col-span-2"}`}
            >
              <span className="inline-block text-sm font-medium badge-accent rounded-full px-3 py-1 mb-sp-sm">
                {item.tag}
              </span>
              <Icon className="w-7 h-7 text-rose-400 mb-sp-sm" />
              <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white mb-sp-xs">{item.title}</h3>
              <p className="text-sm text-body">{item.desc}</p>
            </div>
          )
        })}
      </div>

      {/* Schedule — rendered only on client to avoid hydration mismatch */}
      {schedule && (
        <div className="mt-sp-md">
          <div className="topics-schedule card-base p-sp-md!">
            <div className="flex items-center gap-2 mb-sp-sm">
              <Calendar className="w-5 h-5 text-rose-400" />
              <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white">Стрими у {schedule.month}</h3>
            </div>
            <div className="flex flex-col gap-sp-xs">
              {schedule.topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <span className="text-rose-400 font-bold text-sm w-6 shrink-0">{i + 1}.</span>
                  <span className="text-body text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ScrollAnimationWrapper>
  )
}

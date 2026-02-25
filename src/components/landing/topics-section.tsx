'use client'

import { useRef } from "react"
import { Bot, Layers, Code, Video, Lock, Calendar } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const monthNames = [
  "январь", "февраль", "март", "апрель", "май", "июнь",
  "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь",
]

const schedule: Record<string, string[]> = {
  "2026-02": [
    "OpenClaw — собираем AI-агента",
    "Контент-завод на нейросетях",
    "Вайб-кодинг: продукт без кода",
    "AI-видео и креатив без продакшна",
    "Закрытый эфир с экспертом",
  ],
}

const highlights = [
  { icon: Bot,   tag: "Хайп",         title: "OpenClaw",                        desc: "Собираем AI-агента, который работает за тебя: в браузере, пишет код и выполняет задачи" },
  { icon: Layers,tag: "Кейс",         title: "Контент-завод",                   desc: "Конвейер: идея → текст → визуал → пост. Рилсы, сторис, Telegram, сайт" },
  { icon: Code,  tag: "Новое",        title: "Вайб-кодинг",                     desc: "Сайт, приложение, программа и что угодно ещё — через AI, без программирования. Cursor, Claude Code — покажем как" },
  { icon: Video, tag: "Тренд",        title: "AI-видео и креатив без продакшна", desc: "Kling, ElevenLabs, Seedream 2.0 и другие. Создание фото, видео, озвучки и дизайна нейросетями. Без дизайнера и монтажёра." },
  { icon: Lock,  tag: "Только внутри",title: "Это не всё",                      desc: "Это только то, что мы показываем публично. Внутри — кейсы спикеров, связки от практиков и наработки комьюнити. То, что не выкладывают в открытый доступ. Потому что за это платят.", full: true },
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
  const topics = schedule[key]
  const month = monthNames[now.getMonth()]

  return (
    <section ref={ref} className="bg-neutral-950 ds-section">
      <div className="ds-container">

        {/* Header */}
        <div className="topics-header ds-grid" style={{ marginBottom: "var(--sp-md)" }}>
          <div className="ds-col-3">
            <p className="t-label text-rose-400" style={{ marginBottom: "var(--sp-xs)" }}>
              Темы стримов
            </p>
            <h2 className="t-h2 text-white" style={{ marginBottom: "var(--sp-sm)" }}>
              Разбираем то, что уже приносит деньги
            </h2>
            <p className="t-body text-neutral-400 max-w-2xl">
              2 раза в месяц — стрим. Новый инструмент, новый кейс, новая связка.
              Показываем с экрана, повторяешь — забираешь.
            </p>
          </div>
        </div>

        {/* Cards 2×2 + full */}
        <div className="topics-grid ds-grid">
          {highlights.map((item, i) => (
            <div
              key={i}
              className={`topic-card bg-gradient-to-b from-rose-500/10 to-transparent border border-rose-500/20 rounded-2xl p-5 ${item.full ? "ds-col-4" : "ds-col-2"}`}
            >
              <span
                className="inline-block t-small font-medium text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-full px-3 py-1"
                style={{ marginBottom: "var(--sp-sm)" }}
              >
                {item.tag}
              </span>
              <item.icon className="w-7 h-7 text-rose-400" style={{ marginBottom: "var(--sp-sm)" }} />
              <h3 className="t-h3 text-white" style={{ marginBottom: "var(--sp-xs)" }}>{item.title}</h3>
              <p className="t-small text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Schedule */}
        {topics && (
          <div
            className="topics-schedule bg-neutral-900/50 border border-neutral-800 rounded-2xl"
            style={{ marginTop: "var(--sp-md)", padding: "var(--sp-md)" }}
          >
            <div className="flex items-center gap-2" style={{ marginBottom: "var(--sp-sm)" }}>
              <Calendar className="w-5 h-5 text-rose-400" />
              <h3 className="t-h3 text-white">Стримы в {month}е</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-xs)" }}>
              {topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <span className="text-rose-400 font-bold t-small w-6 shrink-0">{i + 1}.</span>
                  <span className="text-neutral-300 t-small">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

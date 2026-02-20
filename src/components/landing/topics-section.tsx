'use client'

import { motion } from "framer-motion"
import { Bot, Layers, Code, Video, Lock, Calendar } from "lucide-react"

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
  {
    icon: Bot,
    tag: "Хайп",
    title: "OpenClaw",
    desc: "Собираем AI-агента, который работает за тебя: в браузере, пишет код и выполняет задачи",
  },
  {
    icon: Layers,
    tag: "Кейс",
    title: "Контент-завод",
    desc: "Конвейер: идея → текст → визуал → пост. Рилсы, сторис, Telegram, сайт",
  },
  {
    icon: Code,
    tag: "Новое",
    title: "Вайб-кодинг",
    desc: "Сайт, приложение, программа и что угодно ещё — через AI, без программирования. Cursor, Claude Code — покажем как",
  },
  {
    icon: Video,
    tag: "Тренд",
    title: "AI-видео и креатив без продакшна",
    desc: "Kling, ElevenLabs, Seedream 2.0 и другие. Создание фото, видео, озвучки и дизайна нейросетями. Без дизайнера и монтажёра.",
  },
  {
    icon: Lock,
    tag: "Только внутри",
    title: "Это не всё",
    desc: "Это только то, что мы показываем публично. Внутри — кейсы спикеров, связки от практиков и наработки комьюнити. То, что не выкладывают в открытый доступ. Потому что за это платят.",
    full: true,
  },
]

export function TopicsSection() {
  return (
    <section className="bg-neutral-950 py-8 px-8 md:px-16">
      <div className="max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-8"
        >
          <p className="text-rose-400 text-sm font-medium uppercase tracking-wider mb-3">
            Темы стримов
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Разбираем то, что уже приносит деньги
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            2 раза в месяц — стрим. Новый инструмент, новый кейс, новая связка.
            Показываем с экрана, повторяешь — забираешь.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-b from-rose-500/10 to-transparent border border-rose-500/20 rounded-2xl p-5 text-left ${
                item.full ? "md:col-span-2" : ""
              }`}
            >
              <span className="inline-block text-xs font-medium text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-full px-3 py-1 mb-3">
                {item.tag}
              </span>
              <item.icon className="w-8 h-8 text-rose-400 mb-3" />
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-neutral-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {(() => {
          const now = new Date()
          const key = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
          const topics = schedule[key]
          if (!topics) return null
          const month = monthNames[now.getMonth()]
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-rose-400" />
                <h3 className="text-white font-semibold text-lg">
                  Стримы в {month}е
                </h3>
              </div>
              <div className="space-y-2">
                {topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-3 py-2">
                    <span className="text-rose-400 font-bold text-sm w-6 shrink-0">{i + 1}.</span>
                    <span className="text-neutral-300 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })()}

      </div>
    </section>
  )
}

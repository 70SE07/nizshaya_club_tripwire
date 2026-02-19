'use client'

import { motion } from "framer-motion"
import { Brain, Hand, Heart, MessageCircle, Zap } from "lucide-react"

const days = [
  {
    day: 1,
    icon: Brain,
    title: "Психология и стыд",
    desc: "Снимаем блоки «хорошие девочки так не делают». Разрешаем себе быть сексуальной. Без стыда.",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    day: 2,
    icon: Zap,
    title: "Эрогенные зоны и флирт",
    desc: "Карта эрогенных зон. Как завести его одним прикосновением ещё до минета.",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    day: 3,
    icon: Hand,
    title: "Техники без боли",
    desc: "Убираем рвотный рефлекс. Правильное дыхание. Руки + рот = его взрыв.",
    color: "from-rose-500/20 to-rose-500/5",
    border: "border-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    day: 4,
    icon: Heart,
    title: "Прелюдия и возбуждение",
    desc: "Как сделать так, чтобы ОН молил о близости. Техники прелюдии, от которых теряют голову.",
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    day: 5,
    icon: MessageCircle,
    title: "Интеграция и диалог",
    desc: "Как говорить о сексе без стыда. Как перенести навыки в реальную жизнь с партнёром.",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
]

export function ProgramSection() {
  return (
    <section id="program" className="bg-neutral-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Программа интенсива
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            5 дней. От психологии до продвинутых техник.
            Каждый день — конкретный навык, который ты применишь вечером.
          </p>
        </motion.div>

        <div className="space-y-4">
          {days.map((day, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`bg-gradient-to-r ${day.color} border ${day.border} rounded-2xl p-6 flex items-start gap-5`}
            >
              <div className="flex flex-col items-center shrink-0">
                <span className="text-neutral-600 text-xs font-medium uppercase tracking-wider">День</span>
                <span className="text-white text-2xl font-bold">{day.day}</span>
              </div>
              <div className="flex items-start gap-4 flex-1">
                <div className="p-2 bg-neutral-900/50 rounded-lg shrink-0">
                  <day.icon className={`w-5 h-5 ${day.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{day.title}</h3>
                  <p className="text-neutral-400 mt-1">{day.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

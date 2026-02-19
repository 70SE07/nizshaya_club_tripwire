'use client'

import { motion } from "framer-motion"
import { AlertTriangle, Heart, Brain, Frown } from "lucide-react"

const pains = [
  {
    icon: Frown,
    title: "Устаёт челюсть за 2 минуты",
    desc: "Больно, неудобно, хочется чтобы это быстрее закончилось. Знакомо?",
  },
  {
    icon: AlertTriangle,
    title: "Рвотный рефлекс",
    desc: "Он хочет глубже, а ты задыхаешься. И стыдно признаться.",
  },
  {
    icon: Brain,
    title: "Голова вместо ощущений",
    desc: "«Правильно ли я делаю? Не выгляжу ли смешно? Когда уже всё?»",
  },
  {
    icon: Heart,
    title: "Страсть угасла",
    desc: "Секс по расписанию. Он реже инициирует. Ты боишься, что он уйдёт.",
  },
]

export function PainSection() {
  return (
    <section className="bg-neutral-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Узнаёшь себя?
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            80% женщин терпят эти проблемы молча. Считают, что «так у всех».
            Но это не норма — это сигнал.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-rose-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-500/10 rounded-xl shrink-0">
                  <pain.icon className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{pain.title}</h3>
                  <p className="text-neutral-400">{pain.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-2xl p-6 max-w-2xl">
            <p className="text-rose-200 text-lg italic">
              «Я чувствовала себя обслугой. Когда я на коленях — мне было стыдно, а не сексуально.
              Я ждала, когда это закончится.»
            </p>
            <p className="text-neutral-500 text-sm mt-3">— Из анонимных анкет учениц</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

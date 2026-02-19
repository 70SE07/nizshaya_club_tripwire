'use client'

import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Check } from "lucide-react"

const transformations = [
  { before: "Устаёт челюсть за 2 минуты", after: "30+ минут без дискомфорта" },
  { before: "Рвотный рефлекс", after: "Глубокое горло без единого позыва" },
  { before: "«Я выгляжу смешно»", after: "«Я чувствую себя Богиней»" },
  { before: "Секс — обязаловка", after: "Секс — её игра, её власть" },
  { before: "Он смотрит порно", after: "Он летит домой с цветами" },
]

export function SolutionSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">
              Что изменится за 5 дней
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Из «терплю» — в{' '}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              «он сходит с ума»
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Это не про «правильную технику». Это про состояние, в котором тебе кайфово,
            а ему сносит крышу.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-neutral-900/30 border border-neutral-800/50 rounded-xl p-4"
            >
              <span className="text-neutral-500 line-through text-sm md:text-base flex-1">
                {t.before}
              </span>
              <ArrowRight className="w-5 h-5 text-rose-400 shrink-0" />
              <span className="text-white font-medium text-sm md:text-base flex-1">
                {t.after}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-emerald-200 text-lg italic">
              «После курса он сказал: "Где ты этому научилась?!" У него буквально подкосились ноги.
              Я чувствовала себя Королевой.»
            </p>
            <p className="text-neutral-500 text-sm mt-3">— Анна, 34 года</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

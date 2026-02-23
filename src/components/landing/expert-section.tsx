'use client'

import { motion } from "framer-motion"
import { Zap, TrendingUp, Users } from "lucide-react"

export function ExpertSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Avatar */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/20 flex items-center justify-center shrink-0">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mb-3">
                <span className="text-4xl font-bold text-white">В</span>
              </div>
              <p className="text-neutral-400 text-sm">Основатель клуба</p>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Влад Ясько — основатель клуба
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              Предприниматель. Сам запускает AI-агентов в своём бизнесе и показывает что реально работает. Не из учебника — из того, что уже сделал сам.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                <Zap className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Агенты</p>
                <p className="text-neutral-500 text-sm">Работают 24/7</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                <TrendingUp className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Воркфлоу</p>
                <p className="text-neutral-500 text-sm">Под реальный бизнес</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                <Users className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Участники</p>
                <p className="text-neutral-500 text-sm">В закрытом клубе</p>
              </div>
            </div>

            <p className="text-neutral-500 text-sm mt-6 italic">
              Не объясняет зачем важны нейросети. Показывает как их запустить так, чтобы они уже работали на тебя.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

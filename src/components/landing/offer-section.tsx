'use client'

import { motion } from "framer-motion"
import { Check, Zap, Shield, Clock, Eye, Gift } from "lucide-react"

const included = [
  "5 видео-уроков (от психологии до техник)",
  "Пошаговые инструкции: дыхание, руки, ритм",
  "Техника убирания рвотного рефлекса",
  "Гайд «Как говорить о сексе без стыда»",
  "Чек-лист эрогенных зон мужчины",
  "Доступ к записям навсегда",
]

const bonuses = [
  "Бонус: Мини-гайд «Прелюдия, от которой он теряет голову»",
  "Бонус: Аудио-медитация на снятие телесных блоков",
]

export function OfferSection() {
  return (
    <section id="offer" className="bg-neutral-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Получи доступ прямо сейчас
          </h2>
          <p className="text-neutral-400 text-lg">
            Одна инвестиция — навык на всю жизнь
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-neutral-900 to-neutral-900/50 border border-rose-500/20 rounded-3xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-6 text-center">
            <p className="text-rose-100 text-sm font-medium mb-1">Интенсив «Взрослые игры»</p>
            <div className="flex items-end justify-center gap-2">
              <span className="text-white/50 line-through text-2xl">$79</span>
              <span className="text-white text-5xl font-bold">$29</span>
            </div>
            <p className="text-rose-200 text-sm mt-2">Цена как один поход в кафе</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="text-white font-semibold text-lg mb-4">Что входит:</h3>
            <div className="space-y-3 mb-8">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-800 pt-6 mb-8">
              <div className="space-y-3">
                {bonuses.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-amber-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="block w-full text-center px-8 py-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl text-xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] transform"
            >
              Получить доступ за $29
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-neutral-500 text-sm">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" /> Гарантия возврата 14 дней
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" /> В выписке нейтральное название
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Смотри в своём темпе
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

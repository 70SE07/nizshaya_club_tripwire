'use client'

import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-b from-neutral-950 to-black py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Каждый день без этого навыка —{' '}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              день упущенного кайфа
            </span>
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
            Ты можешь закрыть эту страницу и вернуться к обычному сексу.
            Или за цену одного ужина в кафе — изменить всё.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl text-xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transform mb-6"
          >
            Начать за $29 <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex items-center justify-center gap-2 text-neutral-600 text-sm">
            <Clock className="w-4 h-4" />
            <span>Доступ открывается мгновенно после оплаты</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-neutral-900">
          <p className="text-neutral-700 text-sm">
            Deep Soul School | Сексолог Катя | Все права защищены
          </p>
        </div>
      </div>
    </section>
  )
}

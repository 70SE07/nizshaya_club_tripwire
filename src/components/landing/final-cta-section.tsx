'use client'

import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

export function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-b from-neutral-950 to-black py-8 px-8 md:px-16">
      <div className="max-w-3xl text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Пока ты читаешь статьи в Telegram —{' '}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              кто-то уже зарабатывает с помощью AI
            </span>
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-xl">
            Ты можешь закрыть эту страницу и дальше дрочить на обзоры нейронок в Telegram.
            А можешь зайти туда, где на них уже зарабатывают.
          </p>

          <a
            href="https://t.me/ligayasko_bot?start=tariffs"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl text-xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transform mb-6"
          >
            Вступить в клуб <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex items-center gap-2 text-neutral-600 text-sm">
            <Clock className="w-4 h-4" />
            <span>Доступ открывается мгновенно после оплаты</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-neutral-900 text-neutral-700 text-sm space-y-2">
          <p>© Низшая Лига | Все права защищены</p>
          <div className="flex gap-4">
            <Link href="/oferta" className="hover:text-neutral-400 transition-colors">Публичная оферта</Link>
            <Link href="/policy" className="hover:text-neutral-400 transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

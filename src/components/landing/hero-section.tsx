'use client'

import { VladScene } from "@/components/ui/vlad-model"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="hero" className="relative">
      <Card className="w-full min-h-[500px] md:h-auto bg-transparent relative rounded-none border-0">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e11d48" />

        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                </span>
                <span className="text-rose-300 text-sm font-medium">
                  Стримы 2 раза в месяц
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                Первый результат —
                <br />
                <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                  уже на первом стриме.
                </span>
              </h1>

              <p className="mt-6 text-neutral-300 max-w-lg text-lg leading-relaxed">
                Низшая Лига — это закрытое AI комьюнити, где вместо теории тебе отдают готовые агенты, воркфлоу и связки. Мы показываем экран и строим инструмент вживую. Ты повторяешь следом. Первый результат — на первом стриме.
              </p>

              <p className="mt-3 text-neutral-500 text-sm">
                50+ практиков внутри · 2 стрима в месяц · Показываем экран, не слайды · Без кода · Доступ открывается мгновенно
              </p>

              <div className="mt-8">
                <a
                  href="https://t.me/ligayasko_bot?start=tariffs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-xl text-lg hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 transform"
                >
                  Вступить в клуб за $79 / мес
                </a>
                <p className="mt-3 text-neutral-500 text-sm">
                  Или 3 месяца за $150 (экономия 37%). Гарантия возврата после первого стрима — если не получишь рабочий инструмент, вернём деньги.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative hidden md:block">
            <VladScene className="w-full h-full" />
          </div>
        </div>
      </Card>
    </section>
  )
}

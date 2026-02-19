'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { Flame, Shield, Clock, Eye } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative">
      <Card className="w-full min-h-[600px] md:h-[700px] bg-black/[0.96] relative overflow-hidden rounded-none border-0">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e11d48" />

        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-1.5 mb-6">
                <Flame className="w-4 h-4 text-rose-400" />
                <span className="text-rose-300 text-sm font-medium">
                  5-дневный интенсив «Взрослые игры»
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                Секреты, о которых
                <br />
                <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                  он будет умолять
                </span>
              </h1>

              <p className="mt-6 text-neutral-300 max-w-lg text-lg leading-relaxed">
                Научись искусству оральных ласк так, чтобы он потерял голову. 
                Без боли в челюсти. Без стыда. С кайфом для тебя.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#offer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-xl text-lg hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 transform"
                >
                  Хочу на курс — $29
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-neutral-300 font-medium rounded-xl text-lg hover:bg-neutral-800/50 transition-all"
                >
                  Программа курса
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 md:gap-6 text-neutral-500 text-sm">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" /> Гарантия 14 дней
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" /> Анонимно
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Доступ навсегда
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}

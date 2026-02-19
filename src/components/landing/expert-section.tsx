'use client'

import { motion } from "framer-motion"
import { GraduationCap, Award, Users } from "lucide-react"

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
          {/* Photo placeholder */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/20 flex items-center justify-center shrink-0">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mb-3">
                <span className="text-4xl font-bold text-white">К</span>
              </div>
              <p className="text-neutral-400 text-sm">Фото эксперта</p>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Катя — сексолог-практик
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              Дипломированный психолог и сексолог. Не блогер, который начитался книг.
              Не коуч без образования. Профессионал, который работает с головой И с телом одновременно.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                <GraduationCap className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Диплом</p>
                <p className="text-neutral-500 text-sm">Психолог + сексолог</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                <Users className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white font-semibold">700+</p>
                <p className="text-neutral-500 text-sm">Учениц прошли курс</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                <Award className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Экологично</p>
                <p className="text-neutral-500 text-sm">Без манипуляций</p>
              </div>
            </div>

            <p className="text-neutral-500 text-sm mt-6 italic">
              Подход «Анти-Агапитова»: без вульгарности, без «удержи мужика». 
              Секс — как искусство и эстетика, не как обязанность.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

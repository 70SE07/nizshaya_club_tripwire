'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Flame, Eye, Hammer } from "lucide-react"

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
          {/* Photo */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-rose-500/20 shrink-0">
            <Image
              src="/vlad-photo.jpg"
              alt="Влад Ясько"
              width={320}
              height={320}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Влад Ясько — основатель клуба
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              Предприниматель. Запускает AI-агентов в своём бизнесе и показывает что работает. Всё из личного опыта.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                <Hammer className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Помешан на AI</p>
                <p className="text-neutral-500 text-sm">Создаёт и учит</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                <Eye className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Осеменил AI</p>
                <p className="text-neutral-500 text-sm">И построил из них целый отдел</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                <Flame className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Без фильтров</p>
                <p className="text-neutral-500 text-sm">Говорит о провалах открыто</p>
              </div>
            </div>

            <p className="text-neutral-500 text-sm mt-6 italic">
              Говорит о том, как запустить агентов, а не о том, зачем они важны.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

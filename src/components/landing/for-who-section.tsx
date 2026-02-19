'use client'

import { motion } from "framer-motion"

export function ForWhoSection() {
  return (
    <section className="bg-neutral-950 py-8 px-8 md:px-16">
      <div className="max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <p className="text-rose-400 text-sm font-medium uppercase tracking-wider mb-3">
            Для кого
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Все говорят про AI.
            <br />
            А мы на нём зарабатываем.
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Мы не учим — мы показываем экран и делаем вместе.
            Что работает, то и берём. Здесь из низшей лиги переходят
            в высшую. Без воды, без теории, без соплей.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

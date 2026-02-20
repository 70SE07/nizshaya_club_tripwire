'use client'

import { motion } from "framer-motion"
import { Check, Gift } from "lucide-react"

const monthlyFeatures = [
  "Еженедельные стримы с записью",
  "Ежедневный стек нейронок — только проверенные, без воды",
  "Готовые решения на нейронках — скачиваешь и пользуешься",
  "Закрытая группа практиков",
  "Приватный канал с контентом",
]

const monthlyBonuses = [
  "Joker Speaker — закрытый эфир с топовым экспертом AI-рынка",
  "Готовые воркфлоу контент-завода для инстаблогеров",
]

const quarterlyExtra = [
  "Всё из месячного тарифа",
  "Q&A сессия раз в месяц — приходишь со своим кейсом, разбираем вместе",
  "Приоритетный доступ к новым материалам",
]

export function OfferSection() {
  return (
    <section id="offer" className="bg-neutral-950 py-8 px-8 md:px-16">
      <div className="max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-10"
        >
          <p className="text-rose-400 text-sm font-medium uppercase tracking-wider mb-3">
            Тарифы
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Хватит дрочить на бесплатные гайды
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Одна подписка вместо десятков каналов, курсов и пересказов чужих пересказов.
            Тут не читают — тут делают.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1 — Monthly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden hover:border-rose-500/30 transition-colors flex flex-col"
          >
            <div className="p-8 flex flex-col flex-1">
              {/* Price block */}
              <div className="mb-6">
                <p className="text-neutral-500 text-sm font-medium mb-2">Подписка</p>
                <h3 className="text-2xl font-bold text-white mb-1">1 месяц</h3>
                <div className="flex items-end gap-2">
                  <span className="text-white text-4xl font-bold">$79</span>
                  <span className="text-neutral-500 text-lg">/мес</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6 flex-1">
                {monthlyFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Bonuses */}
              <div className="border-t border-neutral-800 pt-6 mb-6">
                <div className="space-y-3">
                  {monthlyBonuses.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-amber-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://t.me/ligayasko_bot?start=tariffs"
                className="block w-full text-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl text-lg hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] transform mt-auto"
              >
                Вступить в клуб
              </a>
            </div>
          </motion.div>

          {/* Card 2 — Quarterly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-neutral-900 to-neutral-900/50 border border-rose-500/30 rounded-3xl overflow-hidden relative flex flex-col"
          >
            <div className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Выгодно
            </div>
            <div className="p-8 flex flex-col flex-1">
              {/* Price block */}
              <div className="mb-6">
                <p className="text-neutral-500 text-sm font-medium mb-2">Подписка</p>
                <h3 className="text-2xl font-bold text-white mb-1">3 месяца</h3>
                <div className="flex items-end gap-2">
                  <span className="text-white/50 line-through text-2xl">$237</span>
                  <span className="text-white text-4xl font-bold">$150</span>
                </div>
                <p className="text-rose-400 text-sm mt-1">$50/мес — экономия 37%</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6 flex-1">
                {quarterlyExtra.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Bonuses */}
              <div className="border-t border-neutral-800 pt-6 mb-6">
                <div className="space-y-3">
                  {monthlyBonuses.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-amber-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://t.me/ligayasko_bot?start=tariffs"
                className="block w-full text-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl text-lg hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] transform mt-auto"
              >
                Вступить в клуб
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

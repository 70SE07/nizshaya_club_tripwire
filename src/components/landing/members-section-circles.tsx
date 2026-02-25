'use client'

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const members = [
  {
    name: "DEN",
    role: "Предприниматель, Испания",
    desc: "Внедрил AI в работу, закрыл ипотеку за год. Создаёт продукты голосом, обучил 400 человек",
    metric: "Ипотека Закрыта",
    photo: "/members/den.jpg",
  },
  {
    name: "Vadim Anisimov",
    role: "Создатель Nimses",
    desc: "Запускал продукт на 100M пользователей. Строит AI-стартап без инвесторов",
    metric: "100M+ Аудитория",
    photo: "/members/vadim.jpg",
  },
  {
    name: "Фёдор Пасеков",
    role: "Трафик и контент",
    desc: "Контент-завод на нейросетях. 228K подписчиков за год без бюджета",
    metric: "228K Подписчиков",
    photo: "/members/fedor.jpg",
  },
  {
    name: "Илья Павлов",
    role: "CPO, Healthtech",
    desc: "16 лет в IT. Плагины с 1M+ установок. Создаёт сервисы и игры с AI",
    metric: "$10M Раунд",
    photo: "/members/ilya.jpg",
  },
  {
    name: "Max Shirko",
    role: "Дизайнер, 20 лет",
    desc: "20 лет в дизайне. Использует AI как замену целой команде",
    metric: "AI = команда",
    photo: "/members/max.jpg",
  },
  {
    name: "Андрей Хветкевич",
    role: "Владелец NIC.UA",
    desc: "Владелец крупнейшего регистратора доменов. AI-продукты на стыке Web3 и SaaS",
    metric: "SaaS + AI",
    photo: "/members/andrey.jpg",
  },
]

export function MembersSectionCircles() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="bg-neutral-950 py-8 px-8 md:px-16">
      <div className="max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-10"
        >
          <p className="text-rose-400 text-sm font-medium uppercase tracking-wider mb-3">
            Участники
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Кто уже внутри
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Предприниматели, продакты и креаторы, которые уже зарабатывают с AI.
            Не теоретики — практики с результатами.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {members.map((m, i) => {
            const isActive = active === i
            const hasActive = active !== null
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center cursor-pointer select-none w-[130px] md:w-[140px]"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onTouchStart={() => setActive(isActive ? null : i)}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    filter: hasActive && !isActive ? "blur(1px)" : "blur(0px)",
                    opacity: hasActive && !isActive ? 0.6 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`w-28 h-28 rounded-full overflow-hidden mb-3 ${
                    isActive
                      ? "ring-2 ring-rose-500 shadow-lg shadow-rose-500/20"
                      : "ring-2 ring-rose-500/20"
                  }`}
                >
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <p className="text-white text-sm font-bold text-center leading-tight">
                  {m.name}
                </p>
                <p className="text-neutral-300 text-xs text-center">{m.role}</p>
                <span className="inline-block text-xs font-medium text-rose-400 bg-rose-500/15 border border-rose-500/30 rounded-full px-3 py-1 mt-2 whitespace-nowrap">
                  {m.metric}
                </span>

                <p className="text-neutral-300 text-xs leading-relaxed mt-2 md:hidden text-center">
                  {m.desc}
                </p>

                <div className="hidden md:block">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden text-center"
                      >
                        <p className="text-neutral-300 text-xs leading-relaxed">
                          {m.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
          </span>
          <span className="text-neutral-500 text-sm">
            50+ участников в клубе{" "}
            <span className="text-neutral-400">Низшая Лига</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

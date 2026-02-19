'use client'

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    q: "Муж/партнёр увидит списание?",
    a: "Нет. В выписке отображается нейтральное название. Никто не узнает, за что вы заплатили. Полная конфиденциальность.",
  },
  {
    q: "А если мне не подойдёт?",
    a: "Гарантия возврата 14 дней. Без вопросов. Если курс не подошёл — вернём 100% оплаты.",
  },
  {
    q: "У меня сильный рвотный рефлекс. Это решаемо?",
    a: "Да! День 3 полностью посвящён этому. Техника дыхания + постепенная адаптация. 95% учениц убирают рефлекс за первую неделю.",
  },
  {
    q: "Мне стыдно покупать курс по минету",
    a: "Это самый частый страх. И именно поэтому первый день курса — про снятие стыда. Вы не «развратная». Вы — женщина, которая развивается. Это как курс кулинарии, только для другой сферы жизни.",
  },
  {
    q: "Будет ли обратная связь?",
    a: "Интенсив — в формате записи. Вы смотрите в своём темпе, хоть в 3 часа ночи. Для обратной связи есть расширенная программа Deep Soul.",
  },
  {
    q: "Я одинока. Мне это подходит?",
    a: "Абсолютно. Многие ученицы проходят курс до встречи с партнёром. Уверенность в себе — это магнит. Когда вы знаете, что умеете — это меняет всё.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border border-neutral-800 rounded-xl overflow-hidden cursor-pointer hover:border-neutral-700 transition-colors"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5">
        <h3 className="text-white font-medium pr-4">{q}</h3>
        <ChevronDown
          className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </div>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-neutral-400">{a}</p>
        </div>
      )}
    </div>
  )
}

export function FaqSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Частые вопросы
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <FaqItem q={faq.q} a={faq.a} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

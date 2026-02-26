'use client'

import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const faqs = [
  {
    q: "«Я уже платил за курсы по AI — и ничего не получил. Чем это отличается?»",
    a: "Главное отличие — формат. Курс говорит тебе что делать. Мы показываем экран и делаем при тебе. Ты видишь каждый клик, каждую ошибку, каждое исправление. Ты не «изучаешь» — ты повторяешь следом.\n\nПлюс, это не курс с модулями, которые можно забросить на неделе 2. Это подписка с живыми стримами 2 раза в месяц — внешний ритм, который держит тебя в движении.\n\nИ гарантия: если после первого стрима не получишь ни одного рабочего инструмента, вернём деньги без вопросов. Попробуй найти курс, который предлагает то же самое.",
  },
  {
    q: "«$79 в месяц — это дорого. Оно окупится?»",
    a: "Математика. Один воркфлоу из клуба экономит в среднем 3 часа рутины в день. Если твой час стоит $15 — это $45 в день, $1 350 в месяц сэкономленного времени. $79 окупается за 2 дня.\n\nКроме того, бонусы при входе (2 Joker Speaker + воркфлоу контент-завода) стоят $1 300 по рыночным ценам. Ты получаешь их сразу.\n\nХочешь минимизировать риск — бери месяц за $79. Не зашло — просто не продлеваешь.",
  },
  {
    q: "«Мне не хватает времени. Я и так завален работой.»",
    a: "Именно поэтому тебе и нужна автоматизация. Парадокс: ты не можешь найти время на внедрение AI, потому что занят ручной работой, которую мог бы делать AI.\n\nВыход из этого круга — один стрим (1.5 часа) + 30–60 минут на адаптацию готового воркфлоу. Итого 2.5 часа раз в 2 недели. Эти же инструменты потом возвращают тебе 20–30 часов в месяц. Это инвестиция с окупаемостью 10:1.",
  },
  {
    q: "«Я не программист. Это вообще для меня?»",
    a: "Специально для тебя. 90% всего, что мы разбираем — без единой строчки кода. Вайб-кодинг, AI-агенты в браузере, контент-заводы, видео и дизайн — всё это работает через интерфейсы, а не через терминал.\n\nЕсли на стриме появится что-то технически сложное — Влад покажет упрощённую версию. Мы не отбираем людей по уровню. Мы адаптируемся под тех, кто внутри.",
  },
  {
    q: "«Это вряд ли подойдёт для моей ниши»",
    a: "Клуб покрывает широкий спектр: контент (блогеры, SMM), маркетинг (воронки, лиды), автоматизация (агенты, скрипты), продакшн (видео, дизайн), продажи (Clowbot).\n\nЕсли у тебя специфическая ниша — именно для этого существует Q&A в 3-месячном тарифе. Приходишь со своей задачей, разбираем под твой контекст. В закрытой группе 50+ практиков из разных сфер — кто-то точно уже решал похожую задачу и ответит в течение часа.",
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item border-b border-neutral-800 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-sp-sm text-left cursor-pointer"
      >
        <span className="text-sm font-semibold text-white">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-neutral-500 shrink-0 mt-0.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100 pb-sp-sm" : "max-h-0 opacity-0"
        }`}
      >
        {a.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-sm text-neutral-400 mb-sp-xs last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export function FaqSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".faq-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".faq-item", {
      opacity: 0, y: 16, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: ".faq-list", start: "top 80%", once: true },
    })
    gsap.from(".faq-cta", {
      opacity: 0, y: 16, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: ".faq-cta", start: "top 90%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-neutral-950 py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="faq-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              FAQ
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white">
              Часто задают. Отвечаем честно.
            </h2>
          </div>
        </div>

        {/* Questions */}
        <div className="faq-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-sm">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="faq-cta grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center">
            <a
              href="https://t.me/ligayasko_bot?start=tariffs"
              className="inline-flex items-center justify-center gap-2 text-rose-400 hover:text-rose-300 transition-colors text-sm font-medium"
            >
              Вступить в клуб →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

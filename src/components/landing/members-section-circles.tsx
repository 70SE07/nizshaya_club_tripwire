'use client'

import { useState, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const members = [
  {
    name: "DEN",
    role: "Предприниматель, Испания",
    desc: "Внедрил AI в работу — закрыл ипотеку за год. Создаёт продукты голосом, обучил 400 человек. AI убрал всю операционку и дал время на то, что действительно важно.",
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
    desc: "Контент-завод на нейросетях — 228 000 подписчиков за год. Без рекламного бюджета. Только системная работа с AI-инструментами, которые показывают на стримах.",
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
    role: "Дизайнер, 20 лет опыта",
    desc: "Использует AI как замену целой команде. То, на что раньше уходило 3 дня — теперь 3 часа. Впервые за 20 лет чувствует, что не продаёт время, а продаёт результат.",
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

const testimonials = [
  {
    text: "«Знаешь, что самое ценное? Не промпты, не агенты — хотя они огонь. Самое ценное — это когда пишешь в чат: \"Ребят, у меня агент глючит, кто сталкивался?\" — и через 20 минут тебе три человека скидывают решение. Бесплатно. Вот это я понимаю — комьюнити.»",
    author: "Участник клуба · Фрилансер, маркетинг",
  },
  {
    text: "«Раньше я считал каждый доллар. Сейчас смотрю на счёт и думаю: \"Окей, как мне с этих пяти тысяч сделать десять?\" Это другое мышление. Оно появилось не потому что я работал над майндсетом — а потому что появились рабочие инструменты, которые дали результат.»",
    author: "Участник клуба · Предприниматель",
  },
  {
    text: "«Я вчера в 3 часа дня пошёл гулять в парк. Просто так. Не потому что выходной — потому что задачи на день были закрыты к обеду. Я шёл и думал: вот это и есть та свобода, о которой мечтал. Не Бали — просто возможность пойти гулять в среду и не чувствовать, что упускаю что-то важное.»",
    author: "Участник клуба · Контент-мейкер · 4-й месяц в клубе",
  },
]

export function MembersSectionCircles() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState<number | null>(null)

  useGSAP(() => {
    gsap.from(".members-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".member-item", {
      opacity: 0, scale: 0.85, duration: 0.5, stagger: 0.07, ease: "back.out(1.4)",
      scrollTrigger: { trigger: ".members-grid", start: "top 80%", once: true },
    })
    gsap.from(".testimonial-card", {
      opacity: 0, y: 24, duration: 0.5, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ".testimonials-grid", start: "top 80%", once: true },
    })
    gsap.from(".members-counter", {
      opacity: 0, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: ".members-counter", start: "top 90%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-neutral-950 py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="members-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Участники
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white mb-sp-sm">
              Кто уже внутри — и что говорит
            </h2>
            <p className="text-lg leading-[1.65] text-body max-w-2xl">
              Не теоретики. Люди, которые работают с AI и получают результат.
            </p>
          </div>
        </div>

        {/* Members grid */}
        <div className="members-grid flex flex-wrap justify-start gap-sp-md mb-sp-md">
          {members.map((m, i) => {
            const isActive = active === i
            const hasActive = active !== null

            return (
              <div
                key={m.name}
                className="member-item flex flex-col items-center cursor-pointer select-none w-[140px]"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onTouchStart={() => setActive(isActive ? null : i)}
              >
                {/* Avatar */}
                <div
                  className={`rounded-full overflow-hidden transition-all duration-200 size-28 mb-sp-sm ${
                    isActive
                      ? "ring-2 ring-rose-500 shadow-lg shadow-rose-500/20 scale-110"
                      : "ring-2 ring-rose-500/20 scale-100"
                  } ${
                    hasActive && !isActive ? "blur-[1px] opacity-60" : "blur-0 opacity-100"
                  }`}
                >
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name + role */}
                <p className="text-white font-bold text-center text-sm leading-tight">
                  {m.name}
                </p>
                <p className="text-body text-center text-xs mb-sp-xs">
                  {m.role}
                </p>

                {/* Metric badge */}
                <span className="inline-block font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-full whitespace-nowrap text-xs py-0.5 px-2.5">
                  {m.metric}
                </span>

                {/* Desc — mobile always visible */}
                <p className="text-body text-center text-sm md:hidden mt-sp-xs">
                  {m.desc}
                </p>

                {/* Desc — desktop on hover */}
                <div
                  className={`hidden md:block overflow-hidden text-center transition-all duration-200 ${
                    isActive ? "mt-sp-xs opacity-100" : "mt-0 opacity-0"
                  }`}
                  style={{ maxHeight: isActive ? 120 : 0 }}
                >
                  <p className="text-body text-xs leading-normal">
                    {m.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="testimonials-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-sm ${
                i === 2 ? "col-span-1 sm:col-span-2 lg:col-span-4" : "sm:col-span-2"
              }`}
            >
              <p className="text-sm leading-[1.65] text-body-em italic mb-sp-sm">
                {t.text}
              </p>
              <p className="text-xs text-muted">
                — {t.author}
              </p>
            </div>
          ))}
        </div>

        {/* Counter */}
        <div className="members-counter flex items-center justify-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
          </span>
          <span className="text-muted text-sm">
            50+ участников в клубе{" "}
            <span className="text-body">Низшая Лига</span>
          </span>
        </div>

      </div>
    </section>
  )
}

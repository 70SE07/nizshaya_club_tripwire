'use client'

import { useRef } from "react"
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

export function MembersSectionCircles() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".members-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".member-strip", {
      opacity: 0, x: -20, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: ".members-strips", start: "top 80%", once: true },
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
              Кто уже внутри
            </h2>
            <p className="text-lg leading-[1.65] text-body max-w-2xl">
              Не теоретики. Люди, которые работают с AI и получают результат.
            </p>
          </div>
        </div>

        {/* Members — horizontal strips, 2 columns on desktop */}
        <div className="members-strips grid grid-cols-1 lg:grid-cols-2 gap-3 mb-sp-md">
          {members.map((m) => (
            <div
              key={m.name}
              className="member-strip group flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 rounded-xl p-3 hover:border-rose-500/30 transition-colors"
            >
              <div className="shrink-0 size-14 rounded-full overflow-hidden ring-1 ring-rose-500/20 group-hover:ring-rose-500/50 transition-all">
                <Image src={m.photo} alt={m.name} width={56} height={56} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-white font-bold text-sm truncate">{m.name}</p>
                  <span className="shrink-0 font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-full whitespace-nowrap text-[10px] py-0.5 px-2">
                    {m.metric}
                  </span>
                </div>
                <p className="text-muted text-xs mb-1">{m.role}</p>
                <p className="text-body text-xs leading-relaxed line-clamp-2">{m.desc}</p>
              </div>
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
            50+ участников в клубе{" "}<span className="text-body">Низшая Лига</span>
          </span>
        </div>

      </div>
    </section>
  )
}

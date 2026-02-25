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
    gsap.from(".members-counter", {
      opacity: 0, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: ".members-counter", start: "top 90%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-neutral-950 ds-section">
      <div className="ds-container">

        {/* Header */}
        <div className="members-header ds-grid" style={{ marginBottom: "var(--sp-md)" }}>
          <div className="ds-col-3">
            <p className="t-label text-rose-400" style={{ marginBottom: "var(--sp-xs)" }}>
              Участники
            </p>
            <h2 className="t-h2 text-white" style={{ marginBottom: "var(--sp-sm)" }}>
              Кто уже внутри
            </h2>
            <p className="t-body text-neutral-400 max-w-2xl">
              Предприниматели, продакты и креаторы, которые уже зарабатывают с AI.
              Не теоретики — практики с результатами.
            </p>
          </div>
        </div>

        {/* Members grid */}
        <div
          className="members-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "var(--sp-md)",
          }}
        >
          {members.map((m, i) => {
            const isActive = active === i
            const hasActive = active !== null

            return (
              <div
                key={m.name}
                className="member-item flex flex-col items-center cursor-pointer select-none"
                style={{ width: 140 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onTouchStart={() => setActive(isActive ? null : i)}
              >
                {/* Avatar */}
                <div
                  className={`rounded-full overflow-hidden transition-all duration-200 ${
                    isActive
                      ? "ring-2 ring-rose-500 shadow-lg shadow-rose-500/20"
                      : "ring-2 ring-rose-500/20"
                  }`}
                  style={{
                    width: 112,
                    height: 112,
                    marginBottom: "var(--sp-sm)",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    filter: hasActive && !isActive ? "blur(1px)" : "none",
                    opacity: hasActive && !isActive ? 0.6 : 1,
                    transition: "transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease",
                  }}
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
                <p className="text-white font-bold text-center t-small leading-tight">
                  {m.name}
                </p>
                <p className="text-neutral-400 text-center" style={{ fontSize: "0.75rem", marginBottom: "var(--sp-xs)" }}>
                  {m.role}
                </p>

                {/* Metric badge */}
                <span
                  className="inline-block font-medium text-rose-400 bg-rose-500/15 border border-rose-500/30 rounded-full whitespace-nowrap"
                  style={{ fontSize: "0.75rem", padding: "2px 10px" }}
                >
                  {m.metric}
                </span>

                {/* Desc — mobile always visible */}
                <p className="text-neutral-300 text-center t-small md:hidden" style={{ marginTop: "var(--sp-xs)" }}>
                  {m.desc}
                </p>

                {/* Desc — desktop on hover */}
                <div
                  className="hidden md:block overflow-hidden text-center"
                  style={{
                    maxHeight: isActive ? 120 : 0,
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? "var(--sp-xs)" : 0,
                    transition: "max-height 0.2s ease, opacity 0.2s ease, margin-top 0.2s ease",
                  }}
                >
                  <p className="text-neutral-300" style={{ fontSize: "0.75rem", lineHeight: 1.5 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Counter */}
        <div
          className="members-counter flex items-center justify-center gap-2"
          style={{ marginTop: "var(--sp-md)" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
          </span>
          <span className="text-neutral-500 t-small">
            50+ участников в клубе{" "}
            <span className="text-neutral-400">Низшая Лига</span>
          </span>
        </div>

      </div>
    </section>
  )
}

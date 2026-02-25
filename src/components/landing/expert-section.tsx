'use client'

import { useRef } from "react"
import Image from "next/image"
import { Flame, Eye, Hammer } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const cards = [
  { icon: Hammer, title: "Помешан на AI",  sub: "Создаёт и учит" },
  { icon: Eye,    title: "Осеменил AI",    sub: "И построил из них целый отдел" },
  { icon: Flame,  title: "Без фильтров",   sub: "Говорит о провалах открыто" },
]

export function ExpertSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".expert-photo", {
      opacity: 0,
      x: -40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
    })
    gsap.from(".expert-text > *", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
    })
    gsap.from(".expert-card", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ".expert-cards", start: "top 85%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-black ds-section">
      <div className="ds-container">
        <div className="ds-grid" style={{ alignItems: "center", gap: "var(--sp-md)" }}>

          {/* Photo — 1 col */}
          <div className="ds-col-1 expert-photo flex justify-center">
            <div
              className="rounded-2xl overflow-hidden border border-rose-500/20 shrink-0"
              style={{ width: 240, height: 240 }}
            >
              <Image
                src="/vlad-photo.jpg"
                alt="Влад Ясько"
                width={240}
                height={240}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text — 3 cols */}
          <div className="ds-col-3 expert-text">
            <h2 className="t-h2 text-white" style={{ marginBottom: "var(--sp-sm)" }}>
              Влад Ясько — основатель клуба
            </h2>
            <p className="t-body text-neutral-300" style={{ marginBottom: "var(--sp-md)" }}>
              Предприниматель. Запускает AI-агентов в своём бизнесе и показывает что работает. Всё из личного опыта.
            </p>

            <div
              className="expert-cards"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--sp-sm)" }}
            >
              {cards.map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="expert-card bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center"
                >
                  <Icon className="w-6 h-6 text-rose-400 mx-auto" style={{ marginBottom: "var(--sp-xs)" }} />
                  <p className="text-white font-semibold t-small">{title}</p>
                  <p className="text-neutral-500 t-small">{sub}</p>
                </div>
              ))}
            </div>

            <p className="text-neutral-500 t-small italic" style={{ marginTop: "var(--sp-sm)" }}>
              Говорит о том, как запустить агентов, а не о том, зачем они важны.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

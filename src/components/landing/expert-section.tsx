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
    <section ref={ref} className="bg-black py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-sp-md">

          {/* Photo — 1 col */}
          <div className="expert-photo flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-rose-500/20 shrink-0 size-60">
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
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 expert-text">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Эксперт
            </p>
            <h2 className="text-heading font-bold tracking-snug text-white mb-sp-sm">
              Влад Ясько — основатель клуба
            </h2>
            <p className="text-lg leading-[1.65] text-neutral-300 mb-sp-md">
              Предприниматель. Запускает AI-агентов в своём бизнесе и показывает что работает. Всё из личного опыта.
            </p>

            <div className="expert-cards grid grid-cols-3 gap-sp-sm">
              {cards.map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="expert-card bg-neutral-900/50 border border-neutral-800 rounded-2xl p-5 text-center"
                >
                  <Icon className="w-6 h-6 text-rose-400 mx-auto mb-sp-xs" />
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-neutral-500 text-sm">{sub}</p>
                </div>
              ))}
            </div>

            <p className="text-neutral-500 text-sm italic mt-sp-sm">
              Говорит о том, как запустить агентов, а не о том, зачем они важны.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

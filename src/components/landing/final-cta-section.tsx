'use client'

import { useRef } from "react"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function FinalCtaSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".cta-inner > *", {
      opacity: 0,
      y: 28,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-gradient-to-b from-neutral-950 to-black ds-section">
      <div className="ds-container">
        <div className="ds-grid">
          <div className="ds-col-3 cta-inner">

            <h2 className="t-h2 text-white" style={{ marginBottom: "var(--sp-md)" }}>
              Пока ты читаешь статьи в Telegram —{" "}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                кто-то уже зарабатывает с помощью AI
              </span>
            </h2>

            <p className="t-body text-neutral-400 max-w-xl" style={{ marginBottom: "var(--sp-md)" }}>
              Ты можешь закрыть эту страницу и дальше дрочить на обзоры нейронок в Telegram.
              А можешь зайти туда, где на них уже зарабатывают.
            </p>

            <a
              href="https://t.me/ligayasko_bot?start=tariffs"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transform"
              style={{ padding: "var(--sp-sm) var(--sp-md)", fontSize: "1.25rem", marginBottom: "var(--sp-sm)" }}
            >
              Вступить в клуб <ArrowRight className="w-5 h-5" />
            </a>

            <div className="flex items-center gap-2 text-neutral-600 t-small">
              <Clock className="w-4 h-4" />
              <span>Доступ открывается мгновенно после оплаты</span>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div
          className="border-t border-neutral-900 text-neutral-700 t-small"
          style={{ marginTop: "var(--sp-xl)", paddingTop: "var(--sp-md)" }}
        >
          <p style={{ marginBottom: "var(--sp-xs)" }}>© Низшая Лига | Все права защищены</p>
          <div className="flex gap-4">
            <Link href="/oferta" className="hover:text-neutral-400 transition-colors">Публичная оферта</Link>
            <Link href="/policy" className="hover:text-neutral-400 transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useRef } from "react"
import { ShieldCheck } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"

export function GuaranteeSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".guarantee-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".guarantee-content", {
      opacity: 0, y: 24, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: ".guarantee-content", start: "top 80%", once: true },
    })
  }, { scope: ref })

  return (
    <SectionContainer ref={ref} bg="bg-black">

      <SectionHeader
        label="Гарантия"
        title="Никакого риска с твоей стороны."
        className="guarantee-header"
      />

      {/* Content */}
      <div className="guarantee-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 card-accent">
          <div className="flex items-center gap-3 mb-sp-sm">
            <ShieldCheck className="w-7 h-7 text-rose-400 shrink-0" />
            <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white">Гарантия первого стрима</h3>
          </div>
          <p className="text-sm text-body mb-sp-sm">
            Приди на первый стрим. Открой инструмент. Повтори 3 шага, которые покажет Влад.
          </p>
          <p className="text-sm text-body mb-sp-sm">
            Если после этого у тебя не будет ни одного рабочего AI-инструмента, применимого к твоему бизнесу — напиши нам. Мы вернём деньги. Без вопросов. Без «давайте обсудим». Без «а почему не сработало». Просто возврат на карту.
          </p>
          <p className="text-sm text-body">
            Мы уверены в результате. Если ты придёшь и сделаешь — ты получишь результат. Если не получишь — это наш косяк, а не твой. Мы несём ответственность деньгами.
          </p>
        </div>
      </div>

    </SectionContainer>
  )
}

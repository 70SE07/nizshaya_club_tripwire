'use client'

import { ShieldCheck } from "lucide-react"
import { GUARANTEE_REVEAL } from "@/constants/animations"
import { AnimatedSection } from "@/components/landing/animated-section"

export function GuaranteeSection() {
  return (
    <AnimatedSection
      reveal={GUARANTEE_REVEAL}
      bg="bg-black"
      label="Гарантия"
      title="Никакого риска с твоей стороны."
      headerClassName="guarantee-header"
    >
      {/* Content */}
      <div className="guarantee-content grid-section mb-sp-md">
        <div className="col-full card-accent">
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
    </AnimatedSection>
  )
}

'use client'

import { ShieldCheck } from "lucide-react"
import { GUARANTEE_REVEAL } from "@/constants/animations"
import { useLanguage } from "@/i18n/context"
import { getUI } from "@/i18n/ui"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"

export function GuaranteeSection() {
  const { lang } = useLanguage()
  const ui = getUI(lang)

  return (
    <ScrollAnimationWrapper
      reveal={GUARANTEE_REVEAL}
      bg="bg-black"
      label={ui.guarantee.label}
      title={ui.guarantee.title}
      headerClassName="guarantee-header"
    >
      {/* Content */}
      <div className="guarantee-content grid-section mb-sp-md">
        <div className="col-full card-accent">
          <div className="flex items-center gap-3 mb-sp-sm">
            <ShieldCheck className="w-7 h-7 text-rose-400 shrink-0" />
            <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white">{ui.guarantee.cardTitle}</h3>
          </div>
          <p className="text-sm text-body mb-sp-sm">{ui.guarantee.p1}</p>
          <p className="text-sm text-body mb-sp-sm">{ui.guarantee.p2}</p>
          <p className="text-sm text-body">{ui.guarantee.p3}</p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  )
}

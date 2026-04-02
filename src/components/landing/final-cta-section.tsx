'use client'

import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"
import { FINAL_CTA_REVEAL } from "@/constants/animations"
import { LINKS } from "@/constants/links"
import { useLanguage } from "@/i18n/context"
import { getUI } from "@/i18n/ui"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"
import { CtaButton } from "@/components/landing/cta-button"

export function FinalCtaSection() {
  const { lang } = useLanguage()
  const ui = getUI(lang)

  return (
    <ScrollAnimationWrapper reveal={FINAL_CTA_REVEAL} bg="bg-linear-to-b from-neutral-950 to-black">

      {/* Header */}
      <div className="cta-header grid-section mb-sp-md">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white mb-sp-sm">
            {ui.finalCta.h2part1}{" "}
            <span className="bg-linear-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              {ui.finalCta.h2part2}
            </span>
          </h2>
          <p className="text-lg leading-[1.65] text-body mb-sp-xs">{ui.finalCta.body1}</p>
          <p className="text-lg leading-[1.65] text-body">{ui.finalCta.body2}</p>
        </div>
      </div>

      {/* Urgency */}
      <div className="cta-urgency grid-section mb-sp-md">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 card-base">
          <div className="flex items-center gap-3 mb-sp-sm">
            <Users className="w-5 h-5 text-rose-400 shrink-0" />
            <p className="text-base font-semibold text-white">{ui.finalCta.urgencyTitle}</p>
          </div>
          <p className="text-sm text-body mb-sp-xs">{ui.finalCta.urgencyP1}</p>
          <p className="text-sm text-body">{ui.finalCta.urgencyP2}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="cta-buttons grid-section mb-sp-md">
        <div className="col-full flex flex-col sm:flex-row items-center gap-sp-sm">
          <CtaButton variant="primary" className="rounded-2xl shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50">
            {ui.finalCta.ctaPrimary} <ArrowRight className="w-5 h-5" />
          </CtaButton>
          <span className="text-dimmed text-sm">{ui.finalCta.ctaOr}</span>
          <CtaButton variant="secondary">
            {ui.finalCta.ctaSecondary}
          </CtaButton>
        </div>
        <div className="col-full">
          <p className="text-dimmed text-sm text-center sm:text-left">{ui.finalCta.ctaNote}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-900 text-dimmed text-sm pt-sp-md">
        <p className="mb-sp-xs">{ui.finalCta.copyright}</p>
        <div className="flex gap-4">
          <Link href={LINKS.oferta} className="hover:text-body transition-colors">{ui.finalCta.ofertaLink}</Link>
          <Link href={LINKS.policy} className="hover:text-body transition-colors">{ui.finalCta.policyLink}</Link>
        </div>
      </div>

    </ScrollAnimationWrapper>
  )
}

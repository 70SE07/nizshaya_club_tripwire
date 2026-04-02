'use client'

import type { RefObject } from "react"
import { ArrowRight } from "lucide-react"
import { CtaButton } from "@/components/landing/cta-button"
import { useLanguage } from "@/i18n/context"
import { getUI } from "@/i18n/ui"

interface ForWhoFooterProps {
  showCta: boolean
  checkedCount: number
  footerWrapRef: RefObject<HTMLDivElement | null>
  footerRef: RefObject<HTMLDivElement | null>
}

export function ForWhoFooter({ showCta, checkedCount, footerWrapRef, footerRef }: ForWhoFooterProps) {
  const { lang } = useLanguage()
  const ui = getUI(lang)

  return (
    <div className="for-who-footer grid-section">
      <div ref={footerWrapRef} className="col-span-1 sm:col-span-2 lg:col-span-3 overflow-hidden">
        <div ref={footerRef}>
          {showCta ? (
            <div>
              <p className="text-lg leading-[1.65] text-rose-400 font-medium mb-sp-sm">
                {ui.forWhoFooter.ctaText}
              </p>
              <CtaButton variant="primary" className="rounded-2xl mb-sp-xs">
                {ui.forWhoFooter.ctaButton} <ArrowRight className="w-5 h-5" />
              </CtaButton>
              <p className="text-sm text-muted mt-sp-xs">
                {ui.forWhoFooter.ctaNote}
              </p>
            </div>
          ) : (
            <div>
              <p className={`text-lg leading-[1.65] font-medium mb-sp-sm ${checkedCount === 1 ? "text-rose-400" : "text-muted"}`}>
                {checkedCount === 1 ? ui.forWhoFooter.oneChecked : ui.forWhoFooter.noneChecked}
              </p>
              <div className="card-base">
                <p className="text-sm text-muted">
                  <span className="text-body font-medium">{ui.forWhoFooter.notForYou}</span>, {ui.forWhoFooter.notForYouDesc}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

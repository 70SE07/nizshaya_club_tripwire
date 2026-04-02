'use client'

import { OFFER_REVEAL } from "@/constants/animations"
import { useLanguage } from "@/i18n/context"
import { getUI } from "@/i18n/ui"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"
import { TariffCards } from "@/components/landing/offer/tariff-cards"
import { ValueStackTable } from "@/components/landing/offer/value-stack-table"
import { BonusList } from "@/components/landing/offer/bonus-list"

export function OfferSection() {
  const { lang } = useLanguage()
  const ui = getUI(lang)

  return (
    <ScrollAnimationWrapper
      reveal={OFFER_REVEAL}
      id="offer"
      label={ui.offer.label}
      title={ui.offer.title}
      headerClassName="offer-header"
    >
      <TariffCards />
      <ValueStackTable />
      <BonusList />

      {/* Anchor */}
      <div className="text-center">
        <p className="text-sm text-muted">
          {ui.offer.anchor}
        </p>
      </div>
    </ScrollAnimationWrapper>
  )
}

'use client'

import { useScrollReveal } from "@/lib/gsap"
import { OFFER_REVEAL } from "@/constants/animations"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"
import { TariffCards } from "@/components/landing/offer/tariff-cards"
import { ValueStackTable } from "@/components/landing/offer/value-stack-table"
import { BonusList } from "@/components/landing/offer/bonus-list"

export function OfferSection() {
  const ref = useScrollReveal(OFFER_REVEAL)

  return (
    <SectionContainer ref={ref} id="offer">

      <SectionHeader
        label="Оффер"
        title="Что ты получаешь. Всё и сразу."
        className="offer-header"
      />

      <TariffCards />
      <ValueStackTable />
      <BonusList />

      {/* Anchor */}
      <div className="text-center">
        <p className="text-sm text-muted">
          Соотношение ценности к цене: <span className="text-rose-400 font-bold">35:1</span> на месячном тарифе. За $79 ты получаешь то, что стоит $2 800 при отдельной покупке.
        </p>
      </div>

    </SectionContainer>
  )
}

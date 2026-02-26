import { OFFER_REVEAL } from "@/constants/animations"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"
import { TariffCards } from "@/components/landing/offer/tariff-cards"
import { ValueStackTable } from "@/components/landing/offer/value-stack-table"
import { BonusList } from "@/components/landing/offer/bonus-list"

export function OfferSection() {
  return (
    <ScrollAnimationWrapper
      reveal={OFFER_REVEAL}
      id="offer"
      label="Оффер"
      title="Что ты получаешь. Всё и сразу."
      headerClassName="offer-header"
    >
      <TariffCards />
      <ValueStackTable />
      <BonusList />

      {/* Anchor */}
      <div className="text-center">
        <p className="text-sm text-muted">
          Соотношение ценности к цене: <span className="text-rose-400 font-bold">35:1</span> на месячном тарифе. За $79 ты получаешь то, что стоит $2 800 при отдельной покупке.
        </p>
      </div>
    </ScrollAnimationWrapper>
  )
}

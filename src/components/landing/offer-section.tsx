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
      label="Офер"
      title="Що ти отримуєш. Все й одразу."
      headerClassName="offer-header"
    >
      <TariffCards />
      <ValueStackTable />
      <BonusList />

      {/* Anchor */}
      <div className="text-center">
        <p className="text-sm text-muted">
          Співвідношення цінності до ціни: <span className="text-rose-400 font-bold">35:1</span>. Від $50/міс ти отримуєш те, що коштує $2 800 при окремій купівлі.
        </p>
      </div>
    </ScrollAnimationWrapper>
  )
}

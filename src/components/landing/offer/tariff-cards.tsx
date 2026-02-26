import { Check, X } from "lucide-react"
import { monthlyFeatures, tariffs } from "@/constants/pricing"
import { LINKS } from "@/constants/links"
import type { Tariff } from "@/types/content"

function TariffCard({ tariff }: { tariff: Tariff }) {
  const { label, price, priceNote, oldPrice, discountBadge, highlighted, extraFeatures, cta } = tariff

  return (
    <div className={`offer-tariff flex flex-col rounded-2xl p-sp-md ${
      highlighted
        ? "relative bg-linear-to-b from-rose-500/10 to-neutral-900/50 border border-rose-500/30"
        : "bg-neutral-900/50 border border-neutral-800 hover:border-rose-500/30 transition-colors"
    }`}>
      {discountBadge && (
        <div className="absolute bg-rose-500 text-white font-bold rounded-full text-xs top-4 right-4 py-1 px-3">{discountBadge}</div>
      )}

      <div className="mb-sp-md">
        <p className="text-sm text-muted font-medium mb-sp-xs">{label}</p>
        <div className="flex items-end gap-2 mb-sp-xs">
          {oldPrice && <span className="text-white/40 line-through text-xl">{oldPrice}</span>}
          <span className="text-white font-bold text-[2.5rem] leading-none">{price}</span>
          {priceNote && <span className="text-muted text-lg">{priceNote}</span>}
        </div>
        {highlighted && <p className="text-rose-400 text-sm">$50/мес</p>}
      </div>

      <div className="flex-1 space-y-2.5 mb-sp-md">
        {monthlyFeatures.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-body-em text-sm">{item}</span>
          </div>
        ))}

        {extraFeatures.length > 0 && (
          <div className={highlighted ? "border-t border-rose-500/20 pt-2.5 mt-1 space-y-2.5" : "space-y-2.5"}>
            {extraFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5">
                {feat.included
                  ? <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  : <X className="w-4 h-4 text-dimmed shrink-0 mt-0.5" />
                }
                <span className={`text-sm ${feat.included ? "text-body-em" : "text-muted"}`}>{feat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <a
        href={LINKS.telegram}
        className={`block w-full text-center font-bold rounded-xl p-sp-sm ${
          cta.highlighted
            ? "bg-linear-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:scale-[1.02] transform"
            : "bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
        }`}
      >
        {cta.text}
      </a>
    </div>
  )
}

export function TariffCards() {
  return (
    <div className="offer-tariffs grid grid-cols-1 lg:grid-cols-2 gap-5 mb-sp-md">
      {tariffs.map((tariff, i) => (
        <TariffCard key={i} tariff={tariff} />
      ))}
    </div>
  )
}

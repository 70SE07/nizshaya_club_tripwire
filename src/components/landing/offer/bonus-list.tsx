import { Gift } from "lucide-react"
import { bonuses } from "@/constants/pricing"

export function BonusList() {
  return (
    <>
      <div className="mb-sp-sm">
        <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-sm">Бонусы — включены в подписку</p>
      </div>
      <div className="offer-bonuses space-y-3 mb-sp-md">
        {bonuses.map((b, i) => {
          const isPremium = b.premium
          return (
            <div
              key={i}
              className={`offer-bonus rounded-xl px-4 py-3.5 ${
                isPremium ? "card-premium" : "bg-neutral-900/50 border border-neutral-800"
              }`}
            >
              <div className="flex items-start gap-3">
                <Gift className={`w-4 h-4 shrink-0 mt-0.5 ${isPremium ? "text-rose-400" : "text-amber-400"}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <p className="text-sm font-semibold text-white">{b.title}</p>
                    <span className="text-xs text-muted shrink-0">{isPremium ? "$500/час" : b.note.match(/\$[\d,]+/)?.[0]}</span>
                  </div>
                  <p className="text-sm text-body">{b.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

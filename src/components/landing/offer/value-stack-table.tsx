'use client'

import { Gift } from "lucide-react"
import { getPricing } from "@/constants/pricing"
import { useLanguage } from "@/i18n/context"
import { getUI } from "@/i18n/ui"

export function ValueStackTable() {
  const { lang } = useLanguage()
  const pricing = getPricing(lang)
  const ui = getUI(lang)

  return (
    <div className="offer-value-grid hidden sm:block card-base mb-sp-md">
      <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-sm">{ui.valueStack.heading}</p>

      {pricing.valueStack.map((row, i) => (
        <div
          key={i}
          className={`offer-value-item flex items-start justify-between gap-4 py-2.5 ${
            i < pricing.valueStack.length - 1 ? "border-b border-neutral-800/60" : ""
          }`}
        >
          <span className="text-sm text-body-em flex items-center gap-2">
            {row.bonus && <Gift className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
            {row.item}
          </span>
          <span className="text-sm text-muted shrink-0 tabular-nums">{row.price}</span>
        </div>
      ))}

      <div className="flex items-center justify-between border-t border-neutral-700 pt-sp-xs mt-sp-xs">
        <span className="text-sm font-bold text-white">{ui.valueStack.totalLabel}</span>
        <span className="text-sm font-bold text-rose-400">від $2 800</span>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-sm font-bold text-white">{ui.valueStack.youPay}</span>
        <span className="text-sm font-bold text-emerald-400">від $50/міс</span>
      </div>
    </div>
  )
}

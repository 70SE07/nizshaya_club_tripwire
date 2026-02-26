import { Gift } from "lucide-react"
import { valueStack } from "@/constants/pricing"

export function ValueStackTable() {
  return (
    <div className="offer-value-grid hidden sm:block card-base mb-sp-md">
      <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-sm">Сколько это стоит по отдельности</p>

      {valueStack.map((row, i) => (
        <div
          key={i}
          className={`offer-value-item flex items-start justify-between gap-4 py-2.5 ${
            i < valueStack.length - 1 ? "border-b border-neutral-800/60" : ""
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
        <span className="text-sm font-bold text-white">Итого ценность</span>
        <span className="text-sm font-bold text-rose-400">от $2 800</span>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-sm font-bold text-white">Ты платишь</span>
        <span className="text-sm font-bold text-emerald-400">от $50/мес</span>
      </div>
    </div>
  )
}

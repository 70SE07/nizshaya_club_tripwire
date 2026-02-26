import { Check, X } from "lucide-react"
import { monthlyFeatures } from "@/constants/pricing"
import { LINKS } from "@/constants/links"

export function TariffCards() {
  return (
    <div className="offer-tariffs grid grid-cols-1 lg:grid-cols-2 gap-5 mb-sp-md">
      {/* Monthly */}
      <div className="offer-tariff bg-neutral-900/50 border border-neutral-800 rounded-2xl p-sp-md hover:border-rose-500/30 transition-colors flex flex-col">
        <div className="mb-sp-md">
          <p className="text-sm text-muted font-medium mb-sp-xs">Подписка · 1 месяц</p>
          <div className="flex items-end gap-2 mb-sp-xs">
            <span className="text-white font-bold text-[2.5rem] leading-none">$79</span>
            <span className="text-muted text-lg">/мес</span>
          </div>
        </div>
        <div className="flex-1 space-y-2.5 mb-sp-md">
          {monthlyFeatures.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-body-em text-sm">{item}</span>
            </div>
          ))}
          <div className="flex items-start gap-2.5">
            <X className="w-4 h-4 text-dimmed shrink-0 mt-0.5" />
            <span className="text-muted text-sm">Q&A-сессии не входят</span>
          </div>
        </div>
        <a href={LINKS.telegram} className="block w-full text-center bg-neutral-800 text-white font-bold rounded-xl hover:bg-neutral-700 transition-colors p-sp-sm">
          Вступить за $79
        </a>
      </div>

      {/* Quarterly */}
      <div className="offer-tariff relative bg-linear-to-b from-rose-500/10 to-neutral-900/50 border border-rose-500/30 rounded-2xl p-sp-md flex flex-col">
        <div className="absolute bg-rose-500 text-white font-bold rounded-full text-xs top-4 right-4 py-1 px-3">-37%</div>
        <div className="mb-sp-md">
          <p className="text-sm text-muted font-medium mb-sp-xs">Подписка · 3 месяца</p>
          <div className="flex items-end gap-2 mb-sp-xs">
            <span className="text-white/40 line-through text-xl">$237</span>
            <span className="text-white font-bold text-[2.5rem] leading-none">$150</span>
          </div>
          <p className="text-rose-400 text-sm">$50/мес</p>
        </div>
        <div className="flex-1 space-y-2.5 mb-sp-md">
          {monthlyFeatures.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-body-em text-sm">{item}</span>
            </div>
          ))}
          <div className="border-t border-rose-500/20 pt-2.5 mt-1">
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span className="text-body-em text-sm">Q&A: личный разбор кейса с Владом</span>
            </div>
            <div className="flex items-start gap-2.5 mt-2.5">
              <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span className="text-body-em text-sm">Приоритетный доступ к материалам</span>
            </div>
          </div>
        </div>
        <a href={LINKS.telegram} className="block w-full text-center bg-linear-to-r from-rose-500 to-pink-600 text-white font-bold rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:scale-[1.02] transform p-sp-sm">
          Взять 3 месяца за $150
        </a>
      </div>
    </div>
  )
}

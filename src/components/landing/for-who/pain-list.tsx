import { Check } from "lucide-react"
import { pains } from "@/constants/content"

interface PainListProps {
  checked: Set<number>
  toggle: (i: number) => void
}

export function PainList({ checked, toggle }: PainListProps) {
  return (
    <div className="pain-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
      <div className="col-span-1 sm:col-span-2 lg:col-span-4">
        {pains.map((pain, i) => {
          const isChecked = checked.has(i)
          return (
            <div
              key={i}
              className={`pain-item pain-item-${i} flex items-start gap-4 border-b border-neutral-800/50 last:border-0 cursor-pointer select-none rounded-xl transition-colors duration-200 p-sp-sm ${
                isChecked ? "bg-rose-500/5" : "hover:bg-neutral-800/20"
              }`}
              onClick={() => toggle(i)}
            >
              <span
                className={`shrink-0 rounded border flex items-center justify-center transition-all duration-200 mt-1 size-5 ${
                  isChecked
                    ? "bg-rose-500 border-rose-500"
                    : "border-neutral-600 bg-transparent"
                }`}
              >
                {isChecked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
              </span>
              <p className={`text-lg leading-[1.65] transition-colors duration-200 ${isChecked ? "text-white" : "text-body"}`}>
                {pain}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

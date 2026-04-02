import { ShieldCheck } from "lucide-react"
import { GUARANTEE_REVEAL } from "@/constants/animations"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"

export function GuaranteeSection() {
  return (
    <ScrollAnimationWrapper
      reveal={GUARANTEE_REVEAL}
      bg="bg-black"
      label="Гарантія"
      title="Жодного ризику з твого боку."
      headerClassName="guarantee-header"
    >
      {/* Content */}
      <div className="guarantee-content grid-section mb-sp-md">
        <div className="col-full card-accent">
          <div className="flex items-center gap-3 mb-sp-sm">
            <ShieldCheck className="w-7 h-7 text-rose-400 shrink-0" />
            <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white">Гарантія першого стриму</h3>
          </div>
          <p className="text-sm text-body mb-sp-sm">
            Прийди на перший стрим. Відкрий інструмент. Повтори 3 кроки, які покаже Влад.
          </p>
          <p className="text-sm text-body mb-sp-sm">
            Якщо після цього у тебе не буде жодного робочого AI-інструменту, застосовного до твого бізнесу — напиши нам. Ми повернемо гроші. Без запитань. Без «давайте обговоримо». Без «а чому не спрацювало». Просто повернення на картку.
          </p>
          <p className="text-sm text-body">
            Ми впевнені в результаті. Якщо ти прийдеш і зробиш — ти отримаєш результат. Якщо не отримаєш — це наш косяк, а не твій. Ми несемо відповідальність грошима.
          </p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  )
}

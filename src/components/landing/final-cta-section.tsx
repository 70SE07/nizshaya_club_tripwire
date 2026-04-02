import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"
import { FINAL_CTA_REVEAL } from "@/constants/animations"
import { LINKS } from "@/constants/links"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"
import { CtaButton } from "@/components/landing/cta-button"

export function FinalCtaSection() {
  return (
    <ScrollAnimationWrapper reveal={FINAL_CTA_REVEAL} bg="bg-linear-to-b from-neutral-950 to-black">

      {/* Header */}
      <div className="cta-header grid-section mb-sp-md">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white mb-sp-sm">
            Поки ти читаєш —{" "}
            <span className="bg-linear-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              хтось уже заробляє.
            </span>
          </h2>
          <p className="text-lg leading-[1.65] text-body mb-sp-xs">
            Ти вже знаєш, що щось треба змінювати. Інакше ти б не дочитав до цього місця.
          </p>
          <p className="text-lg leading-[1.65] text-body">
            AI тобі потрібен — це зрозуміло. Залишилося перестати дивитися, як це роблять інші, і почати самому.
          </p>
        </div>
      </div>

      {/* Urgency */}
      <div className="cta-urgency grid-section mb-sp-md">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 card-base">
          <div className="flex items-center gap-3 mb-sp-sm">
            <Users className="w-5 h-5 text-rose-400 shrink-0" />
            <p className="text-base font-semibold text-white">Перший набір — до 100 учасників</p>
          </div>
          <p className="text-sm text-body mb-sp-xs">
            Лютневий стримовий цикл уже заплановано. Зайдеш зараз — потрапиш із самого початку і заберeш усі бонуси від Joker Speaker. Запізнишся — почнеш із середини циклу.
          </p>
          <p className="text-sm text-body">
            При обмеженому складі Влад може особисто розбирати кейси кожного. При 500+ учасниках формат зміниться. Увійти зараз = максимальна увага за мінімальною ціною.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="cta-buttons grid-section mb-sp-md">
        <div className="col-full flex flex-col sm:flex-row items-center gap-sp-sm">
          <CtaButton variant="primary" className="rounded-2xl shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50">
            Вступити від $50/міс <ArrowRight className="w-5 h-5" />
          </CtaButton>
          <span className="text-dimmed text-sm">або</span>
          <CtaButton variant="secondary">
            1 місяць за $79
          </CtaButton>
        </div>
        <div className="col-full">
          <p className="text-dimmed text-sm text-center sm:text-left">
            Доступ відкривається миттєво · Скасування в один клік
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-900 text-dimmed text-sm pt-sp-md">
        <p className="mb-sp-xs">© Нижча Ліга | Усі права захищено</p>
        <div className="flex gap-4">
          <Link href={LINKS.oferta} className="hover:text-body transition-colors">Публічна оферта</Link>
          <Link href={LINKS.policy} className="hover:text-body transition-colors">Політика конфіденційності</Link>
        </div>
      </div>

    </ScrollAnimationWrapper>
  )
}

import type { RefObject } from "react"
import { ArrowRight } from "lucide-react"
import { CtaButton } from "@/components/landing/cta-button"

interface ForWhoFooterProps {
  showCta: boolean
  checkedCount: number
  footerWrapRef: RefObject<HTMLDivElement | null>
  footerRef: RefObject<HTMLDivElement | null>
}

export function ForWhoFooter({ showCta, checkedCount, footerWrapRef, footerRef }: ForWhoFooterProps) {
  return (
    <div className="for-who-footer grid-section">
      <div ref={footerWrapRef} className="col-span-1 sm:col-span-2 lg:col-span-3 overflow-hidden">
        <div ref={footerRef}>
          {showCta ? (
            <div>
              <p className="text-lg leading-[1.65] text-rose-400 font-medium mb-sp-sm">
                Ты попал по адресу. Именно для этого и существует клуб.
              </p>
              <CtaButton variant="primary" className="rounded-2xl mb-sp-xs">
                Вступить в клуб от $50 / мес <ArrowRight className="w-5 h-5" />
              </CtaButton>
              <p className="text-sm text-muted mt-sp-xs">
                Доступ открывается мгновенно · Гарантия возврата после первого стрима
              </p>
            </div>
          ) : (
            <div>
              <p className={`text-lg leading-[1.65] font-medium mb-sp-sm ${checkedCount === 1 ? "text-rose-400" : "text-muted"}`}>
                {checkedCount === 1
                  ? "Один пункт — уже сигнал. Ещё один — и ты точно наш."
                  : "Если хотя бы два пункта — это про тебя, ты попал по адресу."}
              </p>
              <div className="card-base">
                <p className="text-sm text-muted">
                  <span className="text-body font-medium">Клуб не для тебя</span>, если хочешь изучить AI «для общего развития» без конкретного применения — здесь только практика и инструменты под реальные задачи.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQ_REVEAL } from "@/constants/animations"
import { getContent } from "@/constants/content"
import { useLanguage } from "@/i18n/context"
import { getUI } from "@/i18n/ui"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"
import { CtaButton } from "@/components/landing/cta-button"

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item border-b border-neutral-800 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-sp-sm text-left cursor-pointer"
      >
        <span className="text-sm font-semibold text-white">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted shrink-0 mt-0.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100 pb-sp-sm" : "max-h-0 opacity-0"
        }`}
      >
        {a.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-sm text-body mb-sp-xs last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export function FaqSection() {
  const { lang } = useLanguage()
  const content = getContent(lang)
  const ui = getUI(lang)

  return (
    <ScrollAnimationWrapper
      reveal={FAQ_REVEAL}
      label="FAQ"
      title={ui.faq.title}
      headerClassName="faq-header"
    >
      {/* Questions */}
      <div className="faq-list grid-section mb-sp-md">
        <div className="col-full card-base">
          {content.faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="faq-cta grid-section">
        <div className="col-full text-center">
          <CtaButton variant="ghost">
            {ui.faq.cta}
          </CtaButton>
        </div>
      </div>
    </ScrollAnimationWrapper>
  )
}

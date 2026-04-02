'use client'

import { HOW_IT_WORKS_REVEAL } from "@/constants/animations"
import { getContent } from "@/constants/content"
import { useLanguage } from "@/i18n/context"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"

const ui = {
  ru: { label: "Как это работает", title: "Как это устроено" },
  uk: { label: "Як це працює", title: "Як це влаштовано" },
}

export function HowItWorksSection() {
  const { lang } = useLanguage()
  const content = getContent(lang)
  const t = ui[lang]

  return (
    <ScrollAnimationWrapper
      reveal={HOW_IT_WORKS_REVEAL}
      bg="bg-black"
      label={t.label}
      title={t.title}
      headerClassName="hiw-header"
    >
      {/* Steps */}
      <div className="hiw-steps grid-section mb-sp-md">
        {content.howItWorksSteps.map((step, i) => (
          <div
            key={i}
            className="hiw-step card-base"
          >
            <span className="inline-flex items-center justify-center size-8 rounded-full badge-accent font-bold text-sm mb-sp-sm">
              {i + 1}
            </span>
            <h3 className="text-lg md:text-xl lg:text-2xl leading-snug font-semibold text-white mb-sp-xs">
              {step.title}
            </h3>
            <p className="text-sm text-body">{step.desc}</p>
          </div>
        ))}
      </div>
    </ScrollAnimationWrapper>
  )
}

'use client'

import { HOW_IT_WORKS_REVEAL } from "@/constants/animations"
import { howItWorksSteps } from "@/constants/content"
import { AnimatedSection } from "@/components/landing/animated-section"

export function HowItWorksSection() {
  return (
    <AnimatedSection
      reveal={HOW_IT_WORKS_REVEAL}
      bg="bg-black"
      label="Как это работает"
      title="Как это устроено"
      headerClassName="hiw-header"
    >
      {/* Steps */}
      <div className="hiw-steps grid-section mb-sp-md">
        {howItWorksSteps.map((step, i) => (
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
    </AnimatedSection>
  )
}

'use client'

import { useScrollReveal } from "@/lib/gsap"
import { HOW_IT_WORKS_REVEAL } from "@/constants/animations"
import { howItWorksSteps } from "@/constants/content"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"

export function HowItWorksSection() {
  const ref = useScrollReveal(HOW_IT_WORKS_REVEAL)

  return (
    <SectionContainer ref={ref} bg="bg-black">

      {/* Header */}
      <SectionHeader
        label="Как это работает"
        title="Как это устроено"
        className="hiw-header"
      />

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


    </SectionContainer>
  )
}

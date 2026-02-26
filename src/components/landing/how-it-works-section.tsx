'use client'

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"
import { howItWorksSteps } from "@/constants/content"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"

export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".hiw-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".hiw-step", {
      opacity: 0, y: 24, duration: 0.5, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ".hiw-steps", start: "top 80%", once: true },
    })
  }, { scope: ref })

  return (
    <SectionContainer ref={ref} bg="bg-black">

      {/* Header */}
      <SectionHeader
        label="Как это работает"
        title="Как это устроено"
        className="hiw-header"
      />

      {/* Steps */}
      <div className="hiw-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
        {howItWorksSteps.map((step, i) => (
          <div
            key={i}
            className="hiw-step card-base"
          >
            <span className="inline-flex items-center justify-center size-8 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold text-sm mb-sp-sm">
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

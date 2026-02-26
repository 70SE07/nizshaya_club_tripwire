'use client'

import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { faqs } from "@/constants/content"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"
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
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".faq-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".faq-item", {
      opacity: 0, y: 16, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: ".faq-list", start: "top 80%", once: true },
    })
    gsap.from(".faq-cta", {
      opacity: 0, y: 16, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: ".faq-cta", start: "top 90%", once: true },
    })
  }, { scope: ref })

  return (
    <SectionContainer ref={ref}>

      <SectionHeader
        label="FAQ"
        title="Часто задают. Отвечаем честно."
        className="faq-header"
      />

      {/* Questions */}
      <div className="faq-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 card-base">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="faq-cta grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center">
          <CtaButton variant="ghost">
            Вступить в клуб →
          </CtaButton>
        </div>
      </div>

    </SectionContainer>
  )
}

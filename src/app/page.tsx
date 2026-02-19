import { HeroSection } from "@/components/landing/hero-section"
import { PainSection } from "@/components/landing/pain-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { ProgramSection } from "@/components/landing/program-section"
import { ExpertSection } from "@/components/landing/expert-section"
import { OfferSection } from "@/components/landing/offer-section"
import { FaqSection } from "@/components/landing/faq-section"
import { FinalCtaSection } from "@/components/landing/final-cta-section"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <ProgramSection />
      <ExpertSection />
      <OfferSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  )
}

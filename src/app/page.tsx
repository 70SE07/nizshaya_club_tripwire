import { HeroSection } from "@/components/landing/hero-section"
import { ForWhoSection } from "@/components/landing/for-who-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { ExpertSection } from "@/components/landing/expert-section"
import { ProgramSection } from "@/components/landing/program-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { ResultsSection } from "@/components/landing/results-section"
import { MembersSectionCircles } from "@/components/landing/members-section-circles"
import { OfferSection } from "@/components/landing/offer-section"
import { GuaranteeSection } from "@/components/landing/guarantee-section"
import { FaqSection } from "@/components/landing/faq-section"
import { FinalCtaSection } from "@/components/landing/final-cta-section"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <ForWhoSection />
      <SolutionSection />
      <ExpertSection />
      <ProgramSection />
      <HowItWorksSection />
      <ResultsSection />
      <MembersSectionCircles />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  )
}

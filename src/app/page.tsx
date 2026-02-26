import dynamic from "next/dynamic"
import { HeroSection } from "@/components/landing/hero-section"

const ForWhoSection = dynamic(() => import("@/components/landing/for-who-section").then(m => ({ default: m.ForWhoSection })))
const SolutionSection = dynamic(() => import("@/components/landing/solution-section").then(m => ({ default: m.SolutionSection })))
const ExpertSection = dynamic(() => import("@/components/landing/expert-section").then(m => ({ default: m.ExpertSection })))
const ProgramSection = dynamic(() => import("@/components/landing/program-section").then(m => ({ default: m.ProgramSection })))
const HowItWorksSection = dynamic(() => import("@/components/landing/how-it-works-section").then(m => ({ default: m.HowItWorksSection })))
const ResultsSection = dynamic(() => import("@/components/landing/results-section").then(m => ({ default: m.ResultsSection })))
const MembersSectionCircles = dynamic(() => import("@/components/landing/members-section-circles").then(m => ({ default: m.MembersSectionCircles })))
const OfferSection = dynamic(() => import("@/components/landing/offer-section").then(m => ({ default: m.OfferSection })))
const GuaranteeSection = dynamic(() => import("@/components/landing/guarantee-section").then(m => ({ default: m.GuaranteeSection })))
const FaqSection = dynamic(() => import("@/components/landing/faq-section").then(m => ({ default: m.FaqSection })))
const FinalCtaSection = dynamic(() => import("@/components/landing/final-cta-section").then(m => ({ default: m.FinalCtaSection })))

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

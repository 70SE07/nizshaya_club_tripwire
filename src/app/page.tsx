import { HeroSection } from "@/components/landing/hero-section"
import { ForWhoSection } from "@/components/landing/for-who-section"
import { TopicsSection } from "@/components/landing/topics-section"
import { OfferSection } from "@/components/landing/offer-section"
import { FinalCtaSection } from "@/components/landing/final-cta-section"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <ForWhoSection />
      <TopicsSection />
      <OfferSection />
      <FinalCtaSection />
    </main>
  )
}

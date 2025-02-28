import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Tokenomics from "@/components/tokenomics"
import Roadmap from "@/components/roadmap"
import Community from "@/components/community"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  )
}


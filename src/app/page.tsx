import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import FeatureGrid from "@/components/FeatureGrid";
import PhoneDemo from "@/components/PhoneDemo";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

/* Gradient divider line */
function GradientDivider() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.3) 30%, rgba(236,72,153,0.3) 70%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <GradientDivider />
      <ProblemSolution />

      <FeatureGrid />
      <PhoneDemo />

      <GradientDivider />
      <SocialProof />
      <Pricing />

      <GradientDivider />
      <FAQ />
      <FinalCTA />

      <Footer />
    </>
  );
}

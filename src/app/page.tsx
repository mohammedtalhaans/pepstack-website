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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <ProblemSolution />
      <FeatureGrid />
      <PhoneDemo />

      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />

      <Footer />
    </>
  );
}

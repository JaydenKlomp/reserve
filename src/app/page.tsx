import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import EarlyAdopter from "@/components/EarlyAdopter";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Concept />
      <HowItWorks variant="compact" />
      <Impact />
      <EarlyAdopter />
      <ContactSection />
    </>
  );
}

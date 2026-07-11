import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import HowItWorks from "@/components/HowItWorks";
import Materials from "@/components/Materials";
import Impact from "@/components/Impact";
import EarlyAdopter from "@/components/EarlyAdopter";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <HowItWorks />
        <Materials />
        <Impact />
        <EarlyAdopter />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

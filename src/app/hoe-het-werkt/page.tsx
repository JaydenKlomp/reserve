import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HowItWorks from "@/components/HowItWorks";
import Materials from "@/components/Materials";
import CtaBanner from "@/components/CtaBanner";
import { howItWorksPage } from "@/content/site";

export const metadata: Metadata = {
  title: howItWorksPage.title,
  description: howItWorksPage.description,
};

export default function HoeHetWerktPage() {
  return (
    <>
      <PageHeader kicker={howItWorksPage.kicker} heading={howItWorksPage.heading} intro={howItWorksPage.intro} />
      <HowItWorks variant="detailed" />
      <Materials />
      <CtaBanner {...howItWorksPage.cta} />
    </>
  );
}

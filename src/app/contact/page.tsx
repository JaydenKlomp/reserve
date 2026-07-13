import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.sub,
};

const validTypes = ["club", "merk", "verwerker"] as const;
type Audience = (typeof validTypes)[number];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const initial: Audience = validTypes.includes(type as Audience) ? (type as Audience) : "club";

  return (
    <>
      <PageHeader kicker="Contact" heading="Doe mee met ReServe" intro={contact.sub} />
      <ContactSection initialAudience={initial} showHeader={false} />
    </>
  );
}

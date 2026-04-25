import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AboutPreview } from "@/components/AboutPreview";
import { EventsPreview } from "@/components/EventsPreview";
import { ContactCTA } from "@/components/ContactCTA";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <EventsPreview />
      <ContactCTA />
    </>
  );
}

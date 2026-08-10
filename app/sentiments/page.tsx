import type { Metadata } from "next";
import { SentimentsHero } from "@/components/about/SentimentsHero";
import { SentimentsMessage } from "@/components/about/SentimentsMessage";
import { DirectorCard } from "@/components/about/DirectorCard";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Sentiments",
  description:
    "A message from our Marketing Director on our commitment to making occupational health accessible to every South African organisation — large or small, public or private.",
};

export default function Sentiments() {
  return (
    <>
      <SentimentsHero />
      <SentimentsMessage />
      <DirectorCard />
      <CTASection
        heading="Want to Discuss a Wellness Programme for Your Team?"
        subheading="Tell us about your company and we'll design a wellness programme tailored to your workforce — with a response within 24 hours."
      />
    </>
  );
}

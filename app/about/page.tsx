import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { WhyUsGrid } from "@/components/about/WhyUsGrid";
import { ImpactBand } from "@/components/about/ImpactBand";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Corporate Healthy SA is an established corporate wellness partner in South Africa, delivering on-site health screening and wellness programmes by HPCSA-registered practitioners since 2007.",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesGrid />
      <WhyUsGrid />
      <ImpactBand />
      <CTASection
        heading="Ready to Partner With Us?"
        subheading="Tell us about your company and we'll show you how an integrated wellness programme can work for your team."
      />
    </>
  );
}

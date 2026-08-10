import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { WhyWorkWithUs } from "@/components/careers/WhyWorkWithUs";
import { Openings } from "@/components/careers/Openings";
import { CareersCta } from "@/components/careers/CareersCta";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Corporate Healthy SA's network of HPCSA-registered practitioners delivering on-site corporate wellness, occupational health, and screening services across South Africa.",
};

export default function Careers() {
  return (
    <>
      <CareersHero />
      <WhyWorkWithUs />
      <Openings />
      <CareersCta />
    </>
  );
}

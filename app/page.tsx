import Script from "next/script";
import { siteConfig } from "@/lib/constants";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
// NOTE: The Testimonials section (components/sections/Testimonials.tsx + data/testimonials.ts)
// is intentionally retained for potential future reuse, but is no longer rendered on the
// home page — it was replaced by HowItWorks. Do not delete without checking usages.
import { CTASection } from "@/components/sections/CTASection";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// PLACEHOLDER STRUCTURED DATA: address and social profiles need client confirmation.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Corporate Healthy SA",
  description:
    "Leading corporate health and wellness partner in South Africa since 2007. Customised wellness programmes, health screening, and on-site occupational health services delivered by HPCSA-registered practitioners.",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  telephone: siteConfig.phoneLink,
  email: siteConfig.email,
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "P.O. Box 4724",
    addressLocality: "Midrand",
    addressRegion: "Gauteng",
    postalCode: "1632",
    addressCountry: "ZA",
  },
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <LogoMarquee />
      <TrustBar />
      <ServiceGrid />
      <HowItWorks />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesCta } from "@/components/services/ServicesCta";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our corporate wellness services in South Africa - audiologists, dentists, physiotherapists, dieticians, orthotists, podiatrists, chiropractors, optometrists, phlebotomists, general practitioners, biokineticists, homeopaths, and nurses - delivered on site by registered practitioners.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <FadeInStagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {services.map((service) => (
              <FadeInItem key={service.slug} className="h-full">
                <ServiceCard service={service} size="large" />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <ServicesCta />
    </>
  );
}

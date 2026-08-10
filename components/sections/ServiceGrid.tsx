import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceAccordion } from "@/components/services/ServiceAccordion";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

export function ServiceGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          heading="Comprehensive Workplace Health, All Under One Roof"
          subheading="A comprehensive range of specialist services delivered on-site by HPCSA-registered practitioners — from screening and nursing care to therapy, nutrition, and mental health support."
        />

        <FadeInStagger className="hidden grid-cols-2 gap-5 sm:grid lg:grid-cols-4">
          {services.map((service) => (
            <FadeInItem key={service.slug}>
              <ServiceCard service={service} />
            </FadeInItem>
          ))}
        </FadeInStagger>

        <div className="sm:hidden">
          <ServiceAccordion services={services} />
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="secondary">
            Explore All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}

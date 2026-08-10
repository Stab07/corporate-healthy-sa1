import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CircleCheck } from "lucide-react";
import {
  services,
  getServiceBySlug,
  getRelatedServices,
} from "@/data/services";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);

  return (
    <>
      <ServiceHero service={service} />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-accent" />
              Overview
            </p>
            <p className="mt-6 font-display text-xl leading-relaxed text-text-primary md:text-2xl">
              {service.overview}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            heading="Key Benefits"
            subheading="What this service delivers for your people — and for your business."
          />
          <FadeInStagger className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {service.benefits.map((benefit) => (
              <FadeInItem key={benefit} className="h-full">
                <div className="flex h-full items-start gap-3.5 rounded-xl border border-zinc-100 bg-white p-5 shadow-sm">
                  <CircleCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-success"
                    strokeWidth={2.2}
                  />
                  <p className="text-sm leading-relaxed text-text-primary sm:text-base">
                    {benefit}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What to Expect"
            heading="How It Works"
            subheading="A simple, structured process — from first conversation to follow-up."
          />
          <div className="relative mx-auto grid max-w-5xl gap-10 md:grid-cols-4 md:gap-8">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-6 top-0 w-0.5 bg-primary/10 md:hidden"
            />
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden h-0.5 bg-primary/10 md:block"
            />
            {service.whatToExpect.map((step, index) => (
              <div key={step.title} className="relative flex gap-5 md:block">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-base font-bold text-white shadow-[0_8px_20px_rgba(27,94,140,0.35)]">
                  {index + 1}
                </span>
                <div className="md:mt-6">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary-dark py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Ideal For"
            heading="Built for the Teams That Need It Most"
            subheading="This service is especially valuable for:"
            centered={false}
            light
          />
          <FadeInStagger className="flex flex-wrap gap-3">
            {service.idealFor.map((tag) => (
              <FadeInItem key={tag}>
                <Badge variant="light">{tag}</Badge>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="FAQ"
              heading="Common Questions"
              subheading={`Everything you need to know about ${service.title.toLowerCase()} for your workplace.`}
            />
            <Accordion items={service.faqs} />
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-background py-20 md:py-28">
          <Container>
            <SectionHeading
              eyebrow="Related Services"
              heading="Explore Related Services"
              subheading="Many workplaces combine services to build a fuller wellness programme."
            />
            <FadeInStagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((item) => (
                <FadeInItem key={item.slug} className="h-full">
                  <ServiceCard service={item} />
                </FadeInItem>
              ))}
            </FadeInStagger>
          </Container>
        </section>
      )}

      <CTASection
        heading={`Interested in ${service.title} for your team?`}
        subheading="Request a proposal and our wellness team will be in touch within 24 hours."
      />
    </>
  );
}

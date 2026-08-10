"use client";

import {
  Accessibility,
  Handshake,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Honest advice and transparent reporting in every programme we deliver.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description:
      "Professional care brought to employees, wherever they work — free of charge.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description:
      "We track participation and health outcomes so clients can see the value of wellness.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We work as an extension of your team, not a vendor — from planning to follow-up.",
  },
];

export function ValuesGrid() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Values"
          heading="What Guides Us"
          subheading="Our values shape every interaction, every screening, and every partnership."
        />
        <FadeInStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <FadeInItem key={title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_16px_40px_rgba(15,61,92,0.1)]">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-light text-primary">
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}

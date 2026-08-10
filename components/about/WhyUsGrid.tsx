"use client";

import {
  Building2,
  Headset,
  LayoutGrid,
  MapPin,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
  span: string;
  featured?: boolean;
}

const reasons: Reason[] = [
  {
    icon: Building2,
    title: "3500+ Wellness Events Delivered",
    description:
      "More than 3500 wellness events delivered — for teams from 15 to 200+ employees.",
    span: "lg:col-span-3",
    featured: true,
  },
  {
    icon: LayoutGrid,
    title: "13+ Integrated Specialist Services",
    description:
      "One partner, 13 specialist disciplines. No juggling multiple vendors, contracts, and schedules to coordinate.",
    span: "lg:col-span-3",
  },
  {
    icon: MapPin,
    title: "Nationwide On-Site Delivery",
    description:
      "We travel to your premises anywhere in South Africa — no clinics to book, no lost working hours.",
    span: "lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Aligned Programmes",
    description:
      "Medical surveillance and hearing screening designed to support your OHS Act obligations.",
    span: "lg:col-span-2",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Reporting",
    description:
      "De-identified participation and health-summary reporting that shows the impact of your wellness spend.",
    span: "lg:col-span-2",
  },
  {
    icon: Headset,
    title: "Dedicated Account Management",
    description:
      "A single point of contact who plans, coordinates, and manages every visit — so your team can focus on work.",
    span: "lg:col-span-6",
  },
];

export function WhyUsGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          heading="Why Companies Work With Us"
        />
        <FadeInStagger className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          {reasons.map(({ icon: Icon, title, description, span, featured }) => (
            <FadeInItem key={title} className={`${span} h-full`}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,61,92,0.12)] sm:p-8 ${
                  featured
                    ? "border-transparent bg-primary-dark text-white"
                    : "border-zinc-100 bg-white shadow-sm"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    featured
                      ? "bg-accent text-primary-dark"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3
                  className={`mt-5 font-display text-lg font-semibold sm:text-xl ${
                    featured ? "text-white" : "text-text-primary"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed sm:text-base ${
                    featured ? "text-white/75" : "text-text-muted"
                  }`}
                >
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

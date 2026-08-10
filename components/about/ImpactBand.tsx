"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

// "Employees Reached" is a PLACEHOLDER figure — confirm the real number with the client.
const impactStats = [
  { value: "3500+", label: "Wellness Events" },
  { value: "13+", label: "Integrated Specialist Services" },
  { value: "10,000+", label: "Employees Served" },
  { value: "2007", label: "Established" },
];

export function ImpactBand() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(242,166,90,0.16),transparent_55%)]" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

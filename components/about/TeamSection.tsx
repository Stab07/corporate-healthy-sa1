"use client";

import Image from "next/image";
import { team } from "@/data/team";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function TeamSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          heading="The People Behind the Programme"
          subheading="A leadership team of registered practitioners and operations specialists who keep quality at the heart of every visit."
        />
        <FadeInStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <FadeInItem key={member.name} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,61,92,0.12)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary to-primary-light">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center font-display text-5xl font-bold tracking-tight text-white/90">
                      {initials(member.name)}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {member.role}
                  </p>
                  {member.credentials && (
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-muted">
                      {member.credentials}
                    </p>
                  )}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}

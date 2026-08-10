"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";

export function StorySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn y={24}>
            <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-accent" />
              Our Story
            </p>
            <h2 className="mt-5 font-display fluid-h2 font-bold tracking-tighter text-text-primary">
              Making Workplace Wellness Accessible for Every SA Business
            </h2>
            {/* PLACEHOLDER STORY COPY: confirm the real founding story with the client before launch. */}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
              <p>
                Corporate Healthy SA was founded in 2007 on a simple belief:
                that every South African employee deserves access to professional
                health screening, no matter how large their company is or where
                they work.
              </p>
              <p>
                We saw too many employees going without basic screenings and
                care — not because they didn&apos;t care about their health, but
                because access was limited, time was short, and the cost too
                often fell on the individual. So we built a different model: a
                network of HPCSA-registered practitioners who deliver care
                directly at the workplace, free of charge to employees.
              </p>
              <p>
                Today we have delivered more than 3500 wellness events — for
                teams of 40 to corporates with 10,000+ employees — bringing
                screening, nursing, therapy, nutrition, and mental health
                support on site, nationwide.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-accent bg-background p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Our Mission
              </p>
              <p className="mt-3 font-display text-lg font-medium leading-relaxed text-text-primary sm:text-xl">
                To make occupational health and wellness accessible, measurable,
                and free for every South African employee — at the workplace, on
                their terms.
              </p>
            </div>
          </FadeIn>

          <FadeIn y={24} delay={0.15}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/Our Story (About).jpg"
                  alt="Healthcare practitioners at work in a corporate wellness setting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-4 rounded-2xl bg-primary-dark px-6 py-5 text-white shadow-xl sm:-left-6 sm:px-8">
                <p className="font-display text-3xl font-bold">2007</p>
                <p className="mt-0.5 text-sm text-white/70">
                  Established. Trusted nationwide.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

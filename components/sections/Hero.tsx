"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  HeartHandshake,
  ImageIcon,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const heroPoints = [
  { icon: HeartHandshake, label: "Free for your employees" },
  { icon: BadgeCheck, label: "HPCSA-registered specialists" },
  { icon: MapPin, label: "Nationwide on-site delivery" },
];

const slideLeft = (delay: number) => ({
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const cardIn = (delay: number) => ({
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function HeroImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center overflow-hidden bg-[linear-gradient(160deg,rgba(27,94,140,0.12),rgba(46,121,174,0.28))] ${className ?? ""}`}
      >
        <div className="flex flex-col items-center gap-2 text-primary/45">
          <ImageIcon className="h-8 w-8" strokeWidth={1.75} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
            Image placeholder
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setFailed(true)}
        className="object-cover"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[linear-gradient(160deg,#0F3D5C_0%,#1B5E8C_55%,#2E79AE_100%)] pb-14 pt-24 md:pb-16 md:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div>
            <motion.div {...slideLeft(0.05)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.2} />
                Corporate Wellness Partner Since 2007
              </span>
            </motion.div>

            <motion.h1
              {...slideLeft(0.15)}
              className="mt-6 font-sans fluid-h1 font-bold tracking-tighter text-white"
            >
              Leading in Corporate
              <br />
              <span className="font-serif font-normal italic tracking-normal text-accent">
                Health &amp; Wellness
              </span>
              <br />
              in{" "}
              <span className="font-serif font-normal italic tracking-normal text-white">
                South Africa.
              </span>
            </motion.h1>

            <motion.p
              {...slideLeft(0.25)}
              className="mt-5 max-w-xl fluid-body-lg leading-relaxed text-white/80"
            >
              Corporate Healthy SA delivers occupational health screening,
              wellness programmes, and specialist care directly to your
              workplace — free for your employees, and designed to reduce
              absenteeism, boost morale, and improve productivity.
            </motion.p>

            <motion.div
              {...slideLeft(0.35)}
              className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button href="/contact" variant="accent" size="lg">
                Request a Proposal
              </Button>
              <Button href="/services" variant="light" size="lg">
                Explore Our Services
              </Button>
            </motion.div>

            <motion.ul
              {...slideLeft(0.45)}
              className="mt-7 flex flex-wrap gap-x-7 gap-y-3"
            >
              {heroPoints.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-white/80"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.2} />
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-6 right-4 h-60 w-60 rounded-full bg-accent/25 blur-3xl" />
              <div className="absolute -left-4 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="relative">
              <motion.div
                {...cardIn(0.32)}
                className="absolute right-0 bottom-0 z-10 w-[42%]"
              >
                <HeroImage
                  src="/images/hero/hero-2.jpg"
                  alt="Occupational health screening at the client's workplace"
                  className="aspect-square w-full rounded-2xl shadow-xl"
                  sizes="(max-width: 640px) 42vw, (max-width: 1024px) 30vw, 22vw"
                />
              </motion.div>

              <motion.div {...cardIn(0.2)} className="relative z-0 mx-auto w-[68%]">
                <HeroImage
                  src="/images/hero/hero-1.jpg"
                  alt="Corporate wellness programme delivered on-site"
                  priority
                  className="aspect-[4/5] w-full rounded-3xl shadow-2xl"
                  sizes="(max-width: 640px) 68vw, (max-width: 1024px) 50vw, 32vw"
                />
              </motion.div>

              <motion.div
                {...cardIn(0.46)}
                className="absolute -left-1 bottom-8 z-20"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-3.5 pr-5 shadow-xl">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light text-primary">
                    <Building2 className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold leading-none text-text-primary">
                      3500+
                    </p>
                    <p className="mt-1 text-xs font-medium text-text-muted">
                      Wellness Events
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

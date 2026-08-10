"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { ServiceIcon } from "@/lib/serviceIcons";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The showcase uses the client's official 13 services. The two entries flagged in
// data/services.ts as "Not on client's official 13-service list" (massages,
// psychologist) are excluded here until the client confirms whether to keep, remove,
// or fold them into another service. If those entries are removed from the data file,
// this filter becomes a no-op and every service shows automatically.
const showcaseServices = services.filter(
  (service) => service.slug !== "massages" && service.slug !== "psychologist",
);

function DesktopShowcase() {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  return (
    <div
      role="tablist"
      aria-label="Our services"
      className="hidden h-[380px] gap-2.5 xl:flex"
    >
      {showcaseServices.map((service, index) => {
        const isActive = active === index;
        const showImage = !failed[index] && Boolean(service.heroImage);

        return (
          <motion.button
            key={service.slug}
            type="button"
            layout
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            role="tab"
            aria-selected={isActive}
            aria-label={service.title}
            title={service.title}
            className={`relative cursor-pointer overflow-hidden rounded-2xl text-left shadow-[0_8px_32px_rgba(15,61,92,0.12)] ring-1 ring-inset ring-white/10 transition-[filter] duration-200 hover:brightness-110 ${
              isActive ? "flex-grow" : "w-12"
            }`}
            transition={{ layout: { type: "spring", stiffness: 320, damping: 34 } }}
          >
            {showImage ? (
              <Image
                src={service.heroImage}
                alt=""
                fill
                sizes={isActive ? "40vw" : "48px"}
                onError={() =>
                  setFailed((prev) => ({ ...prev, [index]: true }))
                }
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(165deg,#2E79AE_0%,#1B5E8C_55%,#0F3D5C_100%)]" />
            )}

            <div
              aria-hidden
              className={`absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-primary-dark/10 ${
                isActive ? "opacity-100" : "opacity-80"
              }`}
            />

            {!isActive && (
              <div className="absolute inset-0 flex flex-col items-center justify-between py-3.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-accent backdrop-blur-sm">
                  <ServiceIcon
                    name={service.icon}
                    className="h-5 w-5"
                    strokeWidth={2}
                  />
                </span>
                <span
                  className="rotate-180 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {service.title}
                </span>
              </div>
            )}

            {isActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-end p-4"
              >
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-[0_8px_32px_rgba(15,61,92,0.25)] backdrop-blur-xl">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1.5 font-display text-[22px] font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-snug text-white/85">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

// Mobile fallback (below the xl breakpoint): the wide horizontal expand/collapse
// interaction does not translate well to small screens, so we stack the services as
// a tap-to-expand vertical accordion that reuses the same image + glass treatment.
function MobileAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  return (
    <div className="flex flex-col gap-3 xl:hidden">
      {showcaseServices.map((service, index) => {
        const isOpen = open === index;
        const showImage = !failed[index] && Boolean(service.heroImage);

        return (
          <div
            key={service.slug}
            className="overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(15,61,92,0.06)] ring-1 ring-inset ring-primary/10"
          >
            <button
              type="button"
              onClick={() => setOpen(open === index ? null : index)}
              aria-expanded={isOpen}
              className={`flex w-full items-center gap-4 p-4 text-left transition-colors duration-300 ${
                isOpen ? "bg-primary-dark" : "bg-white"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                  isOpen
                    ? "bg-white/10 text-accent"
                    : "bg-accent-light text-primary"
                }`}
              >
                <ServiceIcon
                  name={service.icon}
                  className="h-5 w-5"
                  strokeWidth={2}
                />
              </span>
              <span className="flex-1">
                <span
                  className={`block font-display text-base font-bold transition-colors duration-300 ${
                    isOpen ? "text-white" : "text-text-primary"
                  }`}
                >
                  {service.title}
                </span>
                <span
                  className={`mt-0.5 block text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isOpen ? "text-accent" : "text-primary"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-accent" : "text-text-muted"
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="relative">
                    {showImage ? (
                      <Image
                        src={service.heroImage}
                        alt=""
                        fill
                        sizes="100vw"
                        onError={() =>
                          setFailed((prev) => ({ ...prev, [index]: true }))
                        }
                        className="object-cover opacity-30"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[linear-gradient(165deg,#2E79AE_0%,#1B5E8C_55%,#0F3D5C_100%)]" />
                    )}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-primary-dark/60"
                    />
                    <div className="relative px-4 pb-5 pt-1">
                      <p className="text-sm leading-relaxed text-white/85">
                        {service.shortDescription}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-white"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function GlassShowcase() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          heading="Comprehensive Workplace Health, All Under One Roof"
          subheading="A comprehensive range of specialist services delivered on-site by HPCSA-registered practitioners — from screening and nursing care to therapy, nutrition, and mental health support."
        />

        <DesktopShowcase />
        <MobileAccordion />

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="secondary">
            Explore All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}

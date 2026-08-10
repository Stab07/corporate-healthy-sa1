"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { Service } from "@/data/services";
import { ServiceIcon } from "@/lib/serviceIcons";

interface ServiceAccordionProps {
  services: Service[];
}

export function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-2.5">
      {services.map((service, index) => {
        const isOpen = open === index;
        const triggerId = `service-trigger-${index}`;
        const panelId = `service-panel-${index}`;

        return (
          <div
            key={service.slug}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
          >
            <button
              type="button"
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
              className={`flex w-full items-center gap-3.5 p-4 text-left transition-colors duration-300 ${
                isOpen
                  ? "bg-primary-dark"
                  : "bg-white hover:bg-zinc-50"
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
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="bg-primary-dark px-4 pb-4 pt-0.5">
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

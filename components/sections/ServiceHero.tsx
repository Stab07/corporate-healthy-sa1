"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Service } from "@/data/services";
import { ServiceIcon } from "@/lib/serviceIcons";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative flex min-h-[58dvh] items-end overflow-hidden bg-[linear-gradient(160deg,#0F3D5C_0%,#1B5E8C_70%,#2E79AE_100%)] pb-14 pt-44 md:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(242,166,90,0.18),transparent_55%)]" />
      {service.heroImage && (
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      {service.heroImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-primary-dark/40" />
      )}

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Breadcrumb
            variant="light"
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex items-center gap-4 sm:gap-5"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary-dark shadow-lg sm:h-16 sm:w-16">
            <ServiceIcon
              name={service.icon}
              className="h-7 w-7 sm:h-8 sm:w-8"
              strokeWidth={2}
            />
          </span>
          <span className="font-display fluid-h1 font-bold tracking-tighter text-white">
            {service.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl fluid-body-lg leading-relaxed text-white/85"
        >
          {service.shortDescription}
        </motion.p>
      </Container>
    </section>
  );
}

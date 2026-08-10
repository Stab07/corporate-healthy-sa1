"use client";

import { motion } from "motion/react";

export function ServicesHero() {
  return (
    <section className="relative flex min-h-[40dvh] items-center overflow-hidden bg-[linear-gradient(160deg,#0F3D5C_0%,#1B5E8C_70%,#2E79AE_100%)] pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,166,90,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display fluid-h1 font-bold tracking-tighter text-white"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-xl fluid-body-lg leading-relaxed text-white/75"
        >
          A comprehensive range of specialist services, delivered as one
          integrated workplace wellness programme — screening, nursing care,
          therapy, nutrition, oral and eye care, and mental health support, on
          site and by registered practitioners.
        </motion.p>
      </div>
    </section>
  );
}

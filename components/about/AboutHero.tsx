"use client";

import { motion } from "motion/react";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[46dvh] items-center overflow-hidden bg-[linear-gradient(160deg,#0F3D5C_0%,#1B5E8C_70%,#2E79AE_100%)] pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,166,90,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Since 2007 · 3500+ wellness events
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display fluid-h1 font-bold tracking-tighter text-white"
        >
          About Corporate Healthy SA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-xl fluid-body-lg leading-relaxed text-white/75"
        >
          We were founded to make workplace wellness accessible and measurable
          for every South African business — bringing HPCSA-registered
          practitioners on site, free of charge to employees.
        </motion.p>
      </div>
    </section>
  );
}

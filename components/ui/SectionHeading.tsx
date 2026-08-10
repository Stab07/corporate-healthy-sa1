"use client";

import { motion } from "motion/react";

const anim = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      {...anim}
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-14 md:mb-16`}
    >
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-accent" : "text-primary"
          }`}
        >
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
          {centered && <span className="h-px w-6 bg-accent" />}
        </span>
      )}
      <h2
        className={`fluid-h2 font-display font-bold tracking-tighter ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-5 fluid-body-lg leading-relaxed max-w-[65ch] ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-text-muted"}`}
        >
          {subheading}
        </p>
      )}
    </motion.div>
  );
}

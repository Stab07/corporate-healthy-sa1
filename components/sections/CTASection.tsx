"use client";

import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
}

export function CTASection({
  heading = "Let's Build a Healthier, More Productive Workplace Together",
  subheading = "Tell us about your team and we'll design a wellness programme tailored to your business — with a response within 24 hours.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0F3D5C_0%,#1B5E8C_70%,#2E79AE_100%)] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(242,166,90,0.25),transparent_55%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 bottom-0 h-72 w-72 rounded-full border border-white/10"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 bottom-10 h-32 w-32 rounded-full border border-white/15"
      />

      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl font-display fluid-h2 font-bold tracking-tighter text-white"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-xl fluid-body-lg leading-relaxed text-white/80"
        >
          {subheading}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" variant="accent" size="lg">
            Request a Proposal
          </Button>
          <Button
            href={`tel:${siteConfig.phoneLink}`}
            variant="light"
            size="lg"
            showArrow={false}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </Button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 text-sm text-white/60"
        >
          Free for your employees &middot; HPCSA-registered practitioners &middot;
          Nationwide on-site delivery
        </motion.p>
      </Container>
    </section>
  );
}

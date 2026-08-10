"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ServicesCta() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display fluid-h2 font-bold tracking-tighter text-text-primary">
            Not sure what your team needs?
          </h2>
          <p className="mt-4 fluid-body-lg leading-relaxed text-text-muted">
            Tell us about your workforce and we&apos;ll recommend the right mix
            of services for your goals, budget, and team size.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="accent">
              Speak to Our Wellness Team
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

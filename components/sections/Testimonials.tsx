"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = testimonials.length;
  const testimonial = testimonials[index];

  const paginate = useCallback(
    (dir: number) =>
      setPage(([i]) => [(i + dir + count) % count, dir]),
    [count],
  );

  useEffect(() => {
    if (paused || reduce || count < 2) return;
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
  }, [paused, reduce, count, paginate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate]);

  const slide = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          heading="What Companies Say About Us"
          subheading="For more than a decade, corporate clients across South Africa have trusted us with the health and wellbeing of their people."
        />

        <div
          className="mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-100 bg-background px-6 py-10 shadow-[0_16px_48px_rgba(15,61,92,0.08)] sm:px-10 md:px-14 md:py-14">
            <Quote
              aria-hidden="true"
              className="absolute right-8 top-8 h-16 w-16 text-accent/15"
              strokeWidth={1.2}
            />

            <div className="flex items-center gap-1 text-accent" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>

            <div className="relative mt-6 min-h-[120px] sm:min-h-[104px]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.blockquote
                  key={index}
                  custom={direction}
                  variants={reduce ? undefined : slide}
                  initial={reduce ? { opacity: 1 } : "enter"}
                  animate="center"
                  exit={reduce ? { opacity: 1 } : "exit"}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <p className="font-display text-lg font-medium leading-relaxed text-text-primary md:text-2xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="font-display font-bold text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-sm text-text-muted">
                      {testimonial.role}
                    </p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {count > 1 && (
              <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
                <div className="flex items-center gap-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      onClick={() => setPage([i, i > index ? 1 : -1])}
                      aria-label={`Show testimonial from ${t.name}`}
                      aria-current={i === index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-7 bg-primary"
                          : "w-2 bg-zinc-300 hover:bg-zinc-400"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => paginate(-1)}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-text-primary transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-text-primary transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

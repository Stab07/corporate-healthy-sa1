"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) {
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }
    const target = parseFloat(match[1].replace(/,/g, ""));
    const suffix = match[2];
    const hasGrouping = match[1].includes(",");
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) =>
        setDisplay(
          `${Math.round(v).toLocaleString(hasGrouping ? "en-US" : "en-US", {
            useGrouping: hasGrouping,
          })}${suffix}`
        ),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return <span ref={ref}>{display}</span>;
}

"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-[70dvh] items-center overflow-hidden bg-[linear-gradient(160deg,#0F3D5C_0%,#1B5E8C_70%,#2E79AE_100%)] pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,166,90,0.18),transparent_60%)]" />
      <Container className="relative py-20 text-center">
        <p className="font-display text-7xl font-bold tracking-tighter text-accent sm:text-8xl">
          Oops
        </p>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
          Something Went Wrong
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          An unexpected error occurred while loading this page. Please try again
          — or head back to a page that&apos;s working.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={reset} variant="accent" size="lg">
            Try Again
          </Button>
          <Button href="/" variant="light" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}

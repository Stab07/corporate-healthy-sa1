import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70dvh] items-center overflow-hidden bg-[linear-gradient(160deg,#0F3D5C_0%,#1B5E8C_70%,#2E79AE_100%)] pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,166,90,0.18),transparent_60%)]" />
      <Container className="relative py-20 text-center">
        <p className="font-display text-7xl font-bold tracking-tighter text-accent sm:text-8xl md:text-9xl">
          404
        </p>
        <h1 className="mt-6 font-display fluid-h1 font-bold tracking-tighter text-white">
          This Page Seems to Have Clocked Off
        </h1>
        <p className="mx-auto mt-5 max-w-xl fluid-body-lg leading-relaxed text-white/75">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to your team&apos;s wellness.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" variant="accent" size="lg">
            Back to Home
          </Button>
          <Button href="/services" variant="light" size="lg">
            Explore Our Services
          </Button>
        </div>
        <p className="mt-10 text-sm text-white/60">
          Need help?{" "}
          <Link
            href="/contact"
            className="font-medium text-accent underline-offset-4 transition-colors hover:underline"
          >
            Contact our team
          </Link>
        </p>
      </Container>
    </section>
  );
}

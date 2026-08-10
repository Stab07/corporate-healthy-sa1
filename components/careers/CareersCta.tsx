import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CareersCta() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0F3D5C_0%,#1B5E8C_70%,#2E79AE_100%)] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(242,166,90,0.22),transparent_55%)]" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-display fluid-h2 font-bold tracking-tighter text-white">
          Don&apos;t See a Role That Fits?
        </h2>
        <p className="mx-auto mt-5 max-w-xl fluid-body-lg leading-relaxed text-white/75">
          We&apos;re always building our network of HPCSA-registered
          practitioners. Send us your CV and we&apos;ll keep you on file for the
          right opportunity.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={`mailto:${siteConfig.jobsEmail}?subject=Application%20to%20Corporate%20Healthy%20SA`}
            variant="accent"
            size="lg"
          >
            <Mail className="h-4 w-4" />
            Send us your CV
          </Button>
        </div>
        <p className="mt-8 text-sm text-white/60">
          Or email us directly at{" "}
          <a
            href={`mailto:${siteConfig.jobsEmail}`}
            className="font-medium text-accent underline-offset-4 transition-colors hover:underline"
          >
            {siteConfig.jobsEmail}
          </a>
        </p>
      </Container>
    </section>
  );
}

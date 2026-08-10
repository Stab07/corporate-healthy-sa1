import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function SentimentsMessage() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn y={24}>
          <div className="mx-auto max-w-3xl">
            <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-accent" />
              A Word From Our Leadership
            </p>
            <div className="relative mt-8 rounded-2xl border border-zinc-100 border-l-4 border-l-accent bg-background p-8 sm:p-12">
              <Quote
                className="h-10 w-10 text-accent"
                fill="currentColor"
                strokeWidth={0}
              />
              <div className="mt-6 space-y-6 font-display text-lg leading-relaxed text-text-primary sm:text-xl">
                <p>
                  It is our pleasure to offer health screening services to
                  organisations of every size — small and large, profit and
                  non-profit, government and private institutions, mines and
                  corporations.
                </p>
                <p>
                  Our service providers are dedicated professionals who visit
                  your organisation at a time that suits you.
                </p>
                <p>
                  We fully understand the importance of a healthy workforce, and
                  that is why we exist. We take pride in our staff members and
                  service providers, who are committed to making a positive
                  contribution to the occupational health of your employees.
                </p>
              </div>
              <div className="mt-10 border-t border-zinc-200 pt-6">
                <p className="font-display text-base font-semibold text-text-primary">
                  Raymond Rams
                </p>
                <p className="mt-0.5 text-sm text-text-muted">
                  Marketing Director, Corporate Healthy SA
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

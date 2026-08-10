import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

// PLACEHOLDER wordmarks shown as generic sector names. Replace with real,
// approved client logos (with permission) before launch.
const placeholderWordmarks = [
  "Manufacturing",
  "Financial Services",
  "Logistics",
  "Retail",
  "Mining",
  "Insurance",
  "Technology",
  "FMCG",
];

interface LogoMarqueeProps {
  title?: string;
}

export function LogoMarquee({
  title = "3500+ wellness events delivered across South Africa",
}: LogoMarqueeProps) {
  return (
    <section className="border-b border-zinc-100 bg-white py-16 md:py-20">
      <Container>
        <FadeIn>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
            {title}
          </p>
        </FadeIn>
      </Container>
      <div className="group relative mt-9 overflow-hidden" aria-label="Client industries">
        <div
          className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]"
          aria-hidden="false"
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex items-center gap-6 pr-6"
            >
              {placeholderWordmarks.map((name) => (
                <span
                  key={name}
                  className="flex h-16 min-w-44 items-center justify-center rounded-xl border border-zinc-200 bg-background px-8 text-sm font-semibold uppercase tracking-wider text-zinc-500 transition-colors duration-300 hover:border-accent hover:text-primary"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
      </div>
    </section>
  );
}

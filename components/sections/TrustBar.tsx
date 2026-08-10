import { stats } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function TrustBar() {
  return (
    <div className="relative z-10 -mt-14 pb-4">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-[0_16px_48px_rgba(15,61,92,0.12)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center sm:py-10">
              <p className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

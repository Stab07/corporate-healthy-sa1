import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Book a Wellness Day",
    description:
      "Reach out to our team and we'll schedule a convenient date to come to your workplace.",
  },
  {
    number: "02",
    title: "We Bring Our Specialists",
    description:
      "Our team of registered health practitioners arrives fully equipped — no cost or setup required from you.",
  },
  {
    number: "03",
    title: "Your Team Leaves Healthier",
    description:
      "Every employee receives personal results, professional advice, and referrals where needed.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#EFF5FA] py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          heading="Simple to Set Up. Powerful for Your Team."
          subheading="From booking to results — we make workplace wellness effortless."
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[16.6%] right-[16.6%] top-14 hidden border-t-2 border-dashed border-primary/20 lg:block"
          />
          <FadeInStagger className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-8">
            {steps.map((step) => (
              <FadeInItem key={step.number} className="h-full">
                <div className="relative text-center">
                  <span className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-white font-display text-6xl font-bold tracking-tighter text-primary shadow-[0_16px_48px_rgba(15,61,92,0.12)] ring-1 ring-primary/10">
                    <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[3px] bg-accent" />
                    {step.number}
                  </span>
                  <h3 className="mt-9 font-display text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-text-muted sm:text-base">
                    {step.description}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </section>
  );
}

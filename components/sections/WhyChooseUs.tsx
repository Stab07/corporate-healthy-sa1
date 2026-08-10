import { ShieldCheck, SlidersHorizontal, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const reasons = [
  {
    icon: Users,
    title: "Empowering Your Staff",
    description:
      "We make employees aware of health issues they may already have, and work to prevent future illness — turning wellbeing into an everyday part of your workplace culture.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customised Programmes",
    description:
      "From SMEs with 40 staff to corporations with 10,000+ employees, every wellness programme is tailored to your workforce, your schedule, and your goals.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Health Screening",
    description:
      "More than 3500 wellness events delivered by HPCSA-registered practitioners — from screenings to complete on-site wellness programmes.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              heading="Wellbeing That Works for Your Business"
              subheading="Healthier employees are more engaged, more productive, and absent less often. We make professional health and wellness simple to bring to your team."
              centered={false}
            />
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary">
                Discuss Your Workplace
              </Button>
            </div>
          </div>

          <FadeInStagger className="flex flex-col">
            {reasons.map(({ icon: Icon, title, description }, index) => (
              <FadeInItem key={title}>
                <div
                  className={`flex gap-5 py-7 sm:gap-6 ${
                    index > 0 ? "border-t border-primary/10" : ""
                  }`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-light text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                    <Icon className="h-7 w-7" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-text-primary">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
                      {description}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <div className="lg:hidden">
            <Button href="/contact" variant="primary">
              Discuss Your Workplace
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

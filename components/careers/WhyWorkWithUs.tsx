import {
  Building2,
  CalendarClock,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const benefits = [
  {
    icon: CalendarClock,
    title: "Flexible On-site Placements",
    description:
      "Deliver services on site, on schedules that fit your practice and your life — from one-off wellness days to ongoing corporate contracts.",
  },
  {
    icon: Building2,
    title: "Diverse Corporate Clients",
    description:
      "Work across industries and company sizes, from small teams to 10,000+ employee operations nationwide.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description:
      "Grow within a network of specialists with exposure to occupational health, screening, and corporate wellness programmes.",
  },
  {
    icon: ShieldCheck,
    title: "A Registered, Supported Network",
    description:
      "We handle logistics, scheduling, and client relationships so you can focus on delivering great care.",
  },
];

export function WhyWorkWithUs() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Work With Us"
          heading="A Network Built Around Your Practice"
          subheading="Whether you are an established practitioner or starting out, we connect you with meaningful corporate clients — and take the admin off your plate."
        />
        <FadeInStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <FadeInItem key={title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,61,92,0.12)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}

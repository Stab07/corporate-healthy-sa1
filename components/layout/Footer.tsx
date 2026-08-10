import Link from "next/link";
import Image from "next/image";
import {
  PiMapPin,
  PiPhone,
  PiEnvelopeSimple,
  PiWhatsappLogo,
  PiClock,
} from "react-icons/pi";
import { services } from "@/data/services";
import { siteConfig, navLinks } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

// PLACEHOLDER SOCIAL LINKS: only WhatsApp has a live URL. Add real Facebook,
// LinkedIn and Instagram profile URLs before launch, then restore the icons here.
const socials = [
  { label: "WhatsApp", href: siteConfig.whatsappLink, Icon: PiWhatsappLogo },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <FadeIn y={24}>
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-2.5" aria-label="Corporate Healthy SA - home">
                <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/logo.png"
                    alt="Corporate Healthy SA logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-cover"
                  />
                </span>
                <span className="font-display text-lg font-bold tracking-tight">
                  Corporate Healthy{" "}
                  <span className="text-accent">SA</span>
                </span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
                Bringing specialist health screenings and wellness programmes
                directly to your workplace — free for your employees, and
                delivered by HPCSA-registered practitioners since 2007.
              </p>
              <div className="mt-6 flex items-center gap-2.5">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-primary-dark"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">
                Quick Links
              </h4>
              <ul className="mt-5 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors duration-200 hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">
                Our Services
              </h4>
              <ul className="mt-5 grid grid-cols-1 gap-2.5">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-white/80 transition-colors duration-200 hover:text-accent"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">
                Contact
              </h4>
              <ul className="mt-5 space-y-3.5 text-sm text-white/80">
                <li className="flex items-start gap-2.5">
                  <PiPhone size={16} className="mt-0.5 shrink-0 text-accent" />
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-accent"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <PiEnvelopeSimple
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <PiMapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{siteConfig.location}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <PiClock size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{siteConfig.hours}</span>
                </li>
              </ul>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-whatsapp-dark"
              >
                <PiWhatsappLogo size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-center text-xs leading-relaxed text-white/70">
              {siteConfig.hpcsa}
            </p>
            <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="text-xs text-white/60">
                &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
                reserved.
              </p>
              {/* Privacy Policy / Terms pages to be added before launch. */}
            </div>
          </div>
        </Container>
      </FadeIn>
    </footer>
  );
}

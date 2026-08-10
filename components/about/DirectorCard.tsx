import { Mail, Phone } from "lucide-react";
import { PiWhatsappLogo } from "react-icons/pi";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/constants";

const contactLinkBase =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97]";

export function DirectorCard() {
  return (
    <section className="border-t border-zinc-100 bg-background py-20 md:py-28">
      <Container>
        <FadeIn y={24}>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light font-display text-3xl font-bold text-white shadow-[0_8px_24px_rgba(27,94,140,0.35)]">
                  RR
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Marketing Director
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-text-primary">
                    Raymond Rams
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-muted">
                    Have a question about our wellness programmes or how health
                    screening works at your company? Reach out directly and our
                    team will get back to you.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className={`${contactLinkBase} border border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-white`}
                    >
                      <Mail className="h-4 w-4" strokeWidth={2.2} />
                      Email
                    </a>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className={`${contactLinkBase} bg-accent text-primary-dark hover:brightness-[0.96]`}
                    >
                      <Phone className="h-4 w-4" strokeWidth={2.2} />
                      Call
                    </a>
                    <a
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${contactLinkBase} bg-whatsapp text-white hover:bg-whatsapp-dark`}
                    >
                      <PiWhatsappLogo size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

import { Mail, MapPin } from "lucide-react";
import { jobOpenings } from "@/data/careers";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

export function Openings() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Current Openings"
          heading="Open Positions"
          subheading="Applications are reviewed as they come in. Don't see a match? Send us your CV and we'll keep you on file."
        />

        {jobOpenings.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-primary/25 bg-white p-10 text-center shadow-sm">
            <p className="font-display text-xl font-semibold text-text-primary">
              No open positions right now
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              We&apos;re always keen to hear from great practitioners. Send us
              your CV and we&apos;ll be in touch when the right role opens up.
            </p>
            <div className="mt-7 flex justify-center">
              <Button
                href={`mailto:${siteConfig.jobsEmail}?subject=Application%20to%20Corporate%20Healthy%20SA`}
                variant="primary"
              >
                <Mail className="h-4 w-4" />
                Send us your CV
              </Button>
            </div>
          </div>
        ) : (
          <FadeInStagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job) => (
              <FadeInItem key={job.slug} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,61,92,0.12)]">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{job.type}</Badge>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-text-primary">
                    {job.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-text-muted">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    {job.location}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                    {job.summary}
                  </p>
                  <div className="mt-6">
                    <Button
                      href={`mailto:${siteConfig.jobsEmail}?subject=Application%3A%20${encodeURIComponent(job.title)}`}
                      variant="secondary"
                      size="sm"
                      className="w-full"
                    >
                      <Mail className="h-4 w-4" />
                      Apply Now
                    </Button>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        )}
      </Container>
    </section>
  );
}

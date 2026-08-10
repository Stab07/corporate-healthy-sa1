import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { ServiceIcon } from "@/lib/serviceIcons";

interface ServiceCardProps {
  service: Service;
  size?: "default" | "large";
}

export function ServiceCard({ service, size = "default" }: ServiceCardProps) {
  if (size === "large") {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_20px_48px_rgba(15,61,92,0.14)]"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-[linear-gradient(150deg,#0F3D5C_0%,#1B5E8C_60%,#2E79AE_100%)]">
          {service.heroImage && (
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(242,166,90,0.25),transparent_55%)]" />
          {service.heroImage && (
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
          )}
          <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary-dark shadow-lg">
            <ServiceIcon name={service.icon} className="h-6 w-6" strokeWidth={2} />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold leading-snug text-text-primary transition-colors duration-200 group-hover:text-primary">
            {service.title}
          </h3>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-muted">
            {service.shortDescription}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-primary-light">
            Learn more
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-100 shadow-sm transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,61,92,0.14)]">
        {service.heroImage ? (
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(150deg,#0F3D5C_0%,#1B5E8C_60%,#2E79AE_100%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-display text-lg font-semibold leading-snug text-white">
            {service.title}
          </h3>
          <span className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            Read more
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {service.shortDescription}
      </p>
    </Link>
  );
}

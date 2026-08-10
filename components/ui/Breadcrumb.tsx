import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
  variant?: "light" | "dark";
}

export function Breadcrumb({ items, variant = "dark" }: BreadcrumbProps) {
  const base = variant === "light" ? "text-white/70 hover:text-white" : "text-text-muted hover:text-primary";
  const current = variant === "light" ? "text-white" : "text-text-primary";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li>
          <Link href="/" className={`transition-colors duration-200 ${base}`}>
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight
              className={`h-3.5 w-3.5 ${variant === "light" ? "text-white/40" : "text-zinc-400"}`}
              strokeWidth={2.5}
            />
            {item.href ? (
              <Link href={item.href} className={`transition-colors duration-200 ${base}`}>
                {item.label}
              </Link>
            ) : (
              <span className={current} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

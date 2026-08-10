"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

interface AccordionProps {
  label: string;
  open: boolean;
  onToggle: () => void;
  links: { label: string; href: string }[];
  activePrefix: string;
  active: boolean;
}

function Accordion({ label, open, onToggle, links, activePrefix, active }: AccordionProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
          active ? "bg-accent-light text-primary" : "text-text-primary hover:bg-zinc-50"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-0.5 pb-1 pl-4 pt-1">
              {links.map((link) => {
                const isActive = link.href.startsWith(activePrefix);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-accent-light/60 text-primary"
                        : "text-text-muted hover:bg-zinc-50 hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [section, setSection] = useState<"services" | null>(null);
  const [prevOpen, setPrevOpen] = useState(open);
  const pathname = usePathname();

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (!open) {
      setSection(null);
    }
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <AnimatePresence>
      {open && (
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-primary-dark/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
              <Link
                href="/"
                onClick={onClose}
                aria-label="Corporate Healthy SA - home"
                className="flex items-center gap-2.5"
              >
                <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white">
                  <Image
                    src="/logo.png"
                    alt="Corporate Healthy SA logo"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-cover"
                  />
                </span>
                <span className="font-display text-base font-bold tracking-tight text-text-primary">
                  Corporate Healthy{" "}
                  <span className="text-primary">SA</span>
                </span>
              </Link>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-text-primary transition-colors hover:bg-zinc-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav
              className="flex-1 space-y-0.5 overflow-y-auto px-4 py-5"
              aria-label="Mobile main"
            >
              <Link
                href="/"
                onClick={onClose}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  pathname === "/"
                    ? "bg-accent-light text-primary"
                    : "text-text-primary hover:bg-zinc-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  navActive("/about")
                    ? "bg-accent-light text-primary"
                    : "text-text-primary hover:bg-zinc-50"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/sentiments"
                onClick={onClose}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  navActive("/sentiments")
                    ? "bg-accent-light text-primary"
                    : "text-text-primary hover:bg-zinc-50"
                }`}
              >
                Our Sentiments
              </Link>
              <Accordion
                label="Services"
                open={section === "services"}
                onToggle={() =>
                  setSection(section === "services" ? null : "services")
                }
                links={services.map((s) => ({
                  label: s.title,
                  href: `/services/${s.slug}`,
                }))}
                activePrefix="/services"
                active={pathname.startsWith("/services")}
              />
              <Link
                href="/careers"
                onClick={onClose}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  navActive("/careers")
                    ? "bg-accent-light text-primary"
                    : "text-text-primary hover:bg-zinc-50"
                }`}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  navActive("/contact")
                    ? "bg-accent-light text-primary"
                    : "text-text-primary hover:bg-zinc-50"
                }`}
              >
                Contact
              </Link>

              <div className="pt-5">
                <Button
                  href="/contact"
                  onClick={onClose}
                  variant="accent"
                  className="w-full"
                >
                  Request a Proposal
                </Button>
              </div>
            </nav>

            <div className="space-y-3 border-t border-zinc-100 px-5 py-5 text-sm">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-text-muted transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-text-muted transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                {siteConfig.email}
              </a>
              <p className="flex items-start gap-2.5 text-text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {siteConfig.location}
              </p>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

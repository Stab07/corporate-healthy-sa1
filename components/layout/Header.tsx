"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

function DropdownItem({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-xl px-3.5 py-3 text-sm font-medium transition-colors duration-200 ${
        active
          ? "bg-accent-light text-primary"
          : "text-text-muted hover:bg-zinc-50 hover:text-text-primary"
      }`}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [scrolledRaw, setScrolledRaw] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"about" | "services" | null>(null);
  const pathname = usePathname();
  const scrolled = scrolledRaw;

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolledRaw(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const pathStarts = (href: string) =>
    href !== "/" && pathname.startsWith(href);
  const linkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathStarts(href);
  const servicesActive = pathStarts("/services");

  const navCls = (active: boolean) =>
    `flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
      active
        ? scrolled
          ? "text-primary"
          : "text-white"
        : scrolled
          ? "text-text-muted hover:text-text-primary"
          : "text-white/75 hover:text-white"
    }`;

  return (
    <>
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-900/5 bg-white/90 shadow-[0_4px_24px_rgba(15,61,92,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between gap-6 transition-all duration-300 ${
          scrolled ? "h-16 md:h-[72px]" : "h-20 md:h-24"
        }`}
      >
        <Link
          href="/"
          aria-label="Corporate Healthy SA - home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <Image
              src="/logo.png"
              alt="Corporate Healthy SA logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10 object-cover"
            />
          </span>
          <span className="leading-none">
            <span
              className={`block font-display text-lg font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-text-primary" : "text-white"
              }`}
            >
              Corporate Healthy{" "}
              <span className={scrolled ? "text-primary" : "text-accent"}>
                SA
              </span>
            </span>
            <span
              className={`mt-1 hidden xl:block text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                scrolled ? "text-text-muted" : "text-white/70"
              }`}
            >
              Leading In Corporate Health and Wellness
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          <Link
            href="/"
            className={`${navCls(pathname === "/")} ${
              pathname === "/" && scrolled ? "bg-accent-light/60" : ""
            }`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("about")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`${navCls(
                linkActive("/about") || linkActive("/sentiments")
              )} ${
                (linkActive("/about") || linkActive("/sentiments")) && scrolled
                  ? "bg-accent-light/60"
                  : ""
              }`}
              aria-haspopup="true"
              aria-expanded={openMenu === "about"}
              onClick={() => setOpenMenu(openMenu === "about" ? null : "about")}
            >
              About
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  openMenu === "about" ? "rotate-180" : ""
                }`}
                strokeWidth={2.5}
              />
            </button>
            <div
              className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                openMenu === "about"
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >
              <div className="w-56 rounded-2xl border border-zinc-100 bg-white p-2 shadow-xl shadow-primary-dark/10">
                <DropdownItem
                  href="/about"
                  active={pathname === "/about"}
                >
                  About Us
                </DropdownItem>
                <DropdownItem
                  href="/sentiments"
                  active={pathname === "/sentiments"}
                >
                  Our Sentiments
                </DropdownItem>
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`${navCls(servicesActive)} ${
                servicesActive && scrolled ? "bg-accent-light/60" : ""
              }`}
              aria-haspopup="true"
              aria-expanded={openMenu === "services"}
              onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  openMenu === "services" ? "rotate-180" : ""
                }`}
                strokeWidth={2.5}
              />
            </button>
            <div
              className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
                openMenu === "services"
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >
              <div className="w-[520px] rounded-2xl border border-zinc-100 bg-white p-2 shadow-xl shadow-primary-dark/10">
                <div className="grid grid-cols-2 gap-1">
                  {services.map((service) => (
                    <DropdownItem
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      active={pathname === `/services/${service.slug}`}
                    >
                      {service.title}
                    </DropdownItem>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/careers"
            className={`${navCls(linkActive("/careers"))} ${
              linkActive("/careers") && scrolled ? "bg-accent-light/60" : ""
            }`}
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className={`${navCls(linkActive("/contact"))} ${
              linkActive("/contact") && scrolled ? "bg-accent-light/60" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="accent" size="sm">
            Request a Proposal
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 lg:hidden ${
            scrolled
              ? "border border-zinc-200 bg-white text-text-primary shadow-sm hover:bg-zinc-50"
              : "border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
          }`}
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>
    </motion.header>

    <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

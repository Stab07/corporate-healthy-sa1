import type { Metadata } from "next";
import {
  Instrument_Serif,
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Corporate Healthy SA | Corporate Health & Wellness Programmes",
    template: "%s | Corporate Healthy SA",
  },
  description:
    "Leading corporate health and wellness partner in South Africa since 2007. Customised wellness programmes, health screening, and on-site occupational health services delivered by HPCSA-registered practitioners.",
  keywords: [
    "corporate wellness South Africa",
    "employee health screening",
    "occupational health",
    "on-site nurses",
    "HPCSA practitioners",
    "wellness programme",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Corporate Healthy SA",
    title: "Corporate Healthy SA | Corporate Health & Wellness Programmes",
    description:
      "Leading corporate health and wellness partner in South Africa since 2007. Customised wellness programmes, health screening, and on-site occupational health services delivered by HPCSA-registered practitioners.",
    // PLACEHOLDER OG IMAGE: replace with a proper 1200x630 px branded image at public/og.png before launch.
    images: [{ url: "/logo.png", alt: "Corporate Healthy SA logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Healthy SA | Corporate Health & Wellness Programmes",
    description:
      "Leading corporate health and wellness partner in South Africa since 2007.",
    // PLACEHOLDER OG IMAGE: same replacement applies here.
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.png?v=3",
    shortcut: "/favicon.png?v=3",
    apple: "/favicon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-text-primary overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

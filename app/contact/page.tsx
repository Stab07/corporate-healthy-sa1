import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a wellness programme proposal for your company. Corporate Healthy SA delivers on-site health screening and corporate wellness services nationwide - we respond within 24 hours.",
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}

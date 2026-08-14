import { services as serviceCatalog } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export const siteConfig = {
  name: "Corporate Healthy SA",
  tagline: "Leading In Corporate Health and Wellness",
  description:
    "Leading corporate health and wellness partner in South Africa since 2007. Customised wellness programmes, health screening, and on-site occupational health services delivered by HPCSA-registered practitioners.",
  email: "bookings@corporatehealthysa.co.za",
  jobsEmail: "jobs@corporatehealthysa.co.za",
  phone: "+27 79 462 0820",
  phoneDirect: "+27 11 391 1076",
  phoneLink: "+27794620820",
  phoneDirectLink: "+27113911076",
  fax: "086 556 2018",
  whatsapp: "+27 79 462 0820",
  whatsappLink: "https://wa.me/27794620820",
  location: "P.O. Box 4724, Midrand, Gauteng, 1632",
  hours: "Mon\u2013Fri, 08:00\u201317:00 \u00b7 Sat by appointment",
  founded: 2007,
  hpcsa:
    "All health practitioners are registered with the Health Professions Council of South Africa (HPCSA)",
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Sentiments", href: "/sentiments" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "3500+", label: "Wellness Events" },
  { value: "13+", label: "Health Services" },
  { value: "2007", label: "Established" },
];

export const services = serviceCatalog.map((service) => ({
  title: service.title,
  description: service.shortDescription,
  icon: service.icon,
}));

export const employeesOptions = [
  { value: "1-50", label: "1\u201350 employees" },
  { value: "51-200", label: "51\u2013200 employees" },
  { value: "201-500", label: "201\u2013500 employees" },
  { value: "500+", label: "500+ employees" },
];

export { testimonials };

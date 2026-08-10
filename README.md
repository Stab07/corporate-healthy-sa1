# Corporate Healthy SA — Website

Corporate health and wellness provider website built with the Next.js App Router.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, Turbopack/Webpack)
- **Tailwind CSS v4** — design tokens via `@theme inline` in `app/globals.css`
- **Motion** (`motion/react`) for scroll/presence animations
- **lucide-react** + **react-icons (Pi)** for icons
- **ESLint** (flat config, `eslint.config.mjs`)

## Project Structure

```
app/            Routes, layout, metadata, sitemap, robots, 404/error pages
components/     UI primitives + page sections (layout/, home/, services/, about/, careers/, contact/)
data/           Structured content (services, careers, team, testimonials, clients, stats)
lib/            Site-wide constants (siteConfig, navLinks) + service icon resolver
public/images/  Asset checklist — see README inside
legacy/         Previous site source, kept for reference only (ignored by lint)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

| Variable               | Used for                                                                 |
| ---------------------- | ------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | `metadataBase`, Open Graph URLs, sitemap, robots.txt, JSON-LD structured data |
| `RESEND_API_KEY`       | Optional — contact form currently posts to Web3Forms; see `components/contact/ContactForm.tsx` |

## Deploying to Vercel

1. Push the repo to GitHub and import it in Vercel.
2. Set the environment variables above (use your production URL for `NEXT_PUBLIC_SITE_URL`).
3. Deploy — framework preset is auto-detected.

## Content To Do Before Launch

Placeholder / sample content is flagged with `PLACEHOLDER` comments throughout the code. Replace before going live:

- **Founding story** — replace illustrative copy in `components/about/StorySection.tsx` and the About page hero.
- **Team** — add real bios in `data/team.ts` and photos in `public/images/team/` (TeamSection falls back to name initials).
- **Client logos** — replace the generic industry wordmarks in `components/sections/LogoMarquee.tsx` with real client logos.
- **Testimonials** — `data/testimonials.ts` is sample copy; add real client quotes with names + companies.
- **Job openings** — populate `data/careers.ts`; the Careers page renders a "no openings" fallback until then.
- **Social links** — add Facebook/LinkedIn/Instagram URLs to the Footer (only WhatsApp is live).
- **Legal pages** — Privacy Policy and Terms pages are not built yet (footer links flagged); add routes under `app/` and link them.
- **OG image** — create `public/images/og.png` (1200×630); layout metadata currently points at `public/logo.png` as a placeholder.
- **Company details** — confirm phone, email, address, and the "40,000+ employees reached" figure in `siteConfig` (`lib/constants.ts`) and `ImpactBand`.
- **Contact form** — decide between keeping Web3Forms and wiring Resend (`app/api/contact/route.ts` + `RESEND_API_KEY`).

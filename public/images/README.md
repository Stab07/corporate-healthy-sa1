# Image Asset Checklist

This README is the handover checklist for the client. It lists every image expected
under `public/images/`, the ideal dimensions, and where each file is used. Replace
placeholders and re-export final assets before going live.

## Recommended folder structure (target)

```
public/images/
  hero/           # Page hero imagery
  services/       # Service detail page hero images
  team/           # Leadership / practitioner photos
  logos/          # Client logo wall / marquee
  og/             # Social sharing (og.png 1200x630)
```

Files are currently flat in `public/images/` (inherited from the legacy site).
Moving them into the structure above is recommended but was deferred to avoid
breaking legacy references — do it as part of the image handover.

## Files actually used by the site

| File | Ideal size | Used by |
| --- | --- | --- |
| `Massages.jpg` | 1920x1080 (16:9) | `/services/massages` hero (`data/services.ts`) |
| `Dietetics & Nutrition.jpg` | 1920x1080 (16:9) | `/services/dieticians` hero (`data/services.ts`) |
| `Orthotist.jpg` | 1920x1080 (16:9) | `/services/orthotist-prosthetist` hero (`data/services.ts`) |
| `Hearing & Audiology.jpg` | 1920x1080 (16:9) | `/services/audiologist` hero (`data/services.ts`) |
| `Blood Tests.jpg` | 1920x1080 (16:9) | `/services/occupational-nurses` hero (`data/services.ts`) |
| `Physiotherapy.jpg` | 1920x1080 (16:9) | `/services/physio-therapists` hero (`data/services.ts`) |
| `Psychology & Mental Health.jpg` | 1920x1080 (16:9) | `/services/psychologist` hero (`data/services.ts`) |
| `Biokinetics.jpg` | 1920x1080 (16:9) | `/services/biokineticist` hero (`data/services.ts`) |
| `Our Story (About).jpg` | 1200x1500 (4:5) | About page story image (`components/about/StorySection.tsx`) |

## Files needed but not yet present (create these)

| File | Ideal size | Used by | Status |
| --- | --- | --- | --- |
| `og.png` | 1200x630 | Open Graph / Twitter sharing | PLACEHOLDER - currently `public/logo.png` is used |
| `team/*.jpg` (4 photos) | 800x600 (4:3) | About page team cards (`components/about/TeamSection.tsx`) | PLACEHOLDER - initials shown until photos provided |
| `logos/*.svg|png` | 2:1 aspect, transparent bg | Home + Case Studies logo marquee (`components/sections/LogoMarquee.tsx`) | PLACEHOLDER - generic industry wordmarks shown until client logos + permission received |

## Legacy files NOT referenced by the current site

The following files exist in `public/images/` but are not used by any page in the
current build. Keep them for reference only, or delete during the asset handover:

- `Hero (Homepage).jpg`
- `Vision & Optometry.jpg`
- `Podiatrist.jpg`
- `General Practitioner Services.jpg`
- `Dental Health.jpg`
- `consultation.avif`
- `care-elderly.jpg`
- `logo.jpg`
- `team.jpg`

## Notes

- All in-app images use `next/image` with `fill` + `sizes` (or explicit
  dimensions) and descriptive `alt` text, so images are optimized and
  lazy-loaded automatically.
- Prefer JPEG (or WebP/AVIF exports) at ~80 quality for hero photos; use PNG/SVG
  for logos.
- Replace filename spaces before re-export (e.g. `Dietetics & Nutrition.jpg`
  → `services/dieticians.jpg`) and update `data/services.ts` paths accordingly.

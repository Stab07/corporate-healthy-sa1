export type JobType = "Full-time" | "Part-time" | "Contract";

export interface JobOpening {
  title: string;
  type: JobType;
  location: string;
  slug: string;
  summary: string;
}

// PLACEHOLDER OPENINGS: replace with live roles from the client.
// To show the "no current openings" fallback state instead, set `jobOpenings = []`.
export const jobOpenings: JobOpening[] = [
  {
    title: "Occupational Health Nurse",
    type: "Full-time",
    location: "Midrand, Gauteng",
    slug: "occupational-health-nurse",
    summary:
      "Deliver on-site health risk assessments, VCT, and medical surveillance at corporate client sites across Gauteng.",
  },
  {
    title: "Corporate Wellness Specialist",
    type: "Full-time",
    location: "Midrand, Gauteng",
    slug: "corporate-wellness-specialist",
    summary:
      "Design and coordinate corporate wellness days, health screening events, and engagement programmes for our client teams.",
  },
  {
    title: "General Practitioner",
    type: "Contract",
    location: "Nationwide",
    slug: "general-practitioner",
    summary:
      "Provide on-site general health consultations, fitness-for-work assessments, and referrals as part of corporate wellness programmes.",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials?: string;
  image?: string;
}

// PLACEHOLDER DATA: replace these entries with real leadership names, photos,
// credentials, and bios provided by the client before launch. Until a photo
// (image) is supplied, the team card renders an initials placeholder.
export const team: TeamMember[] = [
  {
    name: "Dr. Jane Placeholder",
    role: "Occupational Health Director",
    credentials: "MBChB, MMed (Occupational Medicine)",
    bio: "Leads our clinical standards and medical surveillance programmes across corporate client sites.",
    image: "",
  },
  {
    name: "Sarah Placeholder",
    role: "Head of Wellness Programmes",
    credentials: "Registered Dietician (RD)",
    bio: "Designs integrated wellness days and nutrition programmes for teams from SMEs to large corporates.",
    image: "",
  },
  {
    name: "Michael Placeholder",
    role: "Operations & Logistics Manager",
    credentials: "BSc (Nursing Science)",
    bio: "Coordinates nationwide on-site delivery so practitioners arrive on time, fully equipped, and ready.",
    image: "",
  },
  {
    name: "Dr. Thandi Placeholder",
    role: "Clinical Services Lead",
    credentials: "MPsych (Clinical Psychology)",
    bio: "Oversees employee assistance and psycho-social support services delivered by our psychology team.",
    image: "",
  },
];

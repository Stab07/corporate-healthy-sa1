export interface ClientLogo {
  name: string;
  src?: string;
}

export interface TrustSignal {
  value: string;
  label: string;
}

export const trustSignals: TrustSignal[] = [
  { value: "3500+", label: "Wellness events" },
  { value: "Est. 2007", label: "In operation since 2007" },
  { value: "100%", label: "HPCSA-registered practitioners" },
  { value: "40-10,000+", label: "Team sizes we support" },
];

export const clients: ClientLogo[] = [
  { name: "Client logos to be added here" },
];

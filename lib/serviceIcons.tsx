import {
  Activity,
  Apple,
  Bone,
  Brain,
  Dumbbell,
  Ear,
  Eye,
  Flower2,
  Footprints,
  HeartPulse,
  Leaf,
  PersonStanding,
  Smile,
  Stethoscope,
  Syringe,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { ComponentProps } from "react";

const serviceIconMap: Record<string, LucideIcon> = {
  Ear,
  Smile,
  Activity,
  Apple,
  Bone,
  Footprints,
  PersonStanding,
  Eye,
  Syringe,
  UserRound,
  Dumbbell,
  Leaf,
  Stethoscope,
  Flower2,
  Brain,
};

interface ServiceIconProps extends ComponentProps<LucideIcon> {
  name: string;
}

export function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const Icon = serviceIconMap[name] ?? HeartPulse;
  return <Icon {...props} />;
}

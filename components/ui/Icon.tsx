// @ts-nocheck
import {
  BatteryCharging,
  Bolt,
  CheckCircle2,
  Cpu,
  FileCheck2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  RotateCcw,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  SunMedium,
  Timer,
  UsersRound,
  Wrench,
} from "lucide-react";
import type { IconName } from "@/types";
import { cn } from "@/lib/utils";

const icons = {
  bolt: Bolt,
  cpu: Cpu,
  panel: SlidersHorizontal,
  settings: Settings2,
  repeat: RotateCcw,
  battery: BatteryCharging,
  sun: SunMedium,
  wrench: Wrench,
  shield: ShieldCheck,
  users: UsersRound,
  timer: Timer,
  check: CheckCircle2,
  file: FileCheck2,
  message: MessageSquare,
  map: MapPin,
  phone: Phone,
  mail: Mail,
} satisfies Record<IconName, React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>>;

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const LucideIcon = icons[name];
  return <LucideIcon aria-hidden className={cn("h-5 w-5", className)} />;
}

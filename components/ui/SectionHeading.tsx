import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Badge tone={inverse ? "dark" : "light"}>{eyebrow}</Badge>
      <h2 className={cn("mt-4 text-3xl font-bold tracking-normal sm:text-4xl", inverse ? "text-white" : "text-anthracite")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7 sm:text-lg", inverse ? "text-white/75" : "text-anthracite/70")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

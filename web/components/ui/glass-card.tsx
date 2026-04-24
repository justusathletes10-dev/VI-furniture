import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "strong" | "dark";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  interactive?: boolean;
}

const variantClass: Record<Variant, string> = {
  default: "glass",
  strong: "glass-strong",
  dark: "glass-dark",
};

export function GlassCard({
  className,
  variant = "default",
  interactive = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl fluid-transition",
        variantClass[variant],
        interactive &&
          "hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer",
        className,
      )}
      {...props}
    />
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

// Editorial restyle: this is now a no-op wrapper kept only for back-compat
// with any callers that still import it. No glass, no blur, no shadows.
export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong" | "dark";
  interactive?: boolean;
}

export function GlassCard({
  className,
  variant: _variant,
  interactive: _interactive,
  ...props
}: GlassCardProps) {
  return <div className={cn(className)} {...props} />;
}

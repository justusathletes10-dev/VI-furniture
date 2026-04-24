import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "cta" | "ghost" | "glass" | "outline";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] shadow-lg shadow-blue-500/20",
  cta: "bg-[var(--color-cta)] text-white hover:brightness-110 shadow-lg shadow-orange-500/30",
  ghost:
    "bg-transparent text-[var(--color-foreground)] hover:bg-white/40 backdrop-blur",
  glass:
    "glass text-[var(--color-foreground)] hover:bg-white/70",
  outline:
    "border border-white/60 bg-white/30 text-[var(--color-foreground)] backdrop-blur hover:bg-white/50",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide fluid-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50 disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

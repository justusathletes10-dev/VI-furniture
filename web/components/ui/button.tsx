import * as React from "react";
import { cn } from "@/lib/utils";

// Map legacy variant names to current ones for backwards compatibility.
type Variant = "text" | "outline";
type LegacyVariant = "primary" | "cta" | "ghost" | "glass";
type AnyVariant = Variant | LegacyVariant;
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AnyVariant;
  size?: Size;
  asChild?: boolean;
}

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-[11px]",
  md: "h-11 px-6 text-[11px]",
  lg: "h-12 px-8 text-[11px]",
};

function resolveVariant(v: AnyVariant): Variant {
  // Legacy aliases collapse to outline (the heaviest editorial CTA we offer).
  if (v === "text" || v === "ghost") return "text";
  return "outline";
}

const variantStyles: Record<Variant, string> = {
  text:
    "bg-transparent px-0 h-auto text-[#1A1A1A] uppercase tracking-[0.18em] underline underline-offset-4 hover:opacity-70",
  outline:
    "border border-[#1A1A1A] bg-transparent text-[#1A1A1A] uppercase tracking-[0.18em] hover:bg-[#1A1A1A] hover:text-[#F5F2EC]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "outline", size = "md", ...props }, ref) => {
    const v = resolveVariant(variant);
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 cursor-pointer font-medium transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A1A1A] disabled:opacity-50 disabled:pointer-events-none",
          v === "outline" && sizeStyles[size],
          variantStyles[v],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

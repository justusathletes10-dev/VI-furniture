"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

// Suppress known-harmless warnings from @paper-design/shaders-react (dev only).
// The library forwards internal props (backgroundColor, wireframe) onto the
// host element, which React flags. Functionally cosmetic — filter them.
if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  const w = window as unknown as { __viShaderSilenced?: boolean };
  if (!w.__viShaderSilenced) {
    const orig = console.error;
    console.error = (...args: unknown[]) => {
      const blob = args.map((a) => String(a ?? "")).join(" ");
      if (
        blob.includes("backgroundColor") ||
        blob.includes("non-boolean attribute") ||
        blob.includes("wireframe")
      ) {
        return;
      }
      orig(...args);
    };
    w.__viShaderSilenced = true;
  }
}

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[650px] w-full relative overflow-hidden rounded-3xl bg-[#1A1A1A]"
    >
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter
            id="glass-effect"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* VI palette: charcoal, warm clay, cream — editorial, not purple */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#1A1A1A", "#7C4A2C", "#F5F2EC", "#2A2520", "#4A3A30"]}
        speed={0.25}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay"
        colors={["#1A1A1A", "#F5F2EC", "#C9A48A", "#1A1A1A"]}
        speed={0.18}
      />

      {children}
    </div>
  );
}

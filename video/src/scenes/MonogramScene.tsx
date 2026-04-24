import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadCinzel } from "@remotion/google-fonts/Cinzel";
import { COLORS } from "../ViBrandIntro";

const { fontFamily: cinzelFamily } = loadCinzel();

export const MonogramScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const reveal = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 80, mass: 1 },
  });

  const blur = interpolate(reveal, [0, 1], [24, 0]);
  const scale = interpolate(reveal, [0, 1], [0.85, 1]);
  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Gold shimmer sweep across the monogram
  const shimmerProgress = interpolate(frame, [15, 55], [-1.2, 1.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.warmBackground,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Soft radial glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 50%, ${COLORS.gold}22 0%, transparent 55%)`,
          opacity,
        }}
      />

      <div
        style={{
          position: "relative",
          filter: `blur(${blur}px)`,
          transform: `scale(${scale})`,
          opacity,
          fontFamily: cinzelFamily,
          fontSize: 320,
          fontWeight: 600,
          letterSpacing: 12,
          color: COLORS.text,
          backgroundImage: `linear-gradient(110deg, ${COLORS.text} 0%, ${COLORS.gold} 45%, ${COLORS.text} 90%)`,
          backgroundSize: "300% 100%",
          backgroundPositionX: `${shimmerProgress * 100}%`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          padding: "0 40px",
        }}
      >
        VI
      </div>

      {/* Thin gold underline */}
      <div
        style={{
          marginTop: 24,
          width: interpolate(reveal, [0, 1], [0, 280]),
          height: 2,
          backgroundColor: COLORS.gold,
          opacity,
          borderRadius: 2,
        }}
      />
    </AbsoluteFill>
  );
};

import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadCinzel } from "@remotion/google-fonts/Cinzel";
import { loadFont as loadJosefin } from "@remotion/google-fonts/JosefinSans";
import { COLORS } from "../ViBrandIntro";

const { fontFamily: cinzelFamily } = loadCinzel();
const { fontFamily: josefinFamily } = loadJosefin();

export const LogoOutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoEntry = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 90, mass: 1 },
  });
  const logoOpacity = interpolate(logoEntry, [0, 1], [0, 1]);
  const logoScale = interpolate(logoEntry, [0, 1], [0.92, 1]);

  const urlOpacity = interpolate(frame, [18, 32], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Underline draw 0 -> 380px between frame 22 and frame 50
  const underlineWidth = interpolate(frame, [22, 50], [0, 420], {
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
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 45%, ${COLORS.gold}1A 0%, transparent 60%)`,
        }}
      />

      <div
        style={{
          position: "relative",
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          fontFamily: cinzelFamily,
          fontSize: 160,
          fontWeight: 600,
          letterSpacing: 10,
          color: COLORS.text,
          backgroundImage: `linear-gradient(120deg, ${COLORS.text} 0%, ${COLORS.gold} 60%, ${COLORS.text} 100%)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        VI
      </div>

      <div
        style={{
          position: "relative",
          marginTop: 16,
          fontFamily: cinzelFamily,
          fontSize: 32,
          letterSpacing: 14,
          textTransform: "uppercase",
          color: COLORS.text,
          opacity: logoOpacity,
        }}
      >
        Furniture Store
      </div>

      {/* URL */}
      <div
        style={{
          position: "relative",
          marginTop: 36,
          fontFamily: josefinFamily,
          fontSize: 30,
          letterSpacing: 8,
          color: COLORS.primary,
          opacity: urlOpacity,
        }}
      >
        vifurniturestore.com
      </div>

      {/* Animated gold underline */}
      <div
        style={{
          position: "relative",
          marginTop: 14,
          width: underlineWidth,
          height: 2,
          backgroundColor: COLORS.gold,
          borderRadius: 2,
          boxShadow: `0 0 12px ${COLORS.gold}80`,
        }}
      />
    </AbsoluteFill>
  );
};

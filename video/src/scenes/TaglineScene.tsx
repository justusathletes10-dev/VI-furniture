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

const TAGLINE = ["Crafted", "for", "the", "Modern", "Vietnamese", "Home"];

export const TaglineScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgFade = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.warmBackground,
        justifyContent: "center",
        alignItems: "center",
        padding: 120,
      }}
    >
      {/* Liquid glass backdrop card */}
      <AbsoluteFill
        style={{
          opacity: bgFade,
          background: `linear-gradient(135deg, ${COLORS.background} 0%, #EFE9DD 100%)`,
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 28,
          maxWidth: 1500,
        }}
      >
        {TAGLINE.map((word, i) => {
          const wordEntry = spring({
            frame: frame - i * 6,
            fps,
            config: { damping: 14, stiffness: 110, mass: 0.9 },
          });
          const translateY = interpolate(wordEntry, [0, 1], [60, 0]);
          const opacity = interpolate(wordEntry, [0, 1], [0, 1]);
          const isAccent = word === "Vietnamese";

          return (
            <span
              key={`${word}-${i}`}
              style={{
                display: "inline-block",
                transform: `translateY(${translateY}px)`,
                opacity,
                fontFamily: cinzelFamily,
                fontSize: 96,
                fontWeight: 500,
                letterSpacing: 4,
                color: isAccent ? COLORS.gold : COLORS.text,
                lineHeight: 1.1,
              }}
            >
              {word}
            </span>
          );
        })}
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "relative",
          marginTop: 48,
          fontFamily: josefinFamily,
          fontSize: 26,
          letterSpacing: 12,
          textTransform: "uppercase",
          color: COLORS.text,
          opacity: interpolate(frame, [55, 75], [0, 0.7], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        VI Furniture Store
      </div>
    </AbsoluteFill>
  );
};

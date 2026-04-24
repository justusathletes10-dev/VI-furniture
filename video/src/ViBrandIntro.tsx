import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { MonogramScene } from "./scenes/MonogramScene";
import { ProductGalleryScene } from "./scenes/ProductGalleryScene";
import { TaglineScene } from "./scenes/TaglineScene";
import { LogoOutroScene } from "./scenes/LogoOutroScene";

export const COLORS = {
  primary: "#2563EB",
  gold: "#C9A96E",
  background: "#F8FAFC",
  warmBackground: "#FBF7F1",
  text: "#1E293B",
};

export const ViBrandIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <Series>
        <Series.Sequence durationInFrames={60}>
          <MonogramScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <ProductGalleryScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <TaglineScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={60}>
          <LogoOutroScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

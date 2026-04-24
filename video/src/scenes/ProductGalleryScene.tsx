import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  useCurrentFrame,
} from "remotion";
import { COLORS } from "../ViBrandIntro";

const PRODUCTS = [
  {
    label: "Sofa",
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80",
  },
  {
    label: "Dining Table",
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1920&q=80",
  },
  {
    label: "Bed",
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1920&q=80",
  },
];

const SHOT_DURATION = 30; // 1s per shot, 90 frames total

const ProductShot: React.FC<{ src: string; label: string }> = ({
  src,
  label,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 8, SHOT_DURATION - 8, SHOT_DURATION],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" }
  );

  // Ken Burns: gentle zoom in
  const scale = interpolate(frame, [0, SHOT_DURATION], [1.05, 1.18]);
  const translateX = interpolate(frame, [0, SHOT_DURATION], [-10, 10]);

  return (
    <AbsoluteFill style={{ opacity, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          transform: `scale(${scale}) translateX(${translateX}px)`,
        }}
      >
        <Img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Liquid glass label overlay */}
      <div
        style={{
          position: "absolute",
          left: 80,
          bottom: 80,
          padding: "18px 36px",
          backgroundColor: "rgba(248, 250, 252, 0.18)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${COLORS.gold}55`,
          borderRadius: 16,
          color: "#FFFFFF",
          fontFamily: "Josefin Sans, sans-serif",
          fontSize: 28,
          letterSpacing: 6,
          textTransform: "uppercase",
          textShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}
      >
        {label}
      </div>

      {/* Subtle vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};

export const ProductGalleryScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.text }}>
      {PRODUCTS.map((product, i) => (
        <Sequence
          key={product.label}
          from={i * SHOT_DURATION}
          durationInFrames={SHOT_DURATION}
        >
          <ProductShot src={product.src} label={product.label} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

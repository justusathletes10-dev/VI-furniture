"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { categoryRows } from "@/lib/category-rows";

export function CategoriesCursorFollow() {
  const [hovered, setHovered] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 140, damping: 22, mass: 0.6 });
  const y = useSpring(mouseY, { stiffness: 140, damping: 22, mass: 0.6 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const active = categoryRows.find((r) => r.id === hovered);

  return (
    <section
      id="categories-b"
      className="relative bg-[#F5F2EC] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-2 text-[10px] tracking-[0.24em] uppercase text-[#7C4A2C]">
          Variant B — Cursor Follow
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-[#E4DFD6] pb-10">
          <div>
            <p className="eyebrow">The Collection</p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.05] tracking-tight">
              Five quiet categories.
            </h2>
          </div>
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] cursor-pointer hover:underline underline-offset-4"
          >
            View all →
          </a>
        </div>

        <div
          ref={containerRef}
          onMouseMove={onMove}
          onMouseLeave={() => setHovered(null)}
          className="relative mt-8"
        >
          <ul className="divide-y divide-[#E4DFD6]">
            {categoryRows.map((row) => (
              <li key={row.id}>
                <a
                  href={`#${row.id}`}
                  onMouseEnter={() => setHovered(row.id)}
                  className="block py-8 md:py-12 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-6">
                    <span
                      className="font-serif italic font-normal tracking-tight leading-[0.95] transition-colors duration-300"
                      style={{
                        fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                        color:
                          hovered === row.id
                            ? "#7C4A2C"
                            : hovered && hovered !== row.id
                            ? "#C7C1B5"
                            : "#1A1A1A",
                      }}
                    >
                      {row.name}
                    </span>
                    <span className="text-[11px] tracking-[0.24em] uppercase text-[#6B6660]">
                      0{categoryRows.indexOf(row) + 1}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* Cursor-following image */}
          <AnimatePresence>
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute top-0 left-0 z-20"
                style={{
                  x,
                  y,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              >
                <div className="relative h-72 w-56 overflow-hidden shadow-2xl">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

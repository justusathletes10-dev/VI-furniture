"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { categoryRows } from "@/lib/category-rows";

export function CategoriesScrollPin() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = categoryRows.length;

  return (
    <section
      id="categories-c"
      className="relative bg-[#F5F2EC]"
    >
      <div className="px-6 pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 text-[10px] tracking-[0.24em] uppercase text-[#7C4A2C]">
            Variant C — Scroll Pin
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-[#E4DFD6] pb-10">
            <div>
              <p className="eyebrow">The Collection</p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.05] tracking-tight">
                Five quiet categories.
              </h2>
            </div>
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#6B6660]">
              Scroll to reveal
            </span>
          </div>
        </div>
      </div>

      {/* Long scroll container — pinned inner renders each category as progress advances */}
      <div ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Stacked images with fade/zoom per segment */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E4DFD6]">
              {categoryRows.map((row, i) => {
                const start = i / total;
                const end = (i + 1) / total;
                const mid = start + (end - start) * 0.5;

                /* eslint-disable react-hooks/rules-of-hooks */
                const opacity = useTransform(
                  scrollYProgress,
                  [Math.max(0, start - 0.05), start, end - 0.02, end + 0.05],
                  [0, 1, 1, 0],
                );
                const scale = useTransform(
                  scrollYProgress,
                  [start, mid, end],
                  [1.08, 1, 0.96],
                );
                /* eslint-enable react-hooks/rules-of-hooks */

                return (
                  <motion.div
                    key={row.id}
                    style={{ opacity, scale }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={row.image}
                      alt={row.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Copy column */}
            <div className="relative min-h-[360px]">
              {categoryRows.map((row, i) => {
                const start = i / total;
                const end = (i + 1) / total;
                /* eslint-disable react-hooks/rules-of-hooks */
                const opacity = useTransform(
                  scrollYProgress,
                  [Math.max(0, start - 0.03), start, end - 0.02, end + 0.03],
                  [0, 1, 1, 0],
                );
                const translateY = useTransform(
                  scrollYProgress,
                  [start, (start + end) / 2, end],
                  [30, 0, -30],
                );
                /* eslint-enable react-hooks/rules-of-hooks */

                return (
                  <motion.div
                    key={row.id}
                    style={{ opacity, y: translateY }}
                    className="absolute inset-0"
                  >
                    <p className="text-[11px] tracking-[0.24em] uppercase text-[#6B6660] mb-4">
                      0{i + 1} &nbsp;/&nbsp; {String(total).padStart(2, "0")}
                    </p>
                    <h3
                      className="font-display font-medium tracking-tight leading-[0.95] text-[#1A1A1A]"
                      style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
                    >
                      {row.name}
                    </h3>
                    <p className="mt-6 text-[15px] leading-[1.8] text-[#6B6660] max-w-md">
                      {row.description}
                    </p>
                    <a
                      href={`#${row.id}`}
                      className="mt-8 inline-block text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A] hover:underline underline-offset-4 cursor-pointer"
                    >
                      Explore {row.name.toLowerCase()} →
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

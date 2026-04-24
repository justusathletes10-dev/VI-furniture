"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { categoryRows } from "@/lib/category-rows";

export function CategoriesHoverPreview() {
  const [hovered, setHovered] = useState<string | null>(null);
  const active =
    categoryRows.find((r) => r.id === hovered) ?? categoryRows[0];

  return (
    <section
      id="categories-a"
      className="relative bg-[#F5F2EC] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 text-[10px] tracking-[0.24em] uppercase text-[#7C4A2C]">
          Variant A — Hover Preview
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_minmax(0,420px)] gap-12 md:gap-20">
          {/* List */}
          <ul
            className="divide-y divide-[#E4DFD6]"
            onMouseLeave={() => setHovered(null)}
          >
            {categoryRows.map((row) => {
              const isActive = hovered === row.id;
              return (
                <li key={row.id}>
                  <a
                    href={`#${row.id}`}
                    onMouseEnter={() => setHovered(row.id)}
                    className="block py-7 md:py-9 cursor-pointer transition-opacity duration-300"
                    style={{
                      opacity: hovered && !isActive ? 0.35 : 1,
                    }}
                  >
                    <div className="flex items-baseline justify-between gap-6">
                      <span
                        className={`font-display text-[34px] md:text-[52px] font-medium tracking-tight leading-none transition-transform duration-500 ease-out ${
                          isActive ? "translate-x-2 text-[#7C4A2C]" : "text-[#1A1A1A]"
                        }`}
                      >
                        {row.name}
                      </span>
                      <span className="text-[11px] tracking-[0.2em] uppercase text-[#6B6660] hidden md:inline">
                        0{categoryRows.indexOf(row) + 1}
                      </span>
                    </div>
                    <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-[#6B6660]">
                      {row.description}
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Fixed preview frame */}
          <div className="relative hidden md:block">
            <div className="sticky top-24 aspect-[4/5] w-full overflow-hidden bg-[#E4DFD6]">
              <AnimatePresence mode="sync">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    sizes="(max-width: 768px) 0px, 420px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white mix-blend-difference">
                <span className="font-display text-lg tracking-tight">
                  {active.name}
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase">
                  View →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

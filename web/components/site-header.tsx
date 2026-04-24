"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Collection", href: "#featured" },
  { label: "Lighting", href: "#categories" },
  { label: "Seating", href: "#categories" },
  { label: "Tables", href: "#categories" },
  { label: "Journal", href: "#testimonials" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const cartCount = 0;

  const linkClass =
    "text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] cursor-pointer hover:underline underline-offset-4";

  return (
    <header className="relative z-50 w-full border-b border-[#E4DFD6] bg-[#F5F2EC]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-[15px] font-medium tracking-[0.24em] text-[#1A1A1A] cursor-pointer"
        >
          VI
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className="hidden sm:inline-flex items-center text-[#1A1A1A] cursor-pointer hover:opacity-70"
          >
            <Search strokeWidth={1.5} className="h-[18px] w-[18px]" />
          </button>
          <button
            aria-label="Account"
            className="hidden sm:inline-flex items-center text-[#1A1A1A] cursor-pointer hover:opacity-70"
          >
            <User strokeWidth={1.5} className="h-[18px] w-[18px]" />
          </button>
          <button
            aria-label="Cart"
            className="inline-flex items-center gap-1.5 text-[#1A1A1A] cursor-pointer hover:opacity-70"
          >
            <ShoppingBag strokeWidth={1.5} className="h-[18px] w-[18px]" />
            <span className="text-[11px] uppercase tracking-[0.18em]">
              ({cartCount})
            </span>
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center text-[#1A1A1A] cursor-pointer hover:opacity-70"
          >
            {open ? (
              <X strokeWidth={1.5} className="h-[18px] w-[18px]" />
            ) : (
              <Menu strokeWidth={1.5} className="h-[18px] w-[18px]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-[#E4DFD6] transition-[max-height] duration-300",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="mx-auto max-w-7xl px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

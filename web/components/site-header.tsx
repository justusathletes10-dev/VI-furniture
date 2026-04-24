"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Shop", href: "#categories" },
  { label: "Collections", href: "#featured" },
  { label: "Craftsmanship", href: "#why" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const cartCount = 3;

  return (
    <header className="fixed top-4 left-4 right-4 z-50 fluid-transition">
      <nav className="glass-strong mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gold)] text-white font-display text-lg font-bold">
            VI
          </div>
          <span className="font-display text-lg font-semibold tracking-widest hidden sm:inline">
            FURNITURE
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-foreground)]/80 fluid-transition hover:bg-white/60 hover:text-[var(--color-primary)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            aria-label="Search"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full fluid-transition hover:bg-white/60"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Wishlist"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full fluid-transition hover:bg-white/60"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            aria-label="Account"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full fluid-transition hover:bg-white/60"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full fluid-transition hover:bg-white/60"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-cta)] text-[10px] font-bold text-white shadow-md">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full fluid-transition hover:bg-white/60"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "lg:hidden mx-auto mt-2 max-w-7xl overflow-hidden fluid-transition",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="glass-strong rounded-3xl p-3 space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium fluid-transition hover:bg-white/60"
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

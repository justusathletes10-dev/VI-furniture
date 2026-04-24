# VI Furniture — Liquid Glass Storefront

A Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 redesign for **VI Furniture Store**, a Vietnamese luxury furniture brand. The UI uses a Liquid Glass design language: translucent surfaces, backdrop blur, and smooth fluid transitions.

## Stack

- **Next.js 15** (App Router, RSC by default)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (using `@tailwindcss/postcss`)
- **lucide-react** for icons
- **next/font** for Cinzel (display) + Josefin Sans (body)
- Imagery via Unsplash (`next/image` + `remotePatterns`)

## Design Tokens

| Token       | Value     |
| ----------- | --------- |
| Primary     | `#2563EB` |
| Secondary   | `#3B82F6` |
| CTA         | `#F97316` |
| Background  | `#F8FAFC` |
| Text        | `#1E293B` |
| Gold accent | `#C9A96E` |

## Getting Started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Structure

```
web/
  app/
    layout.tsx        # fonts + metadata + root html
    page.tsx          # home composition
    globals.css       # Tailwind v4 + design tokens
  components/
    site-header.tsx   # floating glass navbar
    site-footer.tsx
    sections/         # hero, categories, featured-products, why-vi, testimonials, newsletter
    ui/               # button, glass-card
  lib/
    utils.ts          # cn helper
    data.ts           # mock products / categories / testimonials
```

## Notes

- All product imagery is hot-linked from Unsplash for prototyping. Replace with real assets before production.
- Prices are formatted in VND (e.g. `₫12.500.000`).
- Server components by default; only interactive bits are `"use client"`.

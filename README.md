# VI Furniture Store — Redesign

Multi-deliverable redesign of [vifurniturestore.com](https://vifurniturestore.com/) — a Lebanese luxury furniture e-commerce brand.

## Design System

- **Style:** Liquid Glass — translucent surfaces, backdrop blur, smooth fluid transitions
- **Palette:** Primary `#2563EB`, CTA `#F97316`, Gold accent `#C9A96E`, Background `#F8FAFC`, Text `#1E293B`
- **Typography:** [Cinzel](https://fonts.google.com/specimen/Cinzel) (display) + [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans) (body)
- **Pattern:** Hero → Categories → Featured Products → Why VI → Testimonials → Newsletter → Footer

## Deliverables

| Folder | Stack | Purpose |
|--------|-------|---------|
| [`landing/`](./landing) | HTML + Tailwind CDN | Single-file polished landing page, no build step |
| [`web/`](./web) | Next.js 15 + React 19 + Tailwind v4 | Production-ready app with App Router |
| [`video/`](./video) | Remotion 4 | 10-second cinematic brand intro |

## Quick Start

```bash
# Landing — open directly in browser
open landing/index.html

# Web app
cd web && npm install && npm run dev

# Video preview
cd video && npm install && npm start
```

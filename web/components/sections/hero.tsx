import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pt-28 sm:pt-32">
      <div className="aurora absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] lg:grid-cols-12 lg:gap-6">
        {/* Copy */}
        <div className="relative z-10 flex flex-col justify-center lg:col-span-6 lg:py-20">
          <div className="glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-gold)]" />
            Bộ Sưu Tập Mới · Spring 2026
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Crafted in
            <br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-gold)] bg-clip-text text-transparent">
              Vietnam,
            </span>
            <br />
            Made to Last.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-foreground)]/70 sm:text-lg">
            Đồ nội thất thủ công cao cấp — luxury Vietnamese furniture
            hand-built by master artisans from Hanoi to Saigon. Timeless design,
            uncompromising materials, lifetime craftsmanship.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="cta" size="lg">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="glass" size="lg">
              <Play className="h-4 w-4" />
              Watch the Story
            </Button>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              { k: "25+", v: "Years of Craft" },
              { k: "120k", v: "Happy Homes" },
              { k: "100%", v: "Made in VN" },
            ].map((s) => (
              <div
                key={s.v}
                className="glass rounded-2xl px-4 py-3 text-center"
              >
                <div className="font-display text-2xl font-semibold text-[var(--color-primary)]">
                  {s.k}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[var(--color-foreground)]/60">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80"
              alt="Featured Vietnamese luxury living room"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Floating glass info card */}
            <div className="glass-strong absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl p-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                  Featured
                </p>
                <p className="font-display text-base font-semibold">
                  Hanoi Velvet Sofa
                </p>
                <p className="text-xs text-[var(--color-foreground)]/60">
                  ₫28.500.000
                </p>
              </div>
              <Button variant="primary" size="sm">
                View
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>

            {/* Floating glass badge */}
            <div className="glass-strong absolute top-6 right-6 rounded-full px-4 py-2 text-xs font-semibold">
              ⭐ 4.9 / 5 · 2,400+ reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

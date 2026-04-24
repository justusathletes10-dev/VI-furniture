import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-4 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Khách Hàng Nói Gì
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Loved Across Vietnam
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <GlassCard key={t.id} variant="strong" className="relative p-7">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-[var(--color-primary)]/10" />

              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]"
                  />
                ))}
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-foreground)]/80">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/40 pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/70">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-[var(--color-foreground)]/60">
                    {t.role}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

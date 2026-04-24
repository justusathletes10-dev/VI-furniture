import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { featuredProducts } from "@/lib/data";
import { formatVND } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  return (
    <section id="featured" className="relative px-4 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
              Sản Phẩm Nổi Bật
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Featured Pieces
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--color-foreground)]/60">
            Curated selections from our master artisans — each piece signed,
            numbered, and built to outlast trends.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <article
              key={p.id}
              className="group glass overflow-hidden rounded-3xl fluid-transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover fluid-transition-slow group-hover:scale-110"
                />
                {p.badge && (
                  <span className="glass-strong absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    {p.badge}
                  </span>
                )}
                <button
                  aria-label="Add to wishlist"
                  className="glass-strong absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full fluid-transition hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4">
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/50">
                  {p.category}
                </p>
                <h3 className="mt-1 font-display text-base font-semibold leading-tight">
                  {p.name}
                </h3>
                {p.vietnameseName && (
                  <p className="text-xs italic text-[var(--color-foreground)]/50">
                    {p.vietnameseName}
                  </p>
                )}

                <div className="mt-3 flex items-end justify-between gap-2">
                  <div>
                    <div className="font-display text-lg font-semibold text-[var(--color-primary)]">
                      {formatVND(p.price)}
                    </div>
                    {p.originalPrice && (
                      <div className="text-xs text-[var(--color-foreground)]/40 line-through">
                        {formatVND(p.originalPrice)}
                      </div>
                    )}
                  </div>
                  <Button variant="cta" size="sm" aria-label="Add to cart">
                    <ShoppingBag className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

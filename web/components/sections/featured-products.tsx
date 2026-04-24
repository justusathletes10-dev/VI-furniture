import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/lib/data";
import { formatUSD } from "@/lib/utils";

const badges: Record<string, string> = {
  "Best Seller": "Atelier Edition",
  New: "New",
  Artisan: "Handmade",
};

export function FeaturedProducts() {
  // Use first 4 as hero pieces
  const hero = featuredProducts.slice(0, 4);

  return (
    <section
      id="featured"
      className="relative bg-[#F5F2EC] px-6 py-24 md:py-32 border-t border-[#E4DFD6]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Currently in the Atelier</p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.05] tracking-tight max-w-xl">
              Four pieces we are making this season.
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-[#6B6660]">
            Each object is signed, numbered, and made to order in our
            Batroun atelier.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
          {hero.map((p, idx) => {
            // Asymmetric: item 0 spans 7, item 1 spans 5, item 2 spans 5, item 3 spans 7
            const span =
              idx === 0 ? "md:col-span-7" :
              idx === 1 ? "md:col-span-5" :
              idx === 2 ? "md:col-span-5" :
              "md:col-span-7";

            const tag = p.badge ? badges[p.badge] ?? p.badge : null;

            return (
              <article key={p.id} className={`group ${span}`}>
                <Link
                  href="#"
                  className="block cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-white">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-5 border-b border-[#E4DFD6] pb-5">
                    {tag && <p className="eyebrow">{tag}</p>}
                    <div className="mt-2 flex items-baseline justify-between gap-6">
                      <div>
                        <h3 className="font-display text-[18px] font-medium leading-tight tracking-tight text-[#1A1A1A] group-hover:underline underline-offset-4">
                          {p.name}
                        </h3>
                        <p className="mt-1 text-[12px] text-[#6B6660]">
                          {p.subtitle} · {p.category}
                        </p>
                      </div>
                      <p className="font-display text-[14px] text-[#1A1A1A] whitespace-nowrap">
                        {formatUSD(p.price)}
                      </p>
                    </div>

                    <div className="mt-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] underline underline-offset-4">
                        View
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

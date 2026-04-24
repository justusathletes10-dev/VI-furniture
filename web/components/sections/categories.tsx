import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/data";

export function Categories() {
  return (
    <section id="categories" className="relative px-4 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
              Danh Mục · Browse
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Shop by Category
            </h2>
          </div>
          <Link
            href="#"
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium fluid-transition hover:bg-white/70"
          >
            View all categories
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`#${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl fluid-transition-slow hover:-translate-y-1"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover fluid-transition-slow group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="glass-strong rounded-2xl px-3 py-2.5">
                  <p className="font-display text-sm font-semibold leading-tight">
                    {cat.name}
                  </p>
                  <p className="text-[10px] text-[var(--color-foreground)]/60">
                    {cat.vietnameseName} · {cat.count}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

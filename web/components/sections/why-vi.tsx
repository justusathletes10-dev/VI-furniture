import { Hammer, Truck, Leaf, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const features = [
  {
    icon: Hammer,
    title: "Master Craftsmanship",
    vietnamese: "Tay nghề bậc thầy",
    desc: "Hand-built by third-generation Vietnamese artisans using time-honored joinery techniques.",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    vietnamese: "Vật liệu bền vững",
    desc: "FSC-certified hardwoods, low-VOC finishes, and locally sourced natural fibers.",
  },
  {
    icon: Truck,
    title: "White-Glove Delivery",
    vietnamese: "Giao hàng tận nhà",
    desc: "Free nationwide delivery, in-room placement, and full assembly by trained specialists.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    vietnamese: "Bảo hành trọn đời",
    desc: "Every frame backed by a lifetime structural warranty. We stand behind every piece, forever.",
  },
];

export function WhyVi() {
  return (
    <section id="why" className="relative px-4 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Tại Sao Chọn VI
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Why VI Furniture
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--color-foreground)]/60 sm:text-base">
            Four pillars that have defined our brand since 2001 — and shaped
            over 120,000 Vietnamese homes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <GlassCard
              key={f.title}
              variant="strong"
              interactive
              className="p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-lg shadow-blue-500/30">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">
                {f.title}
              </h3>
              <p className="mt-1 text-xs italic text-[var(--color-gold)]">
                {f.vietnamese}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-foreground)]/70">
                {f.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

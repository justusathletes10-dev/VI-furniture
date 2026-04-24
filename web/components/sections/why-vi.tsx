import { Hammer, Leaf, Truck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Hammer,
    title: "Made by hand.",
    desc: "Joinery cut, sanded and finished by third-generation makers in Batroun.",
  },
  {
    icon: Leaf,
    title: "Slow materials.",
    desc: "FSC-certified hardwoods, low-VOC finishes, locally pressed cane and clay.",
  },
  {
    icon: Truck,
    title: "Quietly delivered.",
    desc: "White-glove placement and assembly — no boxes, no hurry, no fuss.",
  },
  {
    icon: ShieldCheck,
    title: "Kept for life.",
    desc: "Lifetime structural guarantee. We repair what we make, for as long as you have it.",
  },
];

export function WhyVi() {
  return (
    <section
      id="why"
      className="relative bg-[#F5F2EC] px-6 py-24 md:py-32 border-t border-[#E4DFD6]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow">The Studio</p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.05] tracking-tight">
            An object you live with for a lifetime.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 md:divide-x md:divide-[#E4DFD6]">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`py-8 md:py-0 md:px-8 ${
                idx === 0 ? "md:pl-0" : ""
              } ${
                idx === features.length - 1 ? "md:pr-0" : ""
              } ${
                idx > 0 ? "border-t border-[#E4DFD6] md:border-t-0" : ""
              }`}
            >
              <f.icon
                strokeWidth={1.5}
                className="h-5 w-5 text-[#1A1A1A]"
              />
              <h3 className="mt-5 font-display text-[16px] font-medium leading-snug tracking-tight text-[#1A1A1A]">
                {f.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#6B6660]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

type Row = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const rows: Row[] = [
  {
    id: "seating",
    name: "Seating",
    description:
      "Low lounge chairs, bouclé banquettes and slumped armchairs for the rooms you live in.",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tables",
    name: "Tables",
    description:
      "Burl veneer, travertine, hand-turned oak — surfaces that hold a room together.",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "lighting",
    name: "Lighting",
    description:
      "Paper shades, slumped glass, warm brass. Light as a quiet material.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "storage",
    name: "Storage",
    description:
      "Cabinets and sideboards — softened geometry in oak, lacquered ash, woven cane.",
    image:
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "objects",
    name: "Objects",
    description:
      "Ceramic vessels, rough-hewn stone and small things made slowly.",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",
  },
];

export function Categories() {
  return (
    <section
      id="categories"
      className="relative bg-[#F5F2EC] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">The Collection</p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.05] tracking-tight">
              Five quiet categories.
            </h2>
          </div>
          <Link
            href="#"
            className="text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] cursor-pointer hover:underline underline-offset-4"
          >
            View all →
          </Link>
        </div>

        <div className="mt-16 border-t border-[#E4DFD6]">
          {rows.map((row) => (
            <Link
              key={row.id}
              href={`#${row.id}`}
              className="group grid grid-cols-[1fr_auto] items-center gap-6 border-b border-[#E4DFD6] py-6 md:grid-cols-[auto_1fr_auto] md:gap-12 md:py-8 cursor-pointer"
            >
              <h3 className="font-display text-[22px] font-medium tracking-tight text-[#1A1A1A] md:text-[28px] md:min-w-[220px] group-hover:underline underline-offset-[6px]">
                {row.name}
              </h3>
              <p className="hidden md:block max-w-xl text-[13px] leading-relaxed text-[#6B6660]">
                {row.description}
              </p>
              <div className="relative aspect-square w-20 overflow-hidden md:w-24">
                <Image
                  src={row.image}
                  alt={row.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

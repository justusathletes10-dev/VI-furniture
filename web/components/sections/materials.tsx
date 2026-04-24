import Image from "next/image";

export function Materials() {
  return (
    <section
      id="materials"
      className="bg-[#0E0E0F] text-white py-24 md:py-36 px-6 md:px-12"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Left: detail image */}
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1592078615290-033ee584e267?w=1400&q=85&auto=format&fit=crop"
            alt="A walnut drawer corner with a brushed brass pull, photographed in low light to show the grain and the precision of the joinery."
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right: copy */}
        <div className="max-w-xl">
          <h2
            className="font-serif font-normal leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4vw, 3.75rem)" }}
          >
            The Vocabulary
            <br />
            of Materials.
          </h2>

          <div className="mt-8 space-y-5 text-white/70 text-[15px] leading-[1.85] font-light">
            <p>
              We do not cover or conceal. A brass joint is left to oxidise and
              tell the story of its environment. Walnut is hand-rubbed with
              natural oils, allowing the grain to breathe and deepen over
              decades.
            </p>
            <p>
              True luxury is found in the integrity of the material and the
              precision of the cut. There is no imitation here, only truth.
            </p>
          </div>

          <div className="mt-10 border-t border-white/15 pt-8 grid grid-cols-2 gap-8 max-w-md">
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9A48A] font-medium">
                Wood
              </p>
              <p className="mt-3 font-serif text-2xl text-white">
                Cedar of Lebanon
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9A48A] font-medium">
                Metal
              </p>
              <p className="mt-3 font-serif text-2xl text-white">
                Brushed Brass
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

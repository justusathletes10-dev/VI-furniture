import { ShaderBackground } from "@/components/ui/hero-shader";

export function Hero() {
  return (
    <section className="relative w-full bg-[#F5F2EC] overflow-hidden min-h-[700px] md:h-screen">
      {/* Shader panel — stacked on top for mobile, right-side with diagonal cut on desktop */}
      <div className="relative md:absolute md:inset-y-0 md:right-0 w-full md:w-[70%] h-[52vh] md:h-full md:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] md:[-webkit-clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
        <ShaderBackground>{null}</ShaderBackground>
      </div>

      {/* VI wordmark — sits on cream, top-left */}
      <a
        href="/"
        className="absolute top-6 left-6 md:top-8 md:left-10 z-30 font-display text-lg tracking-[0.18em] uppercase font-medium text-[#1A1A1A] cursor-pointer"
      >
        VI
      </a>

      {/* Nav + utility icons — top-right, on shader */}
      <header className="absolute top-0 right-0 z-30 flex items-center gap-6 md:gap-8 px-6 md:px-10 py-6">
        <nav className="hidden lg:flex items-center gap-7">
          {["Collection", "Lighting", "Seating", "Tables", "Journal"].map(
            (label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-white/80 hover:text-white text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 cursor-pointer hover:underline underline-offset-4"
              >
                {label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-5 text-white/80">
          <button
            type="button"
            aria-label="Search"
            className="cursor-pointer hover:text-white transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <a
            href="#account"
            aria-label="Account"
            className="cursor-pointer hover:text-white transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
          </a>
          <a
            href="#cart"
            className="cursor-pointer hover:text-white transition-colors flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 7h14l-1.2 12.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 7Z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            <span>(0)</span>
          </a>
        </div>
      </header>

      {/* Hero text — cream left on desktop, below shader on mobile */}
      <div className="relative md:absolute md:bottom-16 md:left-12 z-20 px-6 py-10 md:p-0 md:max-w-[500px]">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#6B6660] mb-5">
          Collection 04 — Printemps 2026
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] mb-6 font-medium">
          Furniture for the
          <br />
          <span className="italic font-normal">modern Lebanese home.</span>
        </h1>

        <p className="text-sm md:text-[15px] font-light text-[#6B6660] mb-8 leading-relaxed max-w-md">
          Hand-finished cedar, slow-spun rattan, and bespoke upholstery —
          built in our Batroun atelier for homes from Beirut to Byblos.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="#categories"
            className="px-7 py-3 rounded-full border border-[#1A1A1A]/40 text-[#1A1A1A] text-[11px] tracking-[0.18em] uppercase transition-all duration-200 hover:bg-[#1A1A1A]/5 hover:border-[#1A1A1A] cursor-pointer"
          >
            Explore Categories
          </a>
          <a
            href="#products"
            className="px-7 py-3 rounded-full bg-[#1A1A1A] text-white text-[11px] tracking-[0.18em] uppercase transition-all duration-200 hover:bg-[#1A1A1A]/90 cursor-pointer"
          >
            View the Collection
          </a>
        </div>
      </div>
    </section>
  );
}

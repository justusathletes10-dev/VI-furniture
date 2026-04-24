import { ShaderBackground } from "@/components/ui/hero-shader";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px]">
      <ShaderBackground>
        <header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-6">
          <a
            href="/"
            className="text-white font-display text-lg tracking-[0.18em] uppercase font-medium cursor-pointer"
          >
            VI
          </a>

          <nav className="hidden md:flex items-center gap-8">
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

          <div className="flex items-center gap-5 text-white/80 text-[11px] tracking-[0.18em] uppercase">
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
              className="cursor-pointer hover:text-white transition-colors"
              aria-label="Account"
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
              className="cursor-pointer hover:text-white transition-colors flex items-center gap-2"
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

        <main className="absolute bottom-12 left-6 md:bottom-16 md:left-12 z-20 max-w-2xl pr-6">
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-white mb-6 font-medium">
            Furniture for the
            <br />
            <span className="italic font-normal">modern Lebanese home.</span>
          </h1>

          <p className="text-sm md:text-base font-light text-white/75 mb-8 leading-relaxed max-w-md">
            Hand-finished cedar, slow-spun rattan, and bespoke upholstery —
            built in our Batroun atelier for homes from Beirut to Byblos.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="#categories"
              className="px-7 py-3 rounded-full border border-white/40 text-white text-[11px] tracking-[0.18em] uppercase transition-all duration-200 hover:bg-white/10 hover:border-white/70 cursor-pointer"
            >
              Explore Categories
            </a>
            <a
              href="#products"
              className="px-7 py-3 rounded-full bg-white text-[#1A1A1A] text-[11px] tracking-[0.18em] uppercase transition-all duration-200 hover:bg-white/90 cursor-pointer"
            >
              View the Collection
            </a>
          </div>
        </main>
      </ShaderBackground>
    </section>
  );
}

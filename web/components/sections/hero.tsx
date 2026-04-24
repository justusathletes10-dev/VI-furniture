import { ShaderBackground } from "@/components/ui/hero-shader";

export function Hero() {
  return (
    <section className="px-4 md:px-6 pt-4">
      <ShaderBackground>
        <header className="relative z-20 flex items-center justify-between p-6">
          <div className="flex items-center text-white font-display text-lg tracking-wide">
            VI
          </div>

          <nav className="flex items-center space-x-1">
            {["Collection", "Lighting", "Seating", "Tables", "Journal"].map(
              (label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  {label}
                </a>
              ),
            )}
          </nav>

          <div
            id="gooey-btn"
            className="relative flex items-center group"
            style={{ filter: "url(#gooey-filter)" }}
          >
            <button
              type="button"
              aria-label="Open cart"
              className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </button>
            <button
              type="button"
              className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
            >
              Cart (0)
            </button>
          </div>
        </header>

        <main className="absolute bottom-8 left-8 z-20 max-w-lg">
          <div className="text-left">
            <div
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
              style={{ filter: "url(#glass-effect)" }}
            >
              <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
              <span className="text-white/90 text-xs font-light relative z-10 tracking-widest uppercase">
                Collection 04 — Spring 2026
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tight text-white mb-4 font-medium">
              Furniture for the
              <br />
              <span className="italic">modern Vietnamese home.</span>
            </h1>

            <p className="text-sm font-light text-white/70 mb-6 leading-relaxed max-w-md">
              Hand-finished hardwood, slow-spun rattan, and bespoke upholstery —
              built in our Bình Dương atelier for homes from Hà Nội to Sài Gòn.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#categories"
                className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
              >
                Explore Categories
              </a>
              <a
                href="#products"
                className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer"
              >
                View the Collection
              </a>
            </div>
          </div>
        </main>
      </ShaderBackground>
    </section>
  );
}

import Image from "next/image";
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

        {/* Furniture vignette — floats on the right, shader breathes around it */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute right-10 lg:right-16 top-1/2 -translate-y-1/2 z-10 w-[32vw] max-w-[460px] aspect-[3/4] overflow-hidden"
          style={{
            boxShadow: "0 40px 120px -30px rgba(0,0,0,0.55)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85&auto=format&fit=crop"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 32vw"
            className="object-cover"
          />
          {/* subtle tint to tie it into the hero */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/25 via-transparent to-transparent pointer-events-none" />
          <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between text-white/90">
            <div>
              <p className="text-[9px] tracking-[0.22em] uppercase text-[#C9A48A]">
                Atelier Edition
              </p>
              <p className="font-serif text-base mt-1">Canapé Beyrouth</p>
            </div>
            <p className="text-[11px] text-white/70">$1,200</p>
          </div>
        </div>

        {/* Mobile: compact furniture chip below the text */}
        <div
          aria-hidden="true"
          className="md:hidden absolute right-6 top-24 z-10 w-36 aspect-[3/4] overflow-hidden"
          style={{ boxShadow: "0 20px 40px -12px rgba(0,0,0,0.55)" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop"
            alt=""
            fill
            sizes="144px"
            className="object-cover"
          />
        </div>

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

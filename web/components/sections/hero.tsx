import Image from "next/image";
import { ShaderBackground } from "@/components/ui/hero-shader";

// Diagonal seam between shader and image — slants from top-right toward bottom-left
const shaderClip = "polygon(0 0, 62% 0, 48% 100%, 0 100%)";
const imageClip = "polygon(62% 0, 100% 0, 100% 100%, 48% 100%)";

export function Hero() {
  return (
    <section className="relative w-full bg-[#F5F2EC] overflow-hidden min-h-[700px] md:h-screen">
      {/* Left: animated shader */}
      <div
        className="absolute inset-y-0 left-0 w-full md:w-[64%]"
        style={{ clipPath: shaderClip, WebkitClipPath: shaderClip }}
      >
        <ShaderBackground>{null}</ShaderBackground>
      </div>

      {/* Right: furniture photograph */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[54%] md:block hidden"
        style={{ clipPath: imageClip, WebkitClipPath: imageClip }}
      >
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&q=85&auto=format&fit=crop"
          alt="A Batroun atelier interior — linen armchair, travertine table and slumped glass vessel in soft afternoon light."
          fill
          sizes="(max-width: 768px) 0px, 55vw"
          priority
          className="object-cover"
        />
      </div>

      {/* VI wordmark — top-left, on the shader (white) */}
      <a
        href="/"
        className="absolute top-6 left-6 md:top-8 md:left-10 z-30 font-display text-lg tracking-[0.18em] uppercase font-medium text-white cursor-pointer"
      >
        VI
      </a>

      {/* Nav + utility icons — top-right, on the image */}
      <header className="absolute top-0 right-0 z-30 flex items-center gap-6 md:gap-8 px-6 md:px-10 py-6">
        <nav className="hidden lg:flex items-center gap-7">
          {["Collection", "Lighting", "Seating", "Tables", "Journal"].map(
            (label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-[#1A1A1A]/80 hover:text-[#1A1A1A] text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 cursor-pointer hover:underline underline-offset-4"
              >
                {label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-5 text-[#1A1A1A]/80">
          <button
            type="button"
            aria-label="Search"
            className="cursor-pointer hover:text-[#1A1A1A] transition-colors"
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
            className="cursor-pointer hover:text-[#1A1A1A] transition-colors"
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
            className="cursor-pointer hover:text-[#1A1A1A] transition-colors flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase"
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

      {/* Hero text — bottom-left, over the shader */}
      <div className="absolute bottom-10 left-6 md:bottom-16 md:left-12 z-20 max-w-[520px] pr-6">
        <p className="text-[11px] tracking-[0.2em] uppercase text-white/75 mb-5">
          Collection 04 — Printemps 2026
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-white mb-6 font-medium">
          Furniture for the
          <br />
          <span className="italic font-normal">modern Lebanese home.</span>
        </h1>

        <p className="text-sm md:text-[15px] font-light text-white/70 mb-8 leading-relaxed max-w-md">
          Hand-finished cedar, slow-spun rattan, and bespoke upholstery —
          built in our Batroun atelier for homes from Beirut to Byblos.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="#categories-a"
            className="px-7 py-3 rounded-full border border-white/50 text-white text-[11px] tracking-[0.18em] uppercase transition-all duration-200 hover:bg-white/10 hover:border-white cursor-pointer"
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
      </div>
    </section>
  );
}

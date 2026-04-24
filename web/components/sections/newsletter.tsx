import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <section className="relative bg-[#F5F2EC] px-6 py-24 md:py-32 border-t border-[#E4DFD6]">
      <div className="mx-auto max-w-md text-center">
        <p className="eyebrow">Atelier Dispatch</p>
        <h2 className="mt-3 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.1] tracking-tight text-[#1A1A1A]">
          Subscribe to the Atelier Dispatch.
        </h2>
        <p className="mt-3 text-[13px] leading-relaxed text-[#6B6660]">
          A quiet letter, three or four times a year — new pieces, makers we
          admire, and notes from the workshop.
        </p>

        <form className="mt-10 flex items-center gap-4 border-b border-[#1A1A1A] pb-2">
          <label className="flex-1 text-left">
            <span className="sr-only">Email</span>
            <input
              type="email"
              required
              placeholder="your@email"
              className="w-full bg-transparent text-[13px] text-[#1A1A1A] placeholder:text-[#6B6660] focus:outline-none"
            />
          </label>
          <button
            type="submit"
            aria-label="Subscribe"
            className="text-[#1A1A1A] cursor-pointer hover:opacity-70"
          >
            <ArrowRight strokeWidth={1.5} className="h-[18px] w-[18px]" />
          </button>
        </form>
      </div>
    </section>
  );
}

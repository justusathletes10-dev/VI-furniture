import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="relative px-4 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12 sm:py-16">
          {/* glow accents */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[var(--color-cta)]/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                <Mail className="h-3.5 w-3.5" />
                Newsletter · Bản Tin
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Join the VI inner circle.
              </h2>
              <p className="mt-3 max-w-md text-sm text-[var(--color-foreground)]/70 sm:text-base">
                First access to new collections, private artisan stories, and
                subscriber-only offers — straight from Hanoi to your inbox.
              </p>
            </div>

            <form className="flex flex-col gap-3 sm:flex-row">
              <label className="relative flex-1">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="h-13 w-full rounded-full border border-white/60 bg-white/70 px-6 text-sm placeholder:text-[var(--color-foreground)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 backdrop-blur fluid-transition"
                />
              </label>
              <Button variant="cta" size="lg" type="submit">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

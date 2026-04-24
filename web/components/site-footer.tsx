import Link from "next/link";

const columns = [
  {
    title: "Visit",
    links: [
      "Beirut — 12 Rue Gouraud, Gemmayzeh",
      "Byblos — 44 Rue du Port, Jbeil",
      "Batroun — Atelier",
      "Book an appointment",
    ],
  },
  {
    title: "Shop",
    links: ["Seating", "Tables", "Lighting", "Storage", "Objects"],
  },
  {
    title: "Studio",
    links: ["About", "Makers", "Materials", "Journal", "Press"],
  },
  {
    title: "Connect",
    links: ["Newsletter", "Trade program", "Instagram", "Contact"],
  },
];

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="mt-24 border-t border-[#E4DFD6] bg-[#F5F2EC]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand col */}
          <div className="md:col-span-1 space-y-4">
            <Link
              href="/"
              className="font-display text-[18px] font-medium tracking-[0.24em] text-[#1A1A1A] cursor-pointer"
            >
              VI
            </Link>
            <p className="text-[13px] leading-relaxed text-[#6B6660]">
              An atelier of handmade objects — designed in Beirut, made in
              Batroun.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#6B6660] font-medium">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13px] text-[#1A1A1A] cursor-pointer hover:underline underline-offset-4"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#E4DFD6] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B6660]">
            © 2026 VI · A Batroun–made object.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[11px] uppercase tracking-[0.18em] text-[#6B6660] cursor-pointer hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[11px] uppercase tracking-[0.18em] text-[#6B6660] cursor-pointer hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-[11px] uppercase tracking-[0.18em] text-[#6B6660] cursor-pointer hover:underline underline-offset-4"
            >
              Trade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const cols = [
  {
    title: "Shop",
    links: ["Sofas", "Dining", "Beds", "Lighting", "Decor", "Office"],
  },
  {
    title: "Company",
    links: ["About VI", "Craftsmanship", "Sustainability", "Showrooms", "Press"],
  },
  {
    title: "Support",
    links: ["Contact", "Shipping", "Returns", "Warranty", "FAQ"],
  },
];

export function SiteFooter() {
  return (
    <footer id="footer" className="relative mt-24 px-4 pb-8">
      <div className="glass-dark mx-auto max-w-7xl rounded-[2rem] px-6 py-12 sm:px-10 sm:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gold)] text-white font-display text-xl font-bold">
                VI
              </div>
              <span className="font-display text-xl font-semibold tracking-widest text-white">
                FURNITURE
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Đồ nội thất thủ công từ Việt Nam — handcrafted Vietnamese luxury
              furniture, designed in Hanoi and built to last generations.
            </p>
            <div className="space-y-2 pt-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--color-gold)]" />
                12 Hàng Bài, Hoàn Kiếm, Hà Nội
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--color-gold)]" />
                +84 24 3936 8888
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--color-gold)]" />
                xinchao@vifurniture.vn
              </p>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/70 fluid-transition hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} VI Furniture Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                aria-label="Social"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 fluid-transition hover:bg-white/20"
              >
                <Icon className="h-4 w-4 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

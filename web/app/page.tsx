import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { CategoriesHoverPreview } from "@/components/sections/categories-hover-preview";
import { CategoriesCursorFollow } from "@/components/sections/categories-cursor-follow";
import { CategoriesScrollPin } from "@/components/sections/categories-scroll-pin";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Materials } from "@/components/sections/materials";
import { WhyVi } from "@/components/sections/why-vi";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";

export default function HomePage() {
  return (
    <>
      <main className="relative">
        <Hero />
        <Philosophy />

        {/* Three variants to choose between — pick one, delete the others */}
        <CategoriesHoverPreview />
        <CategoriesCursorFollow />
        <CategoriesScrollPin />

        <FeaturedProducts />
        <Materials />
        <WhyVi />
        <Testimonials />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}

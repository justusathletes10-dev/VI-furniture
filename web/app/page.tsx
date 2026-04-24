import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Categories } from "@/components/sections/categories";
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
        <Categories />
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

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Categories } from "@/components/sections/categories";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { WhyVi } from "@/components/sections/why-vi";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <WhyVi />
        <Testimonials />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}

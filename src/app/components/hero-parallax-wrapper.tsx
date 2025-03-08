import { getParallaxBanners } from "@/lib/contentful";
import Parallax from "./hero-parallax";
import dynamic from "next/dynamic";

// Dynamically import the mobile carousel component with client-side rendering
const HeroMobileCarousel = dynamic(() => import("./hero-mobile-carousel"));

export default async function ParallaxWrapper() {
  const parallaxBanners = await getParallaxBanners();

  // Transform contentful data to the format expected by the Parallax component
  const products = parallaxBanners.map(banner => ({
    title: banner.fields.title,
    imagePath: `https:${banner.fields.image.fields.file.url}`,
  }));

  return (
    <>
      {/* Mobile Carousel (hidden on desktop) */}
      <div className="md:hidden">
        <HeroMobileCarousel products={products} />
      </div>

      {/* Desktop Parallax (hidden on mobile) */}
      <div className="hidden md:block">
        <Parallax products={products} />
      </div>
    </>
  );
}

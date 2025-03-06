import { getParallaxBanners } from "@/lib/contentful";
import { HeroParallax } from "./ui/hero-parallax";

export default async function ParallaxWrapper() {
  const parallaxBanners = await getParallaxBanners();

  // Transform contentful data to the format expected by the HeroParallax component
  const products = parallaxBanners.map(banner => ({
    title: banner.fields.title,
    thumbnail: `https:${banner.fields.image.fields.file.url}`,
    link: banner.fields.link || undefined,
  }));

  // Make sure we have enough images to fill the rows
  // We need at least 15 images (5 per row for 3 rows)
  let filledProducts = [...products];
  
  // If we don't have enough images, duplicate them until we have at least 15
  while (filledProducts.length < 15) {
    filledProducts = [...filledProducts, ...products];
  }
  
  // Take exactly 15 images
  filledProducts = filledProducts.slice(0, 15);
  
  // For the first row (which goes right to left), reverse the order to ensure images start from the left
  const firstRowProducts = filledProducts.slice(0, 5).reverse();
  // For the second row (which goes left to right), keep the order as is
  const secondRowProducts = filledProducts.slice(5, 10);
  // For the third row (which goes right to left), reverse the order to ensure images start from the left
  const thirdRowProducts = filledProducts.slice(10, 15).reverse();
  
  // Combine all rows
  const arrangedProducts = [
    ...firstRowProducts,
    ...secondRowProducts,
    ...thirdRowProducts
  ];

  return <HeroParallax products={arrangedProducts} />;
}

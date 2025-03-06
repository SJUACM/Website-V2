import { getParallaxBanners } from "@/lib/contentful";
import Parallax from "./hero-parallax";

export default async function ParallaxWrapper() {
  const parallaxBanners = await getParallaxBanners();

  // Transform contentful data to the format expected by the Parallax component
  const products = parallaxBanners.map(banner => ({
    title: banner.fields.title,
    imagePath: `https:${banner.fields.image.fields.file.url}`,
  }));

  return <Parallax products={products} />;
}
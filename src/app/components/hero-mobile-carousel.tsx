"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fallbackProducts } from "./hero-parallax";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

interface Product {
  title: string;
  imagePath: string;
}

interface HeroMobileCarouselProps {
  products: Product[];
}

export default function HeroMobileCarousel({
  products,
}: HeroMobileCarouselProps) {
  // Use products from props, or fallback to the hardcoded products if empty
  const productsToUse =
    products && products.length > 0 ? products : fallbackProducts;

  // Take a subset of images for the carousel to avoid too many slides
  const carouselProducts = productsToUse.slice(0, 10);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="py-20 mt-20">
      <div className="max-w-7xl relative mx-auto px-4 w-full">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white mb-8">
          Your community for <br /> all things Tech
        </h1>
        <p className="max-w-2xl text-base md:text-xl mb-8 dark:text-neutral-200">
          SJU ACM is a student-run organization that is dedicated to providing a
          welcoming and supportive community for students and professionals
          alike.
        </p>
      </div>

      <Carousel
        className="w-full max-w-xs sm:max-w-sm mx-auto"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {carouselProducts.map((product, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg">
                    <Image
                      src={product.imagePath}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h3 className="text-white font-medium text-lg">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative mr-2 static translate-y-0" />
          <CarouselNext className="relative ml-2 static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}

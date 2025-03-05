"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

interface Product {
  title: string;
  imagePath: string;
}

interface HeroParallaxProps {
  products: Product[];
}

interface ProductCardProps {
  product: {
    title: string;
    imagePath: string;
  };
  translateX: number;
}

export default function Parallax({ products }: HeroParallaxProps) {
  return <HeroParallax products={products} />;
}

// Keep this as a fallback in case the Contentful data is not available
export const fallbackProducts = [
  // First Row - Slides left to right
  {
    title: "Headstarter x SJU ACM AI Hackathon",
    imagePath: "/images/aiHackathon1.jpg",
  },
  {
    title: "SAP Office Hours",
    imagePath: "/images/sap_office.jpg",
  },
  {
    title: "Kickoff 2022",
    imagePath: "/images/kickoff22.jpg",
  },
  {
    title: "EY Office Visit",
    imagePath: "/images/eyPic1.jpg",
  },
  {
    title: "SWE Interview Prep",
    imagePath: "/images/sweInterviewPrep.jpg",
  },

  // Second Row - Slides right to left
  {
    title: "Headstarter x SJU ACM AI Hackathon",
    imagePath: "/images/aiHackathon6.jpg",
  },
  {
    title: "Lab Pic 2",
    imagePath: "/images/lab_pic2.jpg",
  },
  {
    title: "Headstarter x SJU ACM Hackathon",
    imagePath: "/images/hs_hackathon.jpg",
  },
  {
    title: "Intro to Web Dev",
    imagePath: "/images/introWebDev.jpg",
  },
  {
    title: "Python Malware Development",
    imagePath: "/images/PythonMalwareDevPic.jpg",
  },

  // Third Row - Slides left to right
  {
    title: "Research Meeting",
    imagePath: "/images/research.jpg",
  },
  {
    title: "Reverse Engineering",
    imagePath: "/images/revEng.jpg",
  },
  {
    title: "SAP",
    imagePath: "/images/sapPic2.jpg",
  },
  {
    title: "Spring 2024 Kickoff",
    imagePath: "/images/spring2024Kickoff.jpg",
  },
  {
    title: "Lab Pic 1",
    imagePath: "/images/lab_pic1.jpg",
  },

  // // Extra images not currently used in parallax, may (or may not) use in the future
  // {
  //   title: "Lab Pic 2",
  //   imagePath: "/images/lab_pic2.jpg",
  // },
  //
  // {
  //   title: "Lab Pic Over 9000",
  //   imagePath: "/images/lab_pic9.jpg",
  // },
];

export const HeroParallax = ({ products }: HeroParallaxProps) => {
  // Use products from props, or fallback to the hardcoded products if empty
  const productsToUse =
    products && products.length > 0 ? products : fallbackProducts;

  const firstRow = productsToUse.slice(0, 5);
  const secondRow = productsToUse.slice(5, 10);
  const thirdRow = productsToUse.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Create all the animations using useSpring
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[350vh] py-40 overflow-visible antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="space-y-24 mt-20"
      >
        <div className="relative">
          <motion.div className="overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4 cursor-grab">
            <div className="flex flex-row-reverse space-x-reverse space-x-20 min-w-max px-20">
              {firstRow.map(product => (
                <ProductCard
                  key={product.title}
                  product={product}
                  translateX={0}
                />
              ))}
            </div>
          </motion.div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hidden md:flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        <div className="relative">
          <motion.div className="overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4 cursor-grab">
            <div className="flex flex-row space-x-20 min-w-max px-20">
              {secondRow.map(product => (
                <ProductCard
                  key={product.title}
                  product={product}
                  translateX={0}
                />
              ))}
            </div>
          </motion.div>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hidden md:flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
        
        <div className="relative">
          <motion.div className="overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4 cursor-grab">
            <div className="flex flex-row-reverse space-x-reverse space-x-20 min-w-max px-20">
              {thirdRow.map(product => (
                <ProductCard
                  key={product.title}
                  product={product}
                  translateX={0}
                />
              ))}
            </div>
          </motion.div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hidden md:flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Your community for <br /> all things Tech
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        SJU ACM is a student-run organization that is dedicated to providing a
        welcoming and supportive community for students and professionals alike.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translateX }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product h-72 w-[24rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl">
        <Image
          src={product.imagePath}
          alt={product.title}
          fill
          unoptimized
          className="object-cover object-left-top absolute h-full w-full inset-0"
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

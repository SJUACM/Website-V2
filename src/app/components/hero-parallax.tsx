"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Product {
  title: string;
  imagePath: string;
}

interface HeroParallaxProps {
  products: Product[];
}

export default function Parallax() {
  return <HeroParallax products={products} />;
}

export const products = [
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
    title: "Headstarter x STJ ACM AI Hackathon",
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

  // // Extra images not currently used in parallax, may use in the future
  // {
  //   title: "Lab Pic 2",
  //   imagePath: "/images/lab_pic2.jpg",
  // },
  //
  // {
  //   title: "Lab Pic 9",
  //   imagePath: "/images/lab_pic9.jpg",
  // },
];

export const HeroParallax = ({ products }: HeroParallaxProps) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [1, 1, 1, 0]);

  return (
    <div
      ref={ref}
      className="h-[250vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto"
    >
      <Header />
      <motion.div
        style={{ opacity }}
        className="sticky top-0 flex flex-col items-center justify-center"
      >
        <motion.div className="flex flex-col gap-16">
          <motion.div className="flex flex-row gap-4">
            {firstRow.map((product) => (
              <motion.div
                key={product.title}
                style={{ x: translateX }}
                className="group relative h-96 w-[30rem] overflow-hidden rounded-lg"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="flex flex-row gap-4">
            {secondRow.map((product) => (
              <motion.div
                key={product.title}
                style={{ x: translateXReverse }}
                className="group relative h-96 w-[30rem] overflow-hidden rounded-lg"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="flex flex-row gap-4">
            {thirdRow.map((product) => (
              <motion.div
                key={product.title}
                style={{ x: translateX }}
                className="group relative h-96 w-[30rem] overflow-hidden rounded-lg"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
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

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <Image
        src={product.imagePath}
        alt={product.title}
        fill
        className="object-cover object-left-top absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-lg font-semibold">{product.title}</h2>
      </div>
    </>
  );
};

"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Product {
  title: string;
  link?: string;
  thumbnail: string;
}

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

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
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] w-full"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-col gap-20 w-full"
      >
        <div className="w-full overflow-hidden">
          <motion.div className="flex flex-row space-x-20 min-w-max ml-0">
            {firstRow.map(product => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title + Math.random()}
              />
            ))}
          </motion.div>
        </div>

        <div className="w-full overflow-hidden">
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 min-w-max ml-0">
            {secondRow.map(product => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title + Math.random()}
              />
            ))}
          </motion.div>
        </div>

        <div className="w-full overflow-hidden">
          <motion.div className="flex flex-row space-x-20 min-w-max ml-0">
            {thirdRow.map(product => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title + Math.random()}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
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

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  const CardContent = () => (
    <>
      <div className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover object-left-top absolute h-full w-full inset-0"
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </>
  );

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{ y: -20 }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      {product.link ? (
        <Link href={product.link} className="block h-full w-full">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </motion.div>
  );
};

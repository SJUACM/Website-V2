"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/aws-svgrepo-com.svg", alt: "AWS", dark: true },
  { src: "/logos/samsung-svgrepo-com.svg", alt: "Samsung", dark: true },
  { src: "/logos/tiktok-svgrepo-com.svg", alt: "TikTok", dark: false },
  { src: "/logos/brand-ups.svg", alt: "UPS", dark: true },
  { src: "/logos/PricewaterhouseCoopers_Logo.svg", alt: "PwC", dark: true },
  { src: "/logos/Rivian_logo.svg", alt: "Rivian", dark: true },
  { src: "/logos/sap-svgrepo-com.svg", alt: "SAP", dark: true },
  { src: "/logos/New_Bloomberg_Logo.svg", alt: "Bloomberg", dark: true },
  { src: "/logos/sony-white-logo.png", alt: "SONY", dark: false },
  {src: "/logos/ey-logo-white.png", alt: "EY", dark: false},
  {src: "/logos/protiviti-logo-white.png", alt: "Protiviti", dark: false},
];

export default function LogoSlider() {
  const doubled = [...logos, ...logos];

  return (
    <div className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-6 mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl md:text-5xl font-bold text-center"
        >
          Our Members Have Worked At:
        </motion.h2>
      </div>

      <div className="relative overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll w-max">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-14 flex items-center justify-center"
              style={{ width: "180px", height: "70px" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={70}
                className={`object-contain w-auto h-full opacity-70 hover:opacity-100 transition-opacity duration-300 ${logo.dark ? "brightness-0 invert" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getLandingPageGraphicByTitle } from "@/lib/contentful";

async function DevelopmentGraphic() {
  try {
    const graphicData = await getLandingPageGraphicByTitle("Development Graphic");
    
    let graphicUrl = "/images/resources-graphic.png"; // Default fallback
    
    // Check both image and graphic fields
    if (graphicData?.fields?.image?.fields?.file?.url) {
      graphicUrl = graphicData.fields.image.fields.file.url;
      console.log("Found development graphic URL in image field:", graphicUrl);
    } else if (graphicData?.fields?.graphic?.fields?.file?.url) {
      graphicUrl = graphicData.fields.graphic.fields.file.url;
      console.log("Found development graphic URL in graphic field:", graphicUrl);
    }
    
    // Handle different URL formats
    if (graphicUrl && !graphicUrl.startsWith("http") && !graphicUrl.startsWith("/")) {
      graphicUrl = `https:${graphicUrl}`;
    }
    
    return (
      <Image
        src={graphicUrl}
        alt="Development Graphic"
        width={600}
        height={600}
        unoptimized
        className="object-contain"
      />
    );
  } catch (error) {
    console.error("Error loading development graphic:", error);
    return (
      <Image
        src="/images/resources-graphic.png"
        alt="Development Graphic"
        width={600}
        height={600}
        unoptimized
        className="object-contain"
      />
    );
  }
}

export default function ResourcesSection() {
  return (
    <div className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-red-500 font-bold">DEVELOPMENT</h3>
            <h2 className="text-4xl font-bold">Check out our Resources</h2>
            <p className="text-neutral-300 text-lg">
              Our curated list of resources will help set you up to become a
              more well rounded candidate for top tech companies! Pick up the
              skills you need to succeed in your future career
            </p>
            <div className="pt-4">
              <Link href="/resources">
                <button
                  className="px-8 py-4 rounded-full bg-red-500 text-white font-medium 
                               hover:bg-red-600 transition-colors duration-200"
                >
                  View our Resources
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <React.Suspense fallback={
              <div className="w-full h-[400px] bg-black/20 rounded-md animate-pulse"></div>
            }>
              <DevelopmentGraphic />
            </React.Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

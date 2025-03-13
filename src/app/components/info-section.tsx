"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getLandingPageGraphicByTitle } from "@/lib/contentful";

async function ExpandingKnowledgeGraphic() {
  try {
    const graphicData = await getLandingPageGraphicByTitle("Expanding Knowledge Graphic");
    
    let graphicUrl = "/images/acm-graphic.png"; // Default fallback
    
    // Check both image and graphic fields
    if (graphicData?.fields?.image?.fields?.file?.url) {
      graphicUrl = graphicData.fields.image.fields.file.url;
      console.log("Found expanding knowledge graphic URL in image field:", graphicUrl);
    } else if (graphicData?.fields?.graphic?.fields?.file?.url) {
      graphicUrl = graphicData.fields.graphic.fields.file.url;
      console.log("Found expanding knowledge graphic URL in graphic field:", graphicUrl);
    }
    
    // Handle different URL formats
    if (graphicUrl && !graphicUrl.startsWith("http") && !graphicUrl.startsWith("/")) {
      graphicUrl = `https:${graphicUrl}`;
    }
    
    return (
      <Image
        src={graphicUrl}
        alt="Expanding Knowledge Graphic"
        width={600}
        height={600}
        unoptimized
        className="object-contain"
      />
    );
  } catch (error) {
    console.error("Error loading expanding knowledge graphic:", error);
    return (
      <Image
        src="/images/acm-graphic.png"
        alt="Expanding Knowledge Graphic"
        width={600}
        height={600}
        unoptimized
        className="object-contain"
      />
    );
  }
}

export default function InfoSection() {
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
            <h2 className="text-4xl font-bold">
              Expanding knowledge beyond the classroom
            </h2>
            <p className="text-neutral-300 text-lg">
              We provide the necessary materials to help you succeed in a future
              career in tech! Gain hands-on experience through our interactive
              labs and workshops
            </p>
            <div className="pt-4">
              <Link href="/meetings">
                <button
                  className="px-8 py-4 rounded-full bg-red-500 text-white font-medium 
                                 hover:bg-red-600 transition-colors duration-200"
                >
                  View our Past Meetings
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
              <ExpandingKnowledgeGraphic />
            </React.Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

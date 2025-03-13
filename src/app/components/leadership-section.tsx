"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getLandingPageGraphicByTitle } from "@/lib/contentful";

async function LeadershipGraphic() {
  try {
    const graphicData = await getLandingPageGraphicByTitle("Leadership Graphic");
    
    let graphicUrl = "/images/eboard-graphic.png"; // Default fallback
    
    // Check both image and graphic fields
    if (graphicData?.fields?.image?.fields?.file?.url) {
      graphicUrl = graphicData.fields.image.fields.file.url;
      console.log("Found leadership graphic URL in image field:", graphicUrl);
    } else if (graphicData?.fields?.graphic?.fields?.file?.url) {
      graphicUrl = graphicData.fields.graphic.fields.file.url;
      console.log("Found leadership graphic URL in graphic field:", graphicUrl);
    }
    
    // Handle different URL formats
    if (graphicUrl && !graphicUrl.startsWith("http") && !graphicUrl.startsWith("/")) {
      graphicUrl = `https:${graphicUrl}`;
    }
    
    return (
      <Image
        src={graphicUrl}
        alt="Leadership Graphic"
        width={600}
        height={600}
        unoptimized
        className="object-contain"
      />
    );
  } catch (error) {
    console.error("Error loading leadership graphic:", error);
    return (
      <Image
        src="/images/eboard-graphic.png"
        alt="Leadership Graphic"
        width={600}
        height={600}
        unoptimized
        className="object-contain"
      />
    );
  }
}

export default function LeadershipSection() {
  return (
    <div className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <React.Suspense fallback={
              <div className="w-full h-[400px] bg-black/20 rounded-md animate-pulse"></div>
            }>
              <LeadershipGraphic />
            </React.Suspense>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-red-500 font-bold">LEADERSHIP</h3>
            <h2 className="text-4xl font-bold">Meet our E-Board</h2>
            <p className="text-neutral-300 text-lg">
              Our Executive Board consists of students who are passionate and
              experienced in numerous areas across Computer Science & Cyber
              Security. We yearn to inspire and uplift our members in order to
              secure a successful career in tech!
            </p>
            <div className="pt-4">
              <Link href="/eboard">
                <button
                  className="px-8 py-4 rounded-full bg-red-500 text-white font-medium 
                               hover:bg-red-600 transition-colors duration-200"
                >
                  View our E-Board Members
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Client component that receives the image URL as a prop
export function LeadershipSectionClient({
  graphicUrl,
}: {
  graphicUrl: string;
}) {
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
            <Image
              src={graphicUrl}
              alt="Leadership Graphic"
              width={600}
              height={600}
              unoptimized
              className="object-contain"
            />
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

// Default export is the client component for backward compatibility
export default LeadershipSectionClient;

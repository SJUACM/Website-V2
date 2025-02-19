"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
            <Image
              src="/images/resources-graphic.png"
              alt="Resources Graphic"
              width={600}
              height={600}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

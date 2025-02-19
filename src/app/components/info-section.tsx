"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
            <Image
              src="/images/acm-graphic.png"
              alt="ACM Graphic"
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

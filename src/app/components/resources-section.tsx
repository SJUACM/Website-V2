"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTrackedButton } from "../hooks/useTrackedButton";

// Client component that receives the image URL as a prop
export function ResourcesSectionClient({ graphicUrl }: { graphicUrl: string }) {
  const { createClickHandler } = useTrackedButton();

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
                  onClick={createClickHandler("view_resources_button_click", {
                    button_location: "resources_section",
                    button_text: "View our Resources",
                  })}
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
              src={graphicUrl}
              alt="Development Graphic"
              width={600}
              height={600}
              unoptimized
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Default export is the client component for backward compatibility
export default ResourcesSectionClient;

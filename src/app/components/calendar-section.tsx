"use client";

import React from "react";
import { motion } from "framer-motion";

export function CalendarSection() {
  return (
    <div className="relative w-full">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h3 className="text-red-500 font-bold text-sm tracking-wider mb-3">
            OUR CALENDAR
          </h3>
          <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
          <div className="w-16 h-0.5 bg-red-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          {/* Calendar Container with responsive aspect ratio */}
          <div className="relative w-full bg-black/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
            {/* Responsive iframe wrapper */}
            <div className="relative w-full" style={{ paddingBottom: "min(600px, 80vh)" }}>
              <iframe
                src="https://gossamer-oval-f18.notion.site/ebd/8dce967de72a83feab5e011b9e535440?v=d69e967de72a82dcac6788e1dd848f16"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                style={{
                  border: "none",
                  minHeight: "400px",
                }}
                allowFullScreen
                title="ACM Event Calendar"
              />
            </div>
          </div>

          {/* Optional: Add a link to open in new tab for mobile users */}
          <div className="mt-4 text-center md:hidden">
            <a
              href="https://gossamer-oval-f18.notion.site/ebd/8dce967de72a83feab5e011b9e535440?v=d69e967de72a82dcac6788e1dd848f16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 text-sm underline transition-colors"
            >
              Open calendar in full screen
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

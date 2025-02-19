"use client";
import { motion } from "framer-motion";
import React from "react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

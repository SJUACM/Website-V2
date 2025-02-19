"use client";
import { motion } from "framer-motion";
import { FeaturesSection } from "./components/features-section";
import { MeetingInfo } from "./components/meeting-info";
import { SocialLinks } from "./components/social-links";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-12 items-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center max-w-3xl mx-auto"
        >
          <p className="text-neutral-300 text-lg leading-relaxed">
            We are St. John&apos;s University&apos;s premier organization for
            Computer Science and Cyber Security. We focus on providing students
            with hands-on experience, industry connections, and a supportive
            community of tech enthusiasts.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed">
            We aim to enhance the experience of STJ tech students by providing
            them with a platform to learn, share, and collaborate through our
            labs and presentations.
          </p>
        </motion.div>

        <FeaturesSection />
      </div>

      <MeetingInfo />
      <SocialLinks />
    </div>
  );
}

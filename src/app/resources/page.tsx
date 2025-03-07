"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  interviewResources,
  helpfulWebsites,
  youtubeChannels,
  Resource,
} from "./data";
import styles from "../styles/customFont.module.css";

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div
        className="relative bg-gradient-to-br from-neutral-900/50 to-black/50 
                    backdrop-blur-sm rounded-xl overflow-hidden border border-neutral-800/50
                    transition-all duration-300 hover:border-red-500/50 hover:shadow-lg 
                    hover:shadow-red-500/10"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 
                      group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300"
        />
        <div className="relative p-6 h-full">
          <h3
            className="text-xl font-bold text-white text-center mb-3 group-hover:text-red-500 
                       transition-colors duration-300"
          >
            {resource.title}
          </h3>
          <p className="text-neutral-300 text-sm mb-8 leading-relaxed text-center">
            {resource.description}
          </p>
          <div className="absolute bottom-4 right-4">
            <a
              href={resource.link}
              target="_blank"
              rel="noreferrer noopener"
              className="text-neutral-400 hover:text-red-500 transition-all duration-300
                       transform group-hover:scale-110"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative mb-16 text-center"
    >
      <h2 className={`text-3xl font-bold text-white mb-4 ${styles.customFont}`}>
        {title}
      </h2>
      <div className="h-1 w-20 bg-red-500 mx-auto rounded-full" />
    </motion.div>
  );
}

export default function Resources() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-lg text-neutral-300 leading-relaxed">
            STJ ACM provides a collection of tools and materials to help
            students develop their skills. Whether you&apos;re preparing for
            interviews, expanding your knowledge, or looking for expert
            insights, these resources will support your learning journey.
          </p>
        </div>

        <div className="space-y-32">
          <section id="interview-prep" className="scroll-mt-24">
            <SectionTitle title="Interview Preparation" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interviewResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </section>

          <section id="helpful-websites" className="scroll-mt-24">
            <SectionTitle title="Helpful Websites" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpfulWebsites.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </section>

          <section id="youtube-channels" className="scroll-mt-24">
            <SectionTitle title="YouTube Channels" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {youtubeChannels.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

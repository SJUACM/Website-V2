"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/customFont.module.css";
import Link from "next/link";
import { Hackathon } from "../../lib/contentful";
import { formatDateRange } from "../../lib/utils";
import { SOCIAL_LINKS } from "../utils/constants";

interface HackathonsListProps {
  ongoingHackathons: Hackathon[];
  upcomingHackathons: Hackathon[];
  pastHackathons: Hackathon[];
}

export default function HackathonsList({
  ongoingHackathons,
  upcomingHackathons,
  pastHackathons,
}: HackathonsListProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg text-neutral-300 leading-relaxed">
            STJ ACM hosts and participates in various hackathons throughout the
            academic year. These events provide excellent opportunities to build
            projects, learn new technologies, and network with industry
            professionals.
          </p>
        </motion.div>

        {/* Ongoing Hackathons Section */}
        {ongoingHackathons.length > 0 && (
          <div className="mb-20">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-8 text-center ${styles.customFont}`}
            >
              Ongoing Hackathons
            </h2>
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {ongoingHackathons.map(hackathon => {
                const url = `/hackathons/${hackathon.sys.id}`;
                console.log(
                  `Generated URL for ${hackathon.fields.title}: ${url}`
                );
                return (
                  <Link
                    href={url}
                    key={hackathon.sys.id}
                    className="w-full md:w-auto md:max-w-2xl"
                  >
                    <HackathonCard hackathon={hackathon} status="ongoing" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Upcoming Hackathons Section */}
        {upcomingHackathons.length > 0 && (
          <div className="mb-20">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-8 text-center ${styles.customFont}`}
            >
              Upcoming Hackathons
            </h2>
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {upcomingHackathons.map(hackathon => {
                const url = `/hackathons/${hackathon.sys.id}`;
                console.log(
                  `Generated URL for ${hackathon.fields.title}: ${url}`
                );
                return (
                  <Link
                    href={url}
                    key={hackathon.sys.id}
                    className="w-full md:w-auto md:max-w-2xl"
                  >
                    <HackathonCard hackathon={hackathon} status="upcoming" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Past Hackathons Section */}
        {pastHackathons.length > 0 && (
          <div>
            <h2
              className={`text-2xl md:text-3xl font-bold mb-8 text-center ${styles.customFont}`}
            >
              Past Hackathons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {pastHackathons.map(hackathon => {
                const url = `/hackathons/${hackathon.sys.id}`;
                console.log(
                  `Generated URL for ${hackathon.fields.title}: ${url}`
                );
                return (
                  <Link href={url} key={hackathon.sys.id}>
                    <HackathonCard hackathon={hackathon} status="past" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-neutral-900/50 to-black/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-800/50">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-6 ${styles.customFont}`}
          >
            Get Involved
          </h2>
          <p className="text-neutral-300 mb-4">
            Interested in participating in our hackathons? Follow us on social
            media and join our Discord server to get the latest updates on
            upcoming events.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <a
              href={SOCIAL_LINKS.DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-center transition-colors"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HackathonCard({
  hackathon,
  status,
}: {
  hackathon: Hackathon;
  status: "ongoing" | "upcoming" | "past";
}) {
  const imageUrl = hackathon.fields.image?.fields.file.url || "";

  // Handle missing date fields
  const formattedDate =
    hackathon.fields.startDate && hackathon.fields.endDate
      ? formatDateRange(hackathon.fields.startDate, hackathon.fields.endDate)
      : "Date TBD";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
    >
      <div
        className={`relative bg-gradient-to-br from-neutral-900/50 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden border ${
          status === "ongoing"
            ? "border-green-500/50"
            : status === "upcoming"
              ? "border-red-500/50"
              : "border-neutral-800/50"
        } transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10`}
      >
        {status !== "past" && (
          <div
            className={`absolute top-4 right-4 z-20 ${
              status === "ongoing" ? "bg-green-600" : "bg-red-600"
            } text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
            {status === "ongoing" ? "Ongoing" : "Upcoming"}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300" />
        <div className="h-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https:${imageUrl})` }}
          />
        </div>
        <div className="relative p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
              {hackathon.fields.title}
            </h3>
            <span className="text-sm text-red-400 bg-red-950/30 px-3 py-1 rounded-full">
              {formattedDate}
            </span>
          </div>
          <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
            {hackathon.fields.description}
          </p>
          <div className="text-red-400 text-sm font-medium flex items-center">
            View details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

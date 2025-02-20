"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Meeting as MeetingType } from "@/lib/contentful";

interface UpcomingMeetingsViewProps {
  nextMeeting: MeetingType;
}

export function UpcomingMeetingsView({
  nextMeeting,
}: UpcomingMeetingsViewProps) {
  const meetingDate = new Date(nextMeeting.fields.date);
  const formattedDate = meetingDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const formattedTime = meetingDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="relative w-full">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h3 className="text-red-500 font-bold text-sm tracking-wider mb-3">
            UPCOMING EVENT
          </h3>
          <h2 className="text-4xl font-bold mb-4">Next Meeting</h2>
          <div className="w-16 h-0.5 bg-red-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] md:aspect-[3/2] rounded-2xl overflow-hidden group"
          >
            <Image
              src={`https:${nextMeeting.fields.image.fields.file.url}`}
              alt={nextMeeting.fields.title}
              fill
              className="object-contain bg-black/40"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              {nextMeeting.fields.title}
            </h3>
            <p className="text-neutral-300 text-base leading-relaxed">
              {nextMeeting.fields.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-red-500 font-medium mb-1 text-xs">DATE</p>
                <p className="text-white text-sm font-medium">
                  {formattedDate}
                </p>
              </div>
              <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-red-500 font-medium mb-1 text-xs">TIME</p>
                <p className="text-white text-sm font-medium">
                  {formattedTime}
                </p>
              </div>
            </div>

            <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-red-500 font-medium mb-1 text-xs">LOCATION</p>
              <p className="text-white text-sm font-medium">
                {typeof nextMeeting.fields.meetingLocation === "object"
                  ? "TBA"
                  : nextMeeting.fields.meetingLocation || "TBA"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

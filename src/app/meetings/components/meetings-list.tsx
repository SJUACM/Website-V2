import React from "react";
import Meeting from "../../components/meeting";
import { Meeting as MeetingType } from "@/lib/contentful";
import { motion } from "framer-motion";

interface MeetingsListProps {
  meetings: MeetingType[];
}

export default function MeetingsList({ meetings }: MeetingsListProps) {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animations
        delayChildren: 0.05, // Slight delay before starting animations
      },
    },
  };

  // Animation variants for individual meeting cards
  const meetingVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-hidden w-full px-4 sm:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={meetings.map(m => m.sys.id).join(",")} // Re-animate when meetings list changes
    >
      {meetings.map(meeting => {
        // Process slides data - check both slides and slidesUrl fields
        let slides;
        if (meeting.fields.slidesUrl) {
          // Use the direct URL if available
          slides = meeting.fields.slidesUrl;
        } else if (meeting.fields.slides) {
          // Fall back to the media asset if available
          slides = `https:${meeting.fields.slides.fields.file.url}`;
        }

        return (
          <motion.div
            key={meeting.sys.id}
            variants={meetingVariants}
            layout // Smooth layout changes
          >
            <Meeting
              title={meeting.fields.title}
              date={new Date(meeting.fields.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
              image={`https:${meeting.fields.image.fields.file.url}`}
              description={meeting.fields.description}
              meetingLocation={meeting.fields.meetingLocation}
              slides={slides}
              recording={meeting.fields.recording}
              resourcesUrl={meeting.fields.resourcesUrl}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

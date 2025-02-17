"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Image from "next/image";
import Link from "next/link";
import { Meeting as MeetingType, getUpcomingMeetings } from "@/lib/contentful";

export default function UpcomingMeetings() {
  const [nextMeeting, setNextMeeting] = useState<MeetingType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNextMeeting() {
      try {
        const allMeetings = await getUpcomingMeetings();
        // Sort meetings by date
        const upcomingMeetings = allMeetings
          .filter(meeting => new Date(meeting.fields.date) >= new Date())
          .sort((a, b) => 
            new Date(a.fields.date).getTime() - new Date(b.fields.date).getTime()
          );
        
        // Set the next meeting to the earliest upcoming meeting
        if (upcomingMeetings.length > 0) {
          setNextMeeting(upcomingMeetings[0]); // This only takes the first meeting
        }
      } catch (error) {
        console.error("Error fetching meetings:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNextMeeting();
  }, []);

  if (loading) {
    return <div className="py-32 text-center">Loading...</div>;
  }

  if (!nextMeeting) {
    return null;
  }

  const meetingDate = new Date(nextMeeting.fields.date);
  const formattedDate = meetingDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = meetingDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Upcoming Meetings</h2>
        </motion.div>

        <CardContainer>
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              <CardItem translateZ="100" className="w-full">
                <div className="h-[250px] relative rounded-xl overflow-hidden">
                  <Image
                    src={`https:${nextMeeting.fields.image.fields.file.url}`}
                    alt={nextMeeting.fields.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                </div>
              </CardItem>
              
              <CardItem translateZ="50" className="flex flex-col justify-between text-left space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">{nextMeeting.fields.title}</h3>
                  <div className="space-y-2">
                    <p className="text-neutral-300 text-sm">
                      <span className="text-red-500">When:</span> {formattedDate}
                    </p>
                    <p className="text-neutral-300 text-sm">
                      <span className="text-red-500">Time:</span> {formattedTime}
                    </p>
                    <p className="text-neutral-300 text-sm">
                      <span className="text-red-500">Where:</span> {typeof nextMeeting.fields.location === 'object' ? 'TBA' : nextMeeting.fields.location || 'TBA'}
                    </p>
                  </div>
                </div>
                
                <Link href="/meetings" className="inline-block mt-4">
                  <button className="px-6 py-3 rounded-full bg-red-500 text-white text-sm font-medium 
                                   hover:bg-red-600 transition-colors duration-200 
                                   shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    View All Meetings
                  </button>
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
} 
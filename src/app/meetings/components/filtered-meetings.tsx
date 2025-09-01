"use client";

import React, { useState, useEffect } from "react";
import { Meeting } from "@/lib/contentful";
import MeetingsList from "./meetings-list";
import SearchBar from "./search-bar";
import { motion, AnimatePresence } from "framer-motion";

interface FilteredMeetingsProps {
  meetings: Meeting[];
}

export default function FilteredMeetings({ meetings }: FilteredMeetingsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search query to prevent excessive re-renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter meetings based on debounced search query
  const filteredMeetings = meetings.filter(meeting => {
    const query = debouncedQuery.toLowerCase().trim();
    if (!query) return true;

    // Search in title
    if (meeting.fields.title.toLowerCase().includes(query)) return true;

    // Search in description
    if (meeting.fields.description.toLowerCase().includes(query)) return true;

    // Search in meeting location if available
    if (meeting.fields.meetingLocation?.toLowerCase().includes(query))
      return true;

    // Search in date
    const date = new Date(meeting.fields.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
    if (date.toLowerCase().includes(query)) return true;

    return false;
  });

  // Set searching state when query changes
  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [searchQuery]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="space-y-6">
      <SearchBar onSearch={setSearchQuery} />

      <AnimatePresence mode="wait">
        {filteredMeetings.length === 0 ? (
          <motion.div
            key="no-results"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center py-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="inline-block mb-4 p-4 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.div>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 dark:text-gray-400"
            >
              No meetings found matching "{debouncedQuery}"
            </motion.p>
            <motion.button
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 text-sm font-medium text-red-500 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
            >
              Clear search
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MeetingsList meetings={filteredMeetings} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

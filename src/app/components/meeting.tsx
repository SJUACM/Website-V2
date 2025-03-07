import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlay } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface MeetingProps {
  title: string;
  date: string;
  image: string;
  description: string;
  meetingLocation?: string;
  slides?: string | { url: string; fileName: string; title: string };
  recording?: string;
}

export default function Meeting({
  title,
  date,
  image,
  description,
  meetingLocation,
  slides,
  recording,
}: MeetingProps) {
  // Determine if slides is a string URL or an object with file details
  const slidesUrl = typeof slides === "string" ? slides : slides?.url;

  // Determine if it's a Google Drive or external URL
  const isExternalUrl =
    slidesUrl &&
    (slidesUrl.includes("drive.google.com") ||
      slidesUrl.includes("docs.google.com") ||
      !slidesUrl.startsWith("https://images.ctfassets.net"));

  // Customize button text based on URL type
  const slidesButtonText = isExternalUrl ? "View Slides" : "Download Slides";

  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[24rem] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 h-auto min-h-[42rem] flex flex-col">
        {/* Title - Fixed height container */}
        <CardItem translateZ="50" className="h-[4rem] mb-4">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-white line-clamp-2 text-left">
            {title}
          </h3>
        </CardItem>

        {/* Image - Fixed height container */}
        <CardItem translateZ="100" className="w-full h-[15rem] relative">
          <Image
            src={image}
            fill
            className="object-cover rounded-lg shadow-sm group-hover/card:shadow-md transition-shadow duration-300"
            alt={title}
          />
        </CardItem>

        {/* Date - Fixed height */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 dark:text-neutral-300 text-md h-[2rem] flex items-center mt-6 font-medium text-left"
        >
          {date}
        </CardItem>

        {/* Description - Using flex-grow */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-600 dark:text-neutral-300 text-md mt-4 mb-4 flex-grow leading-relaxed text-left"
        >
          {description}
        </CardItem>

        {/* Location - Fixed height if exists */}
        {meetingLocation && (
          <CardItem
            translateZ="60"
            className="h-[2rem] flex items-center mt-2 mb-2 text-left"
          >
            <span className="text-neutral-500 dark:text-neutral-400 font-medium mr-1">
              Location:
            </span>
            <span className="text-neutral-700 dark:text-neutral-200">
              {meetingLocation}
            </span>
          </CardItem>
        )}

        {/* Buttons - Fixed position at bottom */}
        <CardItem
          translateZ="60"
          className="flex flex-wrap gap-4 mt-4 text-left"
        >
          {slidesUrl && (
            <Link
              href={slidesUrl}
              target="_blank"
              className="py-2 px-4 rounded-lg text-xs font-medium dark:text-white text-neutral-700 border border-neutral-300 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={faDownload as IconProp}
                className="text-xs"
              />
              {slidesButtonText}
            </Link>
          )}
          {recording && (
            <Link
              href={recording}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-black dark:bg-white dark:hover:bg-neutral-200 dark:text-black text-white text-xs font-bold flex items-center gap-2 transition-colors"
            >
              <FontAwesomeIcon icon={faPlay as IconProp} className="text-xs" />
              Watch Recording
            </Link>
          )}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

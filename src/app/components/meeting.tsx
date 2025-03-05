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
  const slidesUrl = typeof slides === 'string' ? slides : slides?.url;
  
  // Determine if it's a Google Drive or external URL
  const isExternalUrl = slidesUrl && (
    slidesUrl.includes('drive.google.com') || 
    slidesUrl.includes('docs.google.com') ||
    !slidesUrl.startsWith('https://images.ctfassets.net')
  );
  
  // Customize button text based on URL type
  const slidesButtonText = isExternalUrl ? 'View Slides' : 'Download Slides';

  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] rounded-xl p-8 border h-[42rem] overflow-hidden`}
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-md text-left mt-6"
        >
          {date}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-md max-w-md mt-4 text-left"
        >
          {description}
        </CardItem>
        {meetingLocation && (
          <div className="mt-4">
            <span className="text-neutral-400">Location: </span>
            <span className="text-neutral-200">{meetingLocation}</span>
          </div>
        )}
        <div className="absolute bottom-8 left-8 right-8 flex justify-left space-x-4 items-center">
          {slidesUrl && (
            <CardItem
              translateZ={20}
              as={Link}
              href={slidesUrl}
              target="_blank"
              className="py-2 px-4 rounded-xl text-xs font-normal dark:text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload as IconProp} className="text-xs" />
              {slidesButtonText}
            </CardItem>
          )}
          {recording && (
            <CardItem
              translateZ={20}
              as={Link}
              href={recording}
              target="_blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faPlay as IconProp} className="text-xs" />
              Watch Recording
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}

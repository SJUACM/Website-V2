import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Image from "next/image";
import Link from "next/link";

interface MeetingProps {
  title: string;
  date: string;
  image: string;
  description: string;
  meetingLocation?: string;
  slides?: string;
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
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] rounded-xl p-8 border h-[42rem]`}
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
          {slides && (
            <CardItem
              translateZ={20}
              as={Link}
              href={slides}
              target="__blank"
              className="py-2 rounded-xl text-xs font-normal dark:text-white border p-2"
            >
              Download Slides
            </CardItem>
          )}
          {recording && (
            <CardItem
              translateZ={20}
              as={Link}
              href={recording}
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Watch Recording
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}

import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

export default function Meeting({
  title,
  date,
  image,
  description,
  slides,
  recording,
}: {
  title: string;
  date: string;
  image: StaticImageData;
  description: string;
  slides?: string;
  recording?: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-8 border ${slides ? "h-[37rem]" : "h-[37rem]"}`}
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
        <div className="flex justify-left space-x-4 items-center mt-10">
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

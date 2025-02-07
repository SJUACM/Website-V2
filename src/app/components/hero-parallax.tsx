"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import AbetEvent from "../../../public/images/abet_event.jpg";
import AIHackathon1 from "../../../public/images/aiHackathon1.jpg";
import AIHackathon2 from "../../../public/images/aiHackathon6.jpg";
import EYPic from "../../../public/images/eyPic1.jpg";
import FallKickOff23 from "../../../public/images/fallKickOff23.jpg";
import SAPOffice from "../../../public/images/sap_office.jpg";
import Kickoff22 from "../../../public/images/kickoff22.jpg";
import HSHackathon from "../../../public/images/hs_hackathon.jpg";
import IntroToWebDev from "../../../public/images/introWebDev.jpg";
import PythonMalware from "../../../public/images/PythonMalwareDevPic.jpg";
import ResearchMeeting from "../../../public/images/research.jpg";
import SWEInterviewPrep from "../../../public/images/sweInterviewPrep.jpg";
import revEng from "../../../public/images/revEng.jpg";
import SAPPic2 from "../../../public/images/sapPic2.jpg";
import Spring2024Kickoff from "../../../public/images/spring2024Kickoff.jpg";
import LabPic1 from "../../../public/images/lab_pic1.jpg";
import LabPic2 from "../../../public/images/lab_pic2.jpg";
import LabPic9 from "../../../public/images/lab_pic9.jpg";

export default function Parallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Headstarter x SJU ACM AI Hackathon",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: AIHackathon1,
  },
  {
    title: "SAP Office Hours",
    link: "https://www.sap.com/community/groups/office-hours/",
    thumbnail: SAPOffice,
  },
  {
    title: "Kickoff 2022",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: Kickoff22,
  },
  {
    title: "EY Office Visit",
    link: "https://www.ey.com/",
    thumbnail: EYPic,
  },
  {
    title: "SJU ABET",
    link: "https://abet.sju.edu/",
    thumbnail: AbetEvent,
  },
  {
    title: "Headstarter x SJU ACM AI Hackathon",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: AIHackathon2,
  },
  {
    title: "Fall Kickoff 2023",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: FallKickOff23,
  },
  {
    title: "Headstarter x SJU ACM Hackathon",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: HSHackathon,
  },
  {
    title: "Intro to Web Dev",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: IntroToWebDev,
  },
  {
    title: "Python Malware Development",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: PythonMalware,
  },
  {
    title: "Research Meeting",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: ResearchMeeting,
  },
  {
    title: "Reverse Engineering",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: revEng,
  },
  {
    title: "SAP",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: SAPPic2,
  },
  {
    title: "Spring 2024 Kickoff",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: Spring2024Kickoff,
  },
  {
    title: "Lab Pic 1",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: LabPic1,
  },
  {
    title: "Lab Pic 2",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: LabPic2,
  },
  {
    title: "SWE Interview Prep",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: SWEInterviewPrep,
  },
  {
    title: "Lab Pic 9",
    link: "https://www.facebook.com/events/12107000000000000/",
    thumbnail: LabPic9,
  },
];

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: StaticImageData;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="h-[350vh] py-80 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Your community for <br /> all things Tech
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        SJU ACM is a student-run organization that is dedicated to providing a
        welcoming and supportive community for students and professionals alike.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: StaticImageData;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

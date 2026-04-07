import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "./components/background-beam";
import { Navbar } from "./components/navbar";
import ParallaxWrapper from "./components/hero-parallax-wrapper";
import UpcomingMeetings from "./components/upcoming-meetings";
import styles from "./styles/customFont.module.css";
import { DiscordButton } from "./components/discord-button";
import InfoSectionClient from "./components/info-section";
import LeadershipSectionClient from "./components/leadership-section";
import ResourcesSectionClient from "./components/resources-section";
import LogoSlider, { workedAtLogos, partnerLogos } from "./components/logo-slider";
import sjuLogo from "../../public/images/sjulogo.png";

export const metadata = {
  other: {
    preload: [
      { as: "image", href: "/images/sjulogo.png" },
      { as: "image", href: "/images/SJU_ACM_Logo.png" },
    ],
  },
};

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-between p-0 overflow-hidden"
      suppressHydrationWarning
    >
      <div className="z-50 w-full max-w-5xl items-center justify-between font-poppins text-sm lg:flex p-2 xs:p-3 sm:p-4 md:p-24">
        <div className="flex h-16 xs:h-20 md:h-24 w-full justify-center bg-gradient-to-t from-black via-black lg:static lg:size-auto lg:bg-none">
          <Navbar />
        </div>
      </div>

      <div className="pt-16 xs:pt-20 md:pt-24 space-y-4 text-center w-full px-4 md:px-0 max-w-7xl mx-auto">
        {/* Title Structure for both Mobile and Desktop */}
        <div className="flex flex-col items-center justify-center min-h-[25vh] xs:min-h-[30vh] md:min-h-[40vh] space-y-4 mb-6 md:mb-8">
          <div className="w-[120px] xs:w-[150px] md:w-[180px] mb-2">
            <Image
              src={sjuLogo}
              alt="St. John's University Logo"
              width={180}
              height={180}
              priority={true}
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-3 md:space-y-4">
            <h1
              className={`text-3xl xs:text-4xl md:text-5xl font-bold ${styles.customFont}`}
            >
              ACM Student Chapter
            </h1>
            <h3 className="text-base xs:text-lg md:text-xl mt-2 px-4">
              STJ&apos;s Premier Organization for Computer Science and Cyber
              Security
            </h3>
            <div className="flex flex-row items-center justify-center pt-4 md:pt-6">
              <DiscordButton />
            </div>
          </div>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[200px] xs:before:h-[300px] md:before:h-[400px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] xs:after:h-[180px] md:after:h-[280px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-900 after:via-[#de2307] after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-red-700 before:opacity-10 after:opacity-40 sm:before:w-[480px] sm:after:w-[340px] before:lg:h-[360px] text-4xl text-center"></div>
      </div>

      <BackgroundBeams />

      <div className="w-screen overflow-hidden left-0 right-0 -ml-[calc(50vw-50%)]">
        <ParallaxWrapper />
      </div>

      <div className="w-full md:-mt-[30vh] relative z-10">
        <LogoSlider heading="Our Members Have Worked At:" logos={workedAtLogos} />
        <LogoSlider heading="We've Partnered With:" logos={partnerLogos} reverse />
      </div>

      <div className="container-fluid py-2 md:py-8">
        <UpcomingMeetings />
      </div>

      <div className="container-fluid py-2 md:py-8">
        <InfoSectionClient />
      </div>

      <div className="container-fluid py-2 md:py-8">
        <LeadershipSectionClient />
      </div>

      <div className="container-fluid py-2 md:py-8">
        <ResourcesSectionClient />
      </div>

      <div className="pb-2 md:pb-8 safe-bottom"></div>
    </main>
  );
}

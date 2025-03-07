import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "./components/background-beam";
import { Navbar } from "./components/navbar";
import ParallaxWrapper from "./components/hero-parallax-wrapper";
import UpcomingMeetings from "./components/upcoming-meetings";
import InfoSection from "./components/info-section";
import LeadershipSection from "./components/leadership-section";
import ResourcesSection from "./components/resources-section";
import styles from "./styles/customFont.module.css";

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
              src="/images/sjulogo.png"
              alt="St. John's University Logo"
              width={180}
              height={180}
              className="w-full h-auto"
              priority
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
              <button className="z-10 relative inline-flex h-10 xs:h-12 md:h-14 w-[120px] xs:w-[140px] md:w-[150px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs xs:text-sm font-medium text-white backdrop-blur-3xl">
                  <a
                    href="https://discord.gg/X5Qkx4hbNe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                  >
                    Join Discord
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[200px] xs:before:h-[300px] md:before:h-[400px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] xs:after:h-[180px] md:after:h-[280px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-900 after:via-[#de2307] after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-red-700 before:opacity-10 after:opacity-40 sm:before:w-[480px] sm:after:w-[340px] before:lg:h-[360px] text-4xl text-center"></div>
      </div>

      <BackgroundBeams />

      <div className="w-screen overflow-hidden left-0 right-0 -ml-[calc(50vw-50%)]">
        <ParallaxWrapper />
      </div>

      <div className="container-fluid py-2 md:py-8 -mt-[20vh] xs:-mt-[25vh] md:-mt-[30vh]">
        <UpcomingMeetings />
      </div>

      <div className="container-fluid py-2 md:py-8">
        <InfoSection />
      </div>

      <div className="container-fluid py-2 md:py-8">
        <LeadershipSection />
      </div>

      <div className="container-fluid py-2 md:py-8">
        <ResourcesSection />
      </div>

      <div className="pb-2 md:pb-8 safe-bottom"></div>
    </main>
  );
}

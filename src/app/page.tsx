"use client";

import Image from "next/image";
import { BackgroundBeams } from "./components/background-beam";
import { Navbar } from "./components/navbar";
import Parallax from "./components/hero-parallax";
import UpcomingMeetings from "./components/upcoming-meetings";
import InfoSection from "./components/info-section";
import LeadershipSection from "./components/leadership-section";
import ResourcesSection from "./components/resources-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-50 w-full max-w-5xl items-center justify-between font-poppins text-sm lg:flex">
        <div className="flex h-24 w-full justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Navbar />
        </div>
      </div>

      <div className="pt-48 space-y-4 text-center">
        <h1 className="text-4xl font-semibold">
          St. John&apos;s University ACM Student Chapter
        </h1>
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[400px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#de2307] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[340px] before:lg:h-[360px text-4xl text-center"></div>

        <h3 className="text-xl">
          SJU&apos;s Premier Organization for Computer Science and Cyber
          Security
        </h3>

        <div className="flex flex-row items-center justify-center pt-8">
          <button className="z-10 relative inline-flex h-14 w-[150px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a
                href="https://discord.gg/EDFY78hrP5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </span>
          </button>

          {/* <input
          type="text"
          placeholder="Email Address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 bg-neutral-900 placeholder:text-neutral-700 p-4"
        /> */}
        </div>
      </div>

      <BackgroundBeams />
      <Parallax />
      <UpcomingMeetings />
      <InfoSection />
      <LeadershipSection />
      <ResourcesSection />
      <div className="pb-40"></div>
    </main>
  );
}

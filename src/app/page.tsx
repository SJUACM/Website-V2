import Image from "next/image";
import { BackgroundBeams } from "./components/background-beam";
import { Navbar } from "./components/navbar";
import Parallax from "./components/hero-parallax";
import UpcomingMeetings from "./components/upcoming-meetings";
import InfoSection from "./components/info-section";
import LeadershipSection from "./components/leadership-section";
import ResourcesSection from "./components/resources-section";
import styles from "./styles/customFont.module.css";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-between p-4 md:p-24"
      suppressHydrationWarning
    >
      <div className="z-50 w-full max-w-5xl items-center justify-between font-poppins text-sm lg:flex">
        <div className="flex h-24 w-full justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Navbar />
        </div>
      </div>

      <div className="pt-24 md:pt-24 space-y-4 text-center w-full px-4 md:px-0 max-w-7xl mx-auto">
        {/* Title Structure for both Mobile and Desktop */}
        <div className="flex flex-col items-center justify-center min-h-[40vh] md:min-h-[50vh] space-y-4">
          <div className="w-[150px] md:w-[180px] mb-2">
            <Image
              src="/images/sjulogo.png"
              alt="St. John's University Logo"
              width={180}
              height={180}
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-4">
            <h1 className={`text-4xl md:text-5xl font-bold ${styles.customFont}`}>
              ACM Student Chapter
            </h1>
            <h3 className="text-lg md:text-xl">
              STJ&apos;s Premier Organization for Computer Science and Cyber Security
            </h3>
            <div className="flex flex-row items-center justify-center pt-4">
              <button className="z-10 relative inline-flex h-12 md:h-14 w-[140px] md:w-[150px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a
                    href="https://discord.gg/8EJVY5Hq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Discord
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] md:before:h-[400px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] md:after:h-[280px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#de2307] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[340px] before:lg:h-[360px] text-4xl text-center"></div>
      </div>

      <BackgroundBeams />

      <div className="w-full overflow-hidden">
        <Parallax />
      </div>

      <div className="py-0 md:py-24 w-full">
        <UpcomingMeetings />
      </div>

      <div className="py-4 md:py-24 w-full">
        <InfoSection />
      </div>

      <div className="py-4 md:py-24 w-full">
        <LeadershipSection />
      </div>

      <div className="py-4 md:py-24 w-full">
        <ResourcesSection />
      </div>

      <div className="pb-10 md:pb-40"></div>
    </main>
  );
}

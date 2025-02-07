"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faLaptopCode, 
  faVideo,
  faExternalLinkAlt 
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CardBody, CardContainer, CardItem } from "../components/3d-card";

interface Resource {
  title: string;
  description: string;
  link: string;
  icon?: IconProp;
}

const interviewResources: Resource[] = [
  {
    title: "Python Course for Beginners",
    description: "A 4-hour-long free course that teaches you all the Python fundamentals.",
    link: "https://www.youtube.com/watch?v=rfscVS0vtbw",
    icon: faCode,
  },
  {
    title: "NeetCode",
    description: "One of the best websites to use for technical interview prep. NeetCode provides a roadmap to help you practice for those interviews.",
    link: "https://www.youtube.com/c/neetcode",
    icon: faLaptopCode,
  },
  {
    title: "HackerRank",
    description: "A website that provides certification exams for various programming languages and frameworks.",
    link: "https://www.hackerrank.com/skills-verification",
    icon: faCode,
  },
  {
    title: "LeetCode",
    description: "The most popular platform for technical interview preparation with a vast collection of coding problems.",
    link: "https://leetcode.com",
    icon: faCode,
  },
  {
    title: "Clément Mihailescu",
    description: "Clément, a former Google and Facebook engineer, shares videos on tech interview prep, career tips, and business insights.",
    link: "https://www.youtube.com/channel/UCaO6VoaYJv4kS-TQO_M-N_g/featured",
    icon: faLaptopCode,
  },
  {
    title: "Learning Python from Java",
    description: "Learn how to adapt what you've learned in Java to Python.",
    link: "https://www.youtube.com/watch?v=xLovcfIugy8",
    icon: faCode,
  }
];

const helpfulWebsites: Resource[] = [
  {
    title: "TryHackMe",
    description: "Learn cybersecurity through hands-on exercises",
    link: "https://tryhackme.com",
  },
  {
    title: "HackTheBox",
    description: "Cybersecurity training platform",
    link: "https://www.hackthebox.com",
  },
  {
    title: "freeCodeCamp",
    description: "Learn to code for free",
    link: "https://www.freecodecamp.org",
  },
  {
    title: "Virtual Work Experience",
    description: "Work experience programs that give students a genuine career advantage with Fortune 500 companies!",
    link: "https://www.theforage.com/",
  },
  {
    title: "Google Career Certificates",
    description: "Flexible online training designed to put you on the fast track to jobs in high-growth fields!",
    link: "https://grow.google/certificates/",
  },
  {
    title: "Learn Python, R, and SQL",
    description: "Learn the skills you need at your own pace, with topics ranging from data science and machine learning!",
    link: "https://www.datacamp.com/",
  },
  {
    title: "Verified Tech Salaries",
    description: "Search through compensation data for full-time positions & internships for top tech companies.",
    link: "https://www.levels.fyi/?compare=Datadog,Capital%20One,Bloomberg&track=Software%20Engineer",
  },
  {
    title: "PCAP: Programming Essentials in Python",
    description: "Free, Self-Paced Course for Python.",
    link: "https://www.netacad.com/courses/python-essentials-1?courseLang=en-US",
  },
  {
    title: "CompTIA Security+ Course",
    description: "Prepare for your Security+ exam with over 177 free training videos from Professor Messer!",
    link: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/",
  }
];

const youtubeChannels: Resource[] = [
  {
    title: "NetworkChuck",
    description: "Cybersecurity and networking tutorials",
    link: "https://www.youtube.com/@NetworkChuck",
    icon: faVideo,
  },
  {
    title: "John Hammond",
    description: "Cybersecurity content and CTF walkthroughs",
    link: "https://www.youtube.com/@_JohnHammond",
    icon: faVideo,
  },
  {
    title: "Bukola",
    description: "Networking and cybersecurity tutorials",
    link: "https://www.youtube.com/c/Bukola1",
    icon: faVideo,
  },
  {
    title: "Fireship",
    description: "Quick, practical web development and programming tutorials",
    link: "https://www.youtube.com/@Fireship",
    icon: faVideo,
  },
];

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[280px] h-[200px] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-200 mb-4"
        >
          {resource.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-400 text-sm mb-4"
        >
          {resource.description}
        </CardItem>
        <CardItem translateZ="40" className="absolute bottom-4 right-4">
          <a
            href={resource.link}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-300 hover:text-red-500 transition-colors"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
          </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default function Resources() {
  return (
    <div className="mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-8">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Resources</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-16">
          STJ ACM provides a collection of tools and materials to help students develop their skills. Whether you're preparing for interviews, expanding your knowledge, or looking for expert insights, these resources will support your learning journey.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <button 
            className="px-10 py-4 rounded-full border-0 bg-white text-black shadow-sm 
                     uppercase tracking-wider text-sm transition-all duration-500 ease-in-out
                     hover:tracking-widest hover:bg-red-500 hover:text-white
                     hover:shadow-[0_7px_29px_0px_rgba(239,68,68,0.75)]
                     active:transform active:translate-y-2.5 active:shadow-none
                     active:transition-[100ms]"
            onClick={() => document.getElementById('interview-prep')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Technical Interview Prep
          </button>

          <button 
            className="px-10 py-4 rounded-full border-0 bg-white text-black shadow-sm 
                     uppercase tracking-wider text-sm transition-all duration-500 ease-in-out
                     hover:tracking-widest hover:bg-red-500 hover:text-white
                     hover:shadow-[0_7px_29px_0px_rgba(239,68,68,0.75)]
                     active:transform active:translate-y-2.5 active:shadow-none
                     active:transition-[100ms]"
            onClick={() => document.getElementById('helpful-websites')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Helpful Websites
          </button>

          <button 
            className="px-10 py-4 rounded-full border-0 bg-white text-black shadow-sm 
                     uppercase tracking-wider text-sm transition-all duration-500 ease-in-out
                     hover:tracking-widest hover:bg-red-500 hover:text-white
                     hover:shadow-[0_7px_29px_0px_rgba(239,68,68,0.75)]
                     active:transform active:translate-y-2.5 active:shadow-none
                     active:transition-[100ms]"
            onClick={() => document.getElementById('youtube-channels')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Youtube Channels
          </button>
        </div>

        {/* Interview Prep Section */}
        <div id="interview-prep" className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8">Technical Interview Prep</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviewResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>

        {/* Helpful Websites Section */}
        <div id="helpful-websites" className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8">Helpful Websites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpfulWebsites.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>

        {/* YouTube Channels Section */}
        <div id="youtube-channels">
          <h2 className="text-3xl font-semibold text-white mb-8">Recommended YouTube Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeChannels.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

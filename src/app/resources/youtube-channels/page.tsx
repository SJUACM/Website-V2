"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CardBody, CardContainer, CardItem } from "../../components/3d-card";

interface Resource {
  title: string;
  description: string;
  link: string;
  icon?: IconProp;
}

const youtubeChannels = [
  {
    title: "NetworkChuck",
    description: "Engaging cybersecurity and networking tutorials. Perfect for beginners looking to start their cybersecurity journey.",
    link: "https://www.youtube.com/@NetworkChuck",
  },
  {
    title: "John Hammond",
    description: "In-depth cybersecurity content, CTF walkthroughs, and malware analysis. Great for hands-on learning.",
    link: "https://www.youtube.com/@_JohnHammond",
  },
  {
    title: "Fireship",
    description: "Quick, practical web development tutorials and tech news. Known for their '100 seconds' series explaining complex topics.",
    link: "https://www.youtube.com/@Fireship",
  },
  {
    title: "ThePrimeagen",
    description: "Advanced programming concepts, vim tutorials, and software engineering career advice from a Netflix engineer.",
    link: "https://www.youtube.com/@ThePrimeagen",
  },
  {
    title: "Traversy Media",
    description: "Comprehensive web development tutorials covering all major frameworks and technologies.",
    link: "https://www.youtube.com/@TraversyMedia",
  },
  {
    title: "David Bombal",
    description: "Networking, cybersecurity, and ethical hacking tutorials. Great for certification prep and practical skills.",
    link: "https://www.youtube.com/@davidbombal",
  },
  {
    title: "Tech With Tim",
    description: "Python programming tutorials, machine learning, and software development projects with practical examples.",
    link: "https://www.youtube.com/@TechWithTim",
  },
  {
    title: "Computerphile",
    description: "Deep dives into computer science concepts, algorithms, and the theory behind modern computing.",
    link: "https://www.youtube.com/@Computerphile",
  },
  {
    title: "FreeCodeCamp",
    description: "Full-length programming courses covering everything from web development to machine learning.",
    link: "https://www.youtube.com/@freecodecamp",
  }
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

export default function YoutubeChannels() {
  return (
    <div className="mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-8">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-white">YouTube Channels</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-16">
          A curated list of educational YouTube channels covering programming, cybersecurity, and computer science concepts. These channels offer high-quality content to supplement your learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeChannels.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLaptopCode, faHandshake, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { 
  faGithub, 
  faLinkedin, 
  faDiscord, 
  faInstagram, 
  faYoutube 
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function About() {
  return (
    <div className="mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-8">
      {/* Hero Section */}
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-12 text-white">About</h1>
        <div className="mb-24">
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-6">
            We are St. John's University's premier organization for Computer Science and Cyber Security. 
            We focus on providing students with hands-on experience, industry connections, and a supportive 
            community of tech enthusiasts.
          </p>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            We aim to enhance the experience of STJ tech students by providing them with a platform to learn, share, and collaborate through our labs and presentations.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="relative p-12 mb-24 bg-gradient-to-r from-black/50 via-black/30 to-black/50 rounded-xl border border-neutral-800/50">
          <h2 className="text-3xl font-semibold text-white mb-12 relative">
            Check Out Our Socials!
            <div className="h-1 w-40 bg-red-500 mx-auto mt-4"></div>
          </h2>
          
          <div className="flex justify-center gap-8 relative">
            <a href="https://github.com/SJUACM" target="_blank" rel="noreferrer" className="group flex flex-col items-center no-underline">
              <div className="p-4 rounded-full bg-black/50 border border-neutral-800 group-hover:border-red-500 transition-colors">
                <FontAwesomeIcon icon={faGithub as IconProp} className="text-3xl text-neutral-300 group-hover:text-red-500 transition-all transform group-hover:-translate-y-1" />
              </div>
              <span className="mt-2 text-sm text-neutral-400 group-hover:text-red-500 transition-colors">GitHub</span>
            </a>

            <a href="https://www.linkedin.com/company/stjacm/posts/?feedView=all" target="_blank" rel="noreferrer" className="group flex flex-col items-center no-underline">
              <div className="p-4 rounded-full bg-black/50 border border-neutral-800 group-hover:border-red-500 transition-colors">
                <FontAwesomeIcon icon={faLinkedin as IconProp} className="text-3xl text-neutral-300 group-hover:text-red-500 transition-all transform group-hover:-translate-y-1" />
              </div>
              <span className="mt-2 text-sm text-neutral-400 group-hover:text-red-500 transition-colors">LinkedIn</span>
            </a>

            <a href="https://discord.gg/Bcwm3e8m" target="_blank" rel="noreferrer" className="group flex flex-col items-center no-underline">
              <div className="p-4 rounded-full bg-black/50 border border-neutral-800 group-hover:border-red-500 transition-colors">
                <FontAwesomeIcon icon={faDiscord as IconProp} className="text-3xl text-neutral-300 group-hover:text-red-500 transition-all transform group-hover:-translate-y-1" />
              </div>
              <span className="mt-2 text-sm text-neutral-400 group-hover:text-red-500 transition-colors">Discord</span>
            </a>

            <a href="https://www.instagram.com/stj.acm/" target="_blank" rel="noreferrer" className="group flex flex-col items-center no-underline">
              <div className="p-4 rounded-full bg-black/50 border border-neutral-800 group-hover:border-red-500 transition-colors">
                <FontAwesomeIcon icon={faInstagram as IconProp} className="text-3xl text-neutral-300 group-hover:text-red-500 transition-all transform group-hover:-translate-y-1" />
              </div>
              <span className="mt-2 text-sm text-neutral-400 group-hover:text-red-500 transition-colors">Instagram</span>
            </a>

            <a href="https://www.youtube.com/channel/UCuIcwbZDPnZYNQ0pFhmaNwQ" target="_blank" rel="noreferrer" className="group flex flex-col items-center no-underline">
              <div className="p-4 rounded-full bg-black/50 border border-neutral-800 group-hover:border-red-500 transition-colors">
                <FontAwesomeIcon icon={faYoutube as IconProp} className="text-3xl text-neutral-300 group-hover:text-red-500 transition-all transform group-hover:-translate-y-1" />
              </div>
              <span className="mt-2 text-sm text-neutral-400 group-hover:text-red-500 transition-colors">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <FeatureCard 
          icon={faUsers as IconProp}
          title="Community"
          description="Join a vibrant community of tech enthusiasts, developers, and cybersecurity experts who share your passion for technology."
        />
        <FeatureCard 
          icon={faLaptopCode as IconProp}
          title="Hands-on Learning"
          description="Participate in workshops, hackathons, and projects that give you practical experience with cutting-edge technologies."
        />
        <FeatureCard 
          icon={faHandshake as IconProp}
          title="Industry Connections"
          description="Connect with industry professionals, alumni, and potential employers through our network of partnerships."
        />
        <FeatureCard 
          icon={faTrophy as IconProp}
          title="Growth Opportunities"
          description="Develop leadership skills, build your portfolio, and prepare for a successful career in technology."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: IconProp; title: string; description: string }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] p-8 rounded-xl border">
        <CardItem
          translateZ="50"
          className="text-3xl text-red-500 mb-4"
        >
          <FontAwesomeIcon icon={icon} />
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-xl font-bold text-white mb-2"
        >
          {title}
        </CardItem>
        <CardItem
          translateZ="40"
          className="text-neutral-300"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

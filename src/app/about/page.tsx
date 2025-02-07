"use client";
import React from "react";
import Image from "next/image";
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
import LabPic from "../../../public/images/ctf24.jpg";

export default function About() {
  return (
    <div className="mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-8">
      <div className="p-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-8 text-white">About</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-neutral-300 leading-relaxed mb-6">
              We are St. John's University's premier organization for Computer Science and Cyber Security. 
              We focus on providing students with hands-on experience, industry connections, and a supportive 
              community of tech enthusiasts.
            </p>
            <p className="text-xl text-neutral-300 leading-relaxed">
              We aim to enhance the experience of STJ tech students by providing them with a platform to learn, share, and collaborate through our labs and presentations.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mb-20 max-w-6xl mx-auto">
          <FeatureCard 
            icon={faUsers as IconProp}
            title="Community"
            description="Join a community of tech enthusiasts, developers, and cybersecurity experts!"
          />
          <FeatureCard 
            icon={faLaptopCode as IconProp}
            title="Hands-on Learning"
            description="Gain hands-on experience through workshops, hackathons, and projects!"
          />
          <FeatureCard 
            icon={faHandshake as IconProp}
            title="Industry Connections"
            description="Connect with industry professionals, alumni, and employers through us!"
          />
          <FeatureCard 
            icon={faTrophy as IconProp}
            title="Growth Opportunities"
            description="Develop leadership skills, build your portfolio, and prepare for a career!"
          />
        </div>

        {/* Meeting Info Section */}
        <div className="relative p-12 mb-20 bg-gradient-to-r from-black/50 via-black/30 to-black/50 rounded-xl border border-neutral-800/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-50"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-left space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Join Our Community</h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Operating under the Collins College of Professional Studies, SJU ACM is moderated by Dr. Joan DeBello and is supported by Professors across the Computer Science & Cyber Security departments.
              </p>
              
              <div className="space-y-4 bg-black/30 p-6 rounded-lg border border-neutral-800 backdrop-blur-sm">
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Our meetings are held on Thursdays during Common Hour (2:00 - 3:00 PM) in the Cyber Security Lab (Room 2-140A in the 2nd Floor of St. Augustine)
                </p>
                
                <p className="text-lg text-neutral-300 leading-relaxed font-medium">
                  Our meetings are open to everyone, regardless of major or experience. We welcome everyone to join our community and share our love for technology!
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden group">
              <Image
                src={LabPic}
                alt="SJU Cyber Security Lab"
                fill
                className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="relative p-12 bg-gradient-to-r from-black/50 via-black/30 to-black/50 rounded-xl border border-neutral-800/50">
          <h2 className="text-3xl font-semibold text-white mb-12 relative">
            Connect With Us
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
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: IconProp; title: string; description: string }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] p-6 rounded-xl border h-[200px] w-full max-w-[280px] mx-auto">
        <CardItem
          translateZ="50"
          className="text-xl text-red-500 mb-3"
        >
          <FontAwesomeIcon icon={icon} />
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-base font-bold text-white mb-2"
        >
          {title}
        </CardItem>
        <CardItem
          translateZ="40"
          className="text-sm text-neutral-300 leading-relaxed"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

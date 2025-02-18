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
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Hero Section */}
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
          About Us
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 px-6 md:px-4">
          <p className="text-base md:text-xl text-neutral-300 leading-relaxed">
            We are St. John's University's premier organization for Computer Science and Cyber Security. 
            We focus on providing students with hands-on experience, industry connections, and a supportive 
            community of tech enthusiasts.
          </p>
          <p className="text-base md:text-xl text-neutral-300 leading-relaxed">
            We aim to enhance the experience of STJ tech students by providing them with a platform to learn, 
            share, and collaborate through our labs and presentations.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 md:mt-12 mb-12 md:mb-20 max-w-6xl mx-auto">
        {/* Desktop View (3D Cards) - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
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

        {/* Mobile View (Simple List) - Hidden on desktop */}
        <div className="space-y-6 px-4 md:hidden">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            What We Offer
          </h2>
          <FeatureItem 
            icon={faUsers as IconProp}
            title="Community"
            description="Join a community of tech enthusiasts, developers, and cybersecurity experts!"
          />
          <FeatureItem 
            icon={faLaptopCode as IconProp}
            title="Hands-on Learning"
            description="Gain hands-on experience through workshops, hackathons, and projects!"
          />
          <FeatureItem 
            icon={faHandshake as IconProp}
            title="Industry Connections"
            description="Connect with industry professionals, alumni, and employers through us!"
          />
          <FeatureItem 
            icon={faTrophy as IconProp}
            title="Growth Opportunities"
            description="Develop leadership skills, build your portfolio, and prepare for a career!"
          />
        </div>
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

      {/* Social Links Section */}
      <div className="bg-black/30 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 md:p-8 mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          Connect With Us
          <div className="h-1 w-16 md:w-20 bg-red-500 mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-8 justify-items-center">
          {/* GitHub */}
          <a href="https://github.com/SJUACM" target="_blank" rel="noreferrer" 
             className="group flex flex-col items-center no-underline">
            <div className="p-2 md:p-4 rounded-full bg-black/50 border border-neutral-800 
                          group-hover:border-red-500 transition-all duration-300 
                          group-hover:scale-110">
              <FontAwesomeIcon icon={faGithub as IconProp} 
                             className="text-xl md:text-3xl text-neutral-300 
                                      group-hover:text-red-500 transition-colors" />
            </div>
            <span className="mt-1 md:mt-2 text-xs md:text-sm text-neutral-400 
                           group-hover:text-red-500 transition-colors">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/stjacm/posts/?feedView=all" 
             target="_blank" rel="noreferrer" 
             className="group flex flex-col items-center no-underline">
            <div className="p-2 md:p-4 rounded-full bg-black/50 border border-neutral-800 
                          group-hover:border-red-500 transition-all duration-300 
                          group-hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin as IconProp} 
                             className="text-xl md:text-3xl text-neutral-300 
                                      group-hover:text-red-500 transition-colors" />
            </div>
            <span className="mt-1 md:mt-2 text-xs md:text-sm text-neutral-400 
                           group-hover:text-red-500 transition-colors">LinkedIn</span>
          </a>

          {/* Discord */}
          <a href="https://discord.gg/Bcwm3e8m" target="_blank" rel="noreferrer" 
             className="group flex flex-col items-center no-underline">
            <div className="p-2 md:p-4 rounded-full bg-black/50 border border-neutral-800 
                          group-hover:border-red-500 transition-all duration-300 
                          group-hover:scale-110">
              <FontAwesomeIcon icon={faDiscord as IconProp} 
                             className="text-xl md:text-3xl text-neutral-300 
                                      group-hover:text-red-500 transition-colors" />
            </div>
            <span className="mt-1 md:mt-2 text-xs md:text-sm text-neutral-400 
                           group-hover:text-red-500 transition-colors">Discord</span>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/stj.acm/" target="_blank" rel="noreferrer" 
             className="group flex flex-col items-center no-underline">
            <div className="p-2 md:p-4 rounded-full bg-black/50 border border-neutral-800 
                          group-hover:border-red-500 transition-all duration-300 
                          group-hover:scale-110">
              <FontAwesomeIcon icon={faInstagram as IconProp} 
                             className="text-xl md:text-3xl text-neutral-300 
                                      group-hover:text-red-500 transition-colors" />
            </div>
            <span className="mt-1 md:mt-2 text-xs md:text-sm text-neutral-400 
                           group-hover:text-red-500 transition-colors">Instagram</span>
          </a>

          {/* YouTube */}
          <a href="https://www.youtube.com/channel/UCuIcwbZDPnZYNQ0pFhmaNwQ" 
             target="_blank" rel="noreferrer" 
             className="group flex flex-col items-center no-underline">
            <div className="p-2 md:p-4 rounded-full bg-black/50 border border-neutral-800 
                          group-hover:border-red-500 transition-all duration-300 
                          group-hover:scale-110">
              <FontAwesomeIcon icon={faYoutube as IconProp} 
                             className="text-xl md:text-3xl text-neutral-300 
                                      group-hover:text-red-500 transition-colors" />
            </div>
            <span className="mt-1 md:mt-2 text-xs md:text-sm text-neutral-400 
                           group-hover:text-red-500 transition-colors">YouTube</span>
          </a>
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

function FeatureItem({ icon, title, description }: { icon: IconProp; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
      <div className="bg-red-500/10 p-3 rounded-lg">
        <FontAwesomeIcon 
          icon={icon} 
          className="text-xl text-red-500" 
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-neutral-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

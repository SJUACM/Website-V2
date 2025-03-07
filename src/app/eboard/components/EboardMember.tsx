"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/3d-card";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface EboardMemberProps {
  name: string;
  position: string;
  image: StaticImageData | string;
  description: string;
  linkedin: string;
  github?: string;
}

export function EboardMember({
  name,
  position,
  image,
  description,
  linkedin,
  github,
}: EboardMemberProps) {
  // Handle both StaticImageData and Contentful image URL
  const imageUrl = typeof image === 'string' ? image : image;

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] w-full sm:w-[280px] h-auto rounded-xl p-6 md:p-4 border flex flex-col">
        {/* Name - Fixed height with line clamp */}
        <CardItem
          translateZ="50"
          className="h-[3rem] mb-2"
        >
          <h3 className="text-2xl md:text-lg font-bold text-neutral-600 dark:text-white line-clamp-2">
            {name}
          </h3>
        </CardItem>

        {/* Image - Fixed height */}
        <CardItem 
          translateZ="100" 
          className="w-full h-[200px] relative"
        >
          <Image
            src={imageUrl}
            fill
            className="object-cover rounded-xl group-hover/card:shadow-xl"
            alt={`${name} - ${position}`}
          />
        </CardItem>

        {/* Position - Fixed height */}
        <CardItem
          as="p"
          translateZ="60"
          className="h-[2rem] flex items-center mt-4 md:mt-3"
        >
          <span className="text-neutral-300 text-xl md:text-md line-clamp-1">
            {position}
          </span>
        </CardItem>

        {/* Description - Flex grow */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-400 text-lg md:text-sm mt-2 flex-grow min-h-[3rem]"
        >
          {description}
        </CardItem>

        {/* Social Links - Fixed height */}
        <CardItem 
          translateZ="40" 
          className="h-[3rem] flex items-center"
        >
          <div className="flex items-center gap-6 md:gap-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <FontAwesomeIcon
                icon={faLinkedin as IconProp}
                className="text-2xl md:text-xl text-neutral-300 hover:text-blue-500 transition-colors"
              />
            </a>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name}'s GitHub profile`}
              >
                <FontAwesomeIcon
                  icon={faGithub as IconProp}
                  className="text-2xl md:text-xl text-neutral-300 hover:text-purple-500 transition-colors"
                />
              </a>
            )}
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

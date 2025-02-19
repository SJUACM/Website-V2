"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Tomas from "../../../public/images/eboard/tomas.png";
import Hinna from "../../../public/images/eboard/hinna.png";
import Richard from "../../../public/images/eboard/richard.png";
import David from "../../../public/images/eboard/david.png";
import Jennifer from "../../../public/images/eboard/jenn.png";
import Jatsu from "../../../public/images/eboard/jatsu.png";
import Geo from "../../../public/images/eboard/geo.png";
import Fahmid from "../../../public/images/eboard/fahmid.png";
import Jake from "../../../public/images/eboard/jake.png";
import Raymond from "../../../public/images/eboard/raymond.png";
import Amrita from "../../../public/images/eboard/amrita.png";
import Benjamin from "../../../public/images/eboard/ben.png";
import Aqueena from "../../../public/images/eboard/aqueena.png";
import Fairooz from "../../../public/images/eboard/fairooz.png";
import Ignacio from "../../../public/images/eboard/ignacio.png";
import Teuta from "../../../public/images/eboard/teuta.png";
import Kat from "../../../public/images/eboard/kat.png";
import Faizan from "../../../public/images/eboard/faizan.png";
import Thomas from "../../../public/images/eboard/thomas.png";
import Ava from "../../../public/images/eboard/ava.png";
import Jade from "../../../public/images/eboard/jade.png";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function Eboard() {
  return (
    <div className="min-h-screen">
      <div className="mt-[-100px] md:mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="p-4 md:p-8">
          {/* Current E-board - Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 mb-12 md:mt-16">
            <EboardMember
              name="Tomas Santos Yciano"
              position="President"
              image={Tomas}
              description="Launch Intern @ EY"
              linkedin="https://www.linkedin.com/in/tjsy/"
              github="https://github.com/tomassantos484"
            />
            <EboardMember
              name="David Rosoff"
              position="Vice President"
              image={David}
              description="Global Threat Emulation @ Sony"
              linkedin="https://www.linkedin.com/in/davidrosoff/"
              github="https://github.com/ThePurpleTux"
            />
            <EboardMember
              name="Hinna Zeejah"
              position="Information Officer"
              image={Hinna}
              description="Google Summer of Code' 24"
              linkedin="https://www.linkedin.com/in/hinna-zeejah/"
              github="https://github.com/HinnaZeejah"
            />
            <EboardMember
              name="Richard Perez"
              position="Treasurer"
              image={Richard}
              description="Lead Instructor, All Star Code"
              linkedin="https://www.linkedin.com/in/richard-perez-jr/"
              github="https://github.com/richardp23"
            />
            <EboardMember
              name="Jennifer Venus"
              position="Social Media Chair"
              image={Jennifer}
              description="Intern @ National Grid"
              linkedin="https://www.linkedin.com/in/jennifervenus/"
              github="https://github.com/jenniferVenus"
            />
            <EboardMember
              name="Gabriel Paredes"
              position="Events Coordinator"
              image={Jatsu}
              description="Co-Captain of the STJ CyberStorm"
              linkedin="https://www.linkedin.com/in/gpred/"
              github="https://github.com/JatsuLC"
            />
            <EboardMember
              name="Geovani Tzul"
              position="Committee Chair"
              image={Geo}
              description="SWE Fellow @ Headstarter"
              linkedin="https://www.linkedin.com/in/geo-tzul/"
              github="https://github.com/NYgeo"
            />
            <EboardMember
              name="Fahmid Zaman"
              position="Committee Chair"
              image={Fahmid}
              description="Pursuing Security+ Certification"
              linkedin="https://www.linkedin.com/in/fahmidzaman/"
            />
          </div>

          {/* Past E-board - Desktop View */}
          <div className="hidden md:block">
            <h2 className="text-3xl font-bold text-center mb-12">Past E-Board Members</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 2024 */}
              <PastEboardMember
                name="Raymond Ramdat"
                position="President"
                year="2024"
                image={Raymond}
                linkedin="https://www.linkedin.com/in/raymondramdat/"
              />
              <PastEboardMember
                name="Jake Enea"
                position="Vice President"
                year="2024"
                image={Jake}
                linkedin="https://www.linkedin.com/in/jakeenea/"
                github="https://github.com/jakeenea51"
              />
              <PastEboardMember
                name="Amrita Kaur"
                position="Events Coordinator"
                year="2024"
                image={Amrita}
                linkedin="https://www.linkedin.com/in/amrita-priya-kaur75/"
              />
              <PastEboardMember
                name="Benjamin Hanim"
                position="Committee Chair"
                year="2024"
                image={Benjamin}
                linkedin="https://www.linkedin.com/in/benjamin-hanim/"
                github="https://github.com/ben45123"
              />
              <PastEboardMember
                name="Aqueena Alexander"
                position="Social Media"
                year="2024"
                image={Aqueena}
                linkedin="https://www.linkedin.com/in/aqueena-alexander/"
              />
              <PastEboardMember
                name="Fairooz Bintye Ehsan"
                position="Events Coordinator"
                year="2024"
                image={Fairooz}
                linkedin="https://www.linkedin.com/in/fairooz-bintye-ehsan/"
              />

              {/* 2023 */}
              <PastEboardMember
                name="Ignacio Sanchez"
                position="Committee Chair"
                year="2023"
                image={Ignacio}
                linkedin="https://www.linkedin.com/in/ignacio-antequera/"
                github="https://github.com/Ignacio-Antequera"
              />
              <PastEboardMember
                name="Teuta Elezaj"
                position="Vice President"
                year="2023"
                image={Teuta}
                linkedin="https://www.linkedin.com/in/teutaelezaj/"
                github="https://github.com/teutaelezaj"
              />
              <PastEboardMember
                name="Katarina Kobetitsch"
                position="Social Media"
                year="2023"
                image={Kat}
                linkedin="https://www.linkedin.com/in/katarina-kobetitsch/"
              />

              {/* 2022 */}
              <PastEboardMember
                name="Faizan Ahmed"
                position="President"
                year="2022"
                image={Faizan}
                linkedin="https://www.linkedin.com/in/faizancodes/"
                github="https://github.com/faizancodes"
              />
              <PastEboardMember
                name="Thomas Latona"
                position="Vice President"
                year="2022"
                image={Thomas}
                linkedin="https://www.linkedin.com/in/thomaslatona/"
              />
              <PastEboardMember
                name="Ava McNevin"
                position="Committee Chair"
                year="2022"
                image={Ava}
                linkedin="https://www.linkedin.com/in/ava-mcnevin/"
              />
              <PastEboardMember
                name="Jade Deo"
                position="Social Media"
                year="2022"
                image={Jade}
                linkedin="https://www.linkedin.com/in/jadedeo/"
              />
            </div>
          </div>

          {/* Mobile View - Adjusted spacing */}
          <div className="md:hidden space-y-8 mt-24">
            <div className="grid grid-cols-1 gap-8">
              {/* Current E-board section */}
              <div className="space-y-8">
                <MobileEboardMember
                  name="Tomas Santos Yciano"
                  position="President"
                  image={Tomas}
                  description="Launch Intern @ EY"
                  linkedin="https://www.linkedin.com/in/tjsy/"
                  github="https://github.com/tomassantos484"
                />
                <MobileEboardMember
                  name="David Rosoff"
                  position="Vice President"
                  image={David}
                  description="Global Threat Emulation @ Sony"
                  linkedin="https://www.linkedin.com/in/davidrosoff/"
                  github="https://github.com/ThePurpleTux"
                />
                <MobileEboardMember
                  name="Hinna Zeejah"
                  position="Information Officer"
                  image={Hinna}
                  description="Google Summer of Code' 24"
                  linkedin="https://www.linkedin.com/in/hinna-zeejah/"
                  github="https://github.com/HinnaZeejah"
                />
                <MobileEboardMember
                  name="Richard Perez"
                  position="Treasurer"
                  image={Richard}
                  description="Lead Instructor, All Star Code"
                  linkedin="https://www.linkedin.com/in/richard-perez-jr/"
                  github="https://github.com/richardp23"
                />
                <MobileEboardMember
                  name="Jennifer Venus"
                  position="Social Media Chair"
                  image={Jennifer}
                  description="Intern @ National Grid"
                  linkedin="https://www.linkedin.com/in/jennifervenus/"
                  github="https://github.com/jenniferVenus"
                />
                <MobileEboardMember
                  name="Gabriel Paredes"
                  position="Events Coordinator"
                  image={Jatsu}
                  description="Co-Captain of the STJ CyberStorm"
                  linkedin="https://www.linkedin.com/in/gpred/"
                  github="https://github.com/JatsuLC"
                />
                <MobileEboardMember
                  name="Geovani Tzul"
                  position="Committee Chair"
                  image={Geo}
                  description="SWE Fellow @ Headstarter"
                  linkedin="https://www.linkedin.com/in/geo-tzul/"
                  github="https://github.com/NYgeo"
                />
                <MobileEboardMember
                  name="Fahmid Zaman"
                  position="Committee Chair"
                  image={Fahmid}
                  description="Pursuing Security+ Certification"
                  linkedin="https://www.linkedin.com/in/fahmidzaman/"
                />
              </div>

              {/* Past E-board section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Past E-Board Members</h2>
                <div className="space-y-6">
                  <MobilePastEboardMember
                    name="Raymond Ramdat"
                    position="President"
                    year="2024"
                    image={Raymond}
                    linkedin="https://www.linkedin.com/in/raymondramdat/"
                  />
                  <MobilePastEboardMember
                    name="Jake Enea"
                    position="Vice President"
                    year="2024"
                    image={Jake}
                    linkedin="https://www.linkedin.com/in/jakeenea/"
                    github="https://github.com/jakeenea51"
                  />
                  <MobilePastEboardMember
                    name="Amrita Kaur"
                    position="Events Coordinator"
                    year="2024"
                    image={Amrita}
                    linkedin="https://www.linkedin.com/in/amrita-priya-kaur75/"
                  />
                  <MobilePastEboardMember
                    name="Benjamin Hanim"
                    position="Committee Chair"
                    year="2024"
                    image={Benjamin}
                    linkedin="https://www.linkedin.com/in/benjamin-hanim/"
                    github="https://github.com/ben45123"
                  />
                  <MobilePastEboardMember
                    name="Aqueena Alexander"
                    position="Social Media"
                    year="2024"
                    image={Aqueena}
                    linkedin="https://www.linkedin.com/in/aqueena-alexander/"
                  />
                  <MobilePastEboardMember
                    name="Fairooz Bintye Ehsan"
                    position="Events Coordinator"
                    year="2024"
                    image={Fairooz}
                    linkedin="https://www.linkedin.com/in/fairooz-bintye-ehsan/"
                  />
                  <MobilePastEboardMember
                    name="Ignacio Sanchez"
                    position="Committee Chair"
                    year="2023"
                    image={Ignacio}
                    linkedin="https://www.linkedin.com/in/ignacio-antequera/"
                    github="https://github.com/Ignacio-Antequera"
                  />
                  <MobilePastEboardMember
                    name="Teuta Elezaj"
                    position="Vice President"
                    year="2023"
                    image={Teuta}
                    linkedin="https://www.linkedin.com/in/teutaelezaj/"
                    github="https://github.com/teutaelezaj"
                  />
                  <MobilePastEboardMember
                    name="Katarina Kobetitsch"
                    position="Social Media"
                    year="2023"
                    image={Kat}
                    linkedin="https://www.linkedin.com/in/katarina-kobetitsch/"
                  />
                  <MobilePastEboardMember
                    name="Faizan Ahmed"
                    position="President"
                    year="2022"
                    image={Faizan}
                    linkedin="https://www.linkedin.com/in/faizancodes/"
                    github="https://github.com/faizancodes"
                  />
                  <MobilePastEboardMember
                    name="Thomas Latona"
                    position="Vice President"
                    year="2022"
                    image={Thomas}
                    linkedin="https://www.linkedin.com/in/thomaslatona/"
                  />
                  <MobilePastEboardMember
                    name="Ava McNevin"
                    position="Committee Chair"
                    year="2022"
                    image={Ava}
                    linkedin="https://www.linkedin.com/in/ava-mcnevin/"
                  />
                  <MobilePastEboardMember
                    name="Jade Deo"
                    position="Social Media"
                    year="2022"
                    image={Jade}
                    linkedin="https://www.linkedin.com/in/jadedeo/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EboardMember({
  name,
  position,
  image,
  description,
  linkedin,
  github,
}: {
  name: string;
  position: string;
  image: StaticImageData;
  description: string;
  linkedin: string;
  github?: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] w-full sm:w-[280px] min-h-[580px] sm:min-h-0 sm:h-[400px] rounded-xl p-6 md:p-4 border`}
      >
        <div className="flex flex-col h-full">
          <CardItem
            translateZ="50"
            className="text-2xl md:text-lg font-bold text-neutral-600 dark:text-white mb-4 md:mb-2"
          >
            {name}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-2">
            <Image
              src={image}
              height="1000"
              width="1000"
              className="h-[260px] md:h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={name}
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-300 text-xl md:text-md mt-4 md:mt-3"
          >
            {position}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-400 text-lg md:text-sm mt-2 md:mt-1"
          >
            {description}
          </CardItem>
          <CardItem translateZ="40" className="mt-auto pt-6 md:pt-4">
            <div className="flex items-center justify-start gap-6 md:gap-4 pb-2 md:pb-0">
              <a href={linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin as IconProp}
                  className="text-2xl md:text-xl text-neutral-300 hover:text-blue-500 transition-colors"
                />
              </a>
              {github && (
                <a href={github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub as IconProp}
                    className="text-2xl md:text-xl text-neutral-300 hover:text-purple-500 transition-colors"
                  />
                </a>
              )}
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

function PastEboardMember({
  name,
  position,
  year,
  image,
  linkedin,
  github,
}: {
  name: string;
  position: string;
  year: string;
  image: StaticImageData;
  linkedin: string;
  github?: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] w-full sm:w-[280px] min-h-[580px] sm:min-h-0 sm:h-[400px] rounded-xl p-6 md:p-4 border`}
      >
        <div className="flex flex-col h-full">
          <CardItem
            translateZ="50"
            className="text-2xl md:text-lg font-bold text-neutral-600 dark:text-white mb-4 md:mb-2"
          >
            {name}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-2">
            <Image
              src={image}
              height="1000"
              width="1000"
              className="h-[260px] md:h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={name}
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-300 text-xl md:text-md mt-4 md:mt-3"
          >
            {position}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-400 text-lg md:text-sm mt-2 md:mt-1"
          >
            {year}
          </CardItem>
          <CardItem translateZ="40" className="mt-auto pt-6 md:pt-4">
            <div className="flex items-center justify-start gap-6 md:gap-4 pb-2 md:pb-0">
              <a href={linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin as IconProp}
                  className="text-2xl md:text-xl text-neutral-300 hover:text-blue-500 transition-colors"
                />
              </a>
              {github && (
                <a href={github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub as IconProp}
                    className="text-2xl md:text-xl text-neutral-300 hover:text-purple-500 transition-colors"
                  />
                </a>
              )}
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

function MobileEboardMember({
  name,
  position,
  image,
  description,
  linkedin,
  github,
}: {
  name: string;
  position: string;
  image: StaticImageData;
  description: string;
  linkedin: string;
  github?: string;
}) {
  return (
    <div className="relative bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-full border-2 border-red-500/20"
          />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <span className="text-red-500 font-medium text-sm mb-2">{position}</span>
        <p className="text-neutral-300 text-sm mb-4">{description}</p>
        
        <div className="flex space-x-4 mt-2">
          <a href={linkedin} target="_blank" rel="noreferrer"
             className="text-neutral-400 hover:text-red-500 transition-colors">
            <FontAwesomeIcon icon={faLinkedin as IconProp} className="text-xl" />
          </a>
          {github && (
            <a href={github} target="_blank" rel="noreferrer"
               className="text-neutral-400 hover:text-red-500 transition-colors">
              <FontAwesomeIcon icon={faGithub as IconProp} className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function MobilePastEboardMember({
  name,
  position,
  year,
  image,
  linkedin,
  github,
}: {
  name: string;
  position: string;
  year: string;
  image: StaticImageData;
  linkedin: string;
  github?: string;
}) {
  return (
    <div className="bg-black/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
      <div className="flex flex-col items-center">
        <Image
          src={image}
          height="120"
          width="120"
          className="rounded-full object-cover mb-4"
          alt={name}
        />
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-neutral-300 mb-1">{position}</p>
          <p className="text-neutral-400 text-sm mb-4">{year}</p>
          <div className="flex items-center justify-center gap-4">
            <a href={linkedin} target="_blank" rel="noreferrer"
               className="text-neutral-400 hover:text-blue-500 transition-colors">
              <FontAwesomeIcon icon={faLinkedin as IconProp} className="text-xl" />
            </a>
            {github && (
              <a href={github} target="_blank" rel="noreferrer"
                 className="text-neutral-400 hover:text-red-500 transition-colors">
                <FontAwesomeIcon icon={faGithub as IconProp} className="text-xl" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/3d-card";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface EboardMemberProps {
  name: string;
  position: string;
  image: StaticImageData;
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
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] w-full sm:w-[280px] min-h-[580px] sm:min-h-0 sm:h-[400px] rounded-xl p-6 md:p-4 border">
        <div className="flex flex-col h-full">
          <CardItem
            translateZ="50"
            className="text-2xl md:text-lg font-bold text-neutral-600 dark:text-white mb-4 md:mb-2"
          >
            <h3>{name}</h3>
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-2">
            <Image
              src={image}
              height={1000}
              width={1000}
              className="h-[260px] md:h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={`${name} - ${position}`}
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
        </div>
      </CardBody>
    </CardContainer>
  );
}

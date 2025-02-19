import Image from "next/image";
import { StaticImageData } from "next/image";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface MobileEboardMemberProps {
  name: string;
  position: string;
  image: StaticImageData;
  description: string;
  linkedin: string;
  github?: string;
}

export function MobileEboardMember({
  name,
  position,
  image,
  description,
  linkedin,
  github,
}: MobileEboardMemberProps) {
  return (
    <div className="relative bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={image}
            alt={`${name} - ${position}`}
            fill
            className="object-cover rounded-full border-2 border-red-500/20"
          />
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <span className="text-red-500 font-medium text-sm mb-2" role="text">
          {position}
        </span>
        <p className="text-neutral-300 text-sm mb-4">{description}</p>

        <div className="flex space-x-4 mt-2">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-red-500 transition-colors"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <FontAwesomeIcon
              icon={faLinkedin as IconProp}
              className="text-xl"
            />
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-red-500 transition-colors"
              aria-label={`${name}'s GitHub profile`}
            >
              <FontAwesomeIcon
                icon={faGithub as IconProp}
                className="text-xl"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { StaticImageData } from "next/image";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface MobilePastEboardMemberProps {
  name: string;
  position: string;
  year: string;
  image: StaticImageData | string;
  linkedin: string;
  github?: string;
}

export function MobilePastEboardMember({
  name,
  position,
  year,
  image,
  linkedin,
  github,
}: MobilePastEboardMemberProps) {
  // Handle both StaticImageData and Contentful image URL
  const imageUrl = typeof image === "string" ? image : image;

  return (
    <div className="bg-black/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
      <div className="flex flex-col items-center">
        <Image
          src={imageUrl}
          height={120}
          width={120}
          className="rounded-full object-cover mb-4"
          alt={`${name} - ${position} (${year})`}
        />
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-neutral-300 mb-1" role="text">
            {position}
          </p>
          <p className="text-neutral-400 text-sm mb-4">{year}</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-neutral-400 hover:text-blue-500 transition-colors"
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
                rel="noreferrer noopener"
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
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { SOCIAL_LINKS } from "../../utils/constants";

interface SocialLinkProps {
  href: string;
  icon: IconProp;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex flex-col items-center no-underline"
    >
      <div
        className="p-2.5 md:p-4 rounded-full bg-black/50 border border-neutral-800 
                    group-hover:border-red-500 transition-all duration-300 
                    group-hover:scale-110"
      >
        <FontAwesomeIcon
          icon={icon}
          className="text-lg md:text-3xl text-neutral-300 
                    group-hover:text-red-500 transition-colors"
        />
      </div>
      <span
        className="mt-1 md:mt-2 text-xs md:text-sm text-neutral-400 
                 group-hover:text-red-500 transition-colors"
      >
        {label}
      </span>
    </a>
  );
}

export function SocialLinks() {
  const socialLinks = [
    {
      href: SOCIAL_LINKS.GITHUB,
      icon: faGithub,
      label: "GitHub",
    },
    {
      href: SOCIAL_LINKS.LINKEDIN,
      icon: faLinkedin,
      label: "LinkedIn",
    },
    {
      href: SOCIAL_LINKS.DISCORD,
      icon: faDiscord,
      label: "Discord",
    },
    {
      href: SOCIAL_LINKS.INSTAGRAM,
      icon: faInstagram,
      label: "Instagram",
    },
    {
      href: SOCIAL_LINKS.YOUTUBE,
      icon: faYoutube,
      label: "YouTube",
    },
  ];

  return (
    <div className="bg-transparent md:bg-black/30 md:backdrop-blur-md md:border md:border-neutral-800 rounded-2xl p-4 md:p-8 mb-8">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8">
        Connect With Us
        <div className="h-1 w-12 md:w-20 bg-red-500 mx-auto mt-2"></div>
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 justify-items-center">
        {socialLinks.map(link => (
          <SocialLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
}

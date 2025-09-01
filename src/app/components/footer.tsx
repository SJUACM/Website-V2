"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SOCIAL_LINKS } from "../utils/constants";
import { useTrackedButton } from "../hooks/useTrackedButton";

export default function Footer() {
  const { createClickHandler } = useTrackedButton();

  return (
    <footer className="bg-black/40 border-t border-neutral-800 mt-16 xs:mt-24 md:mt-32 relative z-10">
      <div className="container-fluid py-8 xs:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Description */}
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-red-500 text-xl font-bold">STJ ACM</h2>
            <p className="text-neutral-300 text-sm">
              St. John&apos;s University&apos;s Association for Computing
              Machinery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h2 className="text-red-500 text-xl font-bold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer block py-1"
                  onClick={createClickHandler("link_click", {
                    button_location: "footer",
                    button_text: "About",
                  })}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/meetings"
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer block py-1"
                  onClick={createClickHandler("link_click", {
                    button_location: "footer",
                    button_text: "Meetings",
                  })}
                >
                  Meetings
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer block py-1"
                  onClick={createClickHandler("link_click", {
                    button_location: "footer",
                    button_text: "Resources",
                  })}
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-2">
            <h2 className="text-red-500 text-xl font-bold">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/resources#interview-prep"
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer block py-1"
                  onClick={createClickHandler("link_click", {
                    button_location: "footer",
                    button_text: "Interview Prep",
                  })}
                >
                  Interview Prep
                </a>
              </li>
              <li>
                <a
                  href="/resources#helpful-websites"
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer block py-1"
                  onClick={createClickHandler("link_click", {
                    button_location: "footer",
                    button_text: "Helpful Websites",
                  })}
                >
                  Helpful Websites
                </a>
              </li>
              <li>
                <a
                  href="/resources#youtube-channels"
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer block py-1"
                  onClick={createClickHandler("link_click", {
                    button_location: "footer",
                    button_text: "YouTube Channels",
                  })}
                >
                  YouTube Channels
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2">
            <h2 className="text-red-500 text-xl font-bold">Connect</h2>
            <div className="flex space-x-6">
              <a
                href={SOCIAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors cursor-pointer p-2"
                aria-label="GitHub"
                onClick={createClickHandler("social_link_click", {
                  button_location: "footer",
                  button_text: "GitHub",
                })}
              >
                <FontAwesomeIcon icon={faGithub as IconProp} size="lg" />
              </a>
              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors cursor-pointer p-2"
                aria-label="LinkedIn"
                onClick={createClickHandler("social_link_click", {
                  button_location: "footer",
                  button_text: "LinkedIn",
                })}
              >
                <FontAwesomeIcon icon={faLinkedin as IconProp} size="lg" />
              </a>
              <a
                href={SOCIAL_LINKS.DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors cursor-pointer p-2"
                aria-label="Discord"
                onClick={createClickHandler("social_link_click", {
                  button_location: "footer",
                  button_text: "Discord",
                })}
              >
                <FontAwesomeIcon icon={faDiscord as IconProp} size="lg" />
              </a>
              <a
                href={SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors cursor-pointer p-2"
                aria-label="Instagram"
                onClick={createClickHandler("social_link_click", {
                  button_location: "footer",
                  button_text: "Instagram",
                })}
              >
                <FontAwesomeIcon icon={faInstagram as IconProp} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-8 xs:mt-10 md:mt-12 pt-6 xs:pt-8 text-center">
          <p className="text-neutral-400 text-xs xs:text-sm">
            © {new Date().getFullYear()} STJ ACM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

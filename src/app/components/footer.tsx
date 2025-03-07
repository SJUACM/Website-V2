import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SOCIAL_LINKS } from "../utils/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-neutral-800 mt-16 xs:mt-24 md:mt-32">
      <div className="container-fluid py-8 xs:py-10 md:py-12">
        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* About Section */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg xs:text-xl font-bold text-red-500">
              STJ ACM
            </h3>
            <p className="text-neutral-400 text-xs xs:text-sm">
              St. John&apos;s University&apos;s Association for Computing
              Machinery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg xs:text-xl font-bold text-red-500">
              Quick Links
            </h3>
            <ul className="space-y-1.5 xs:space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-red-500 text-xs xs:text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/meetings"
                  className="text-neutral-400 hover:text-red-500 text-xs xs:text-sm transition-colors"
                >
                  Meetings
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-neutral-400 hover:text-red-500 text-xs xs:text-sm transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg xs:text-xl font-bold text-red-500">
              Resources
            </h3>
            <ul className="space-y-1.5 xs:space-y-2">
              <li>
                <Link
                  href="/resources#interview-prep"
                  className="text-neutral-400 hover:text-red-500 text-xs xs:text-sm transition-colors"
                >
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link
                  href="/resources#helpful-websites"
                  className="text-neutral-400 hover:text-red-500 text-xs xs:text-sm transition-colors"
                >
                  Helpful Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/resources#youtube-channels"
                  className="text-neutral-400 hover:text-red-500 text-xs xs:text-sm transition-colors"
                >
                  YouTube Channels
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg xs:text-xl font-bold text-red-500">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.GITHUB}
                target="_blank"
                rel="noreferrer noopener"
                className="text-neutral-400 hover:text-red-500 transition-colors"
                aria-label="GitHub"
              >
                <FontAwesomeIcon
                  icon={faGithub as IconProp}
                  className="text-lg xs:text-xl"
                />
              </a>
              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noreferrer noopener"
                className="text-neutral-400 hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin as IconProp}
                  className="text-lg xs:text-xl"
                />
              </a>
              <a
                href={SOCIAL_LINKS.DISCORD}
                target="_blank"
                rel="noreferrer noopener"
                className="text-neutral-400 hover:text-red-500 transition-colors"
                aria-label="Discord"
              >
                <FontAwesomeIcon
                  icon={faDiscord as IconProp}
                  className="text-lg xs:text-xl"
                />
              </a>
              <a
                href={SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noreferrer noopener"
                className="text-neutral-400 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram as IconProp}
                  className="text-lg xs:text-xl"
                />
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

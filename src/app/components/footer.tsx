"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDiscord, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-neutral-800 mt-32">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">STJ ACM</h3>
            <p className="text-neutral-400 text-sm">
              St. John&apos;s University&apos;s Association for Computing Machinery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-neutral-400 hover:text-red-500 text-sm transition-colors">About</a></li>
              <li><a href="/meetings" className="text-neutral-400 hover:text-red-500 text-sm transition-colors">Meetings</a></li>
              <li><a href="/resources" className="text-neutral-400 hover:text-red-500 text-sm transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/resources#interview-prep" className="text-neutral-400 hover:text-red-500 text-sm transition-colors">Interview Prep</a></li>
              <li><a href="/resources#helpful-websites" className="text-neutral-400 hover:text-red-500 text-sm transition-colors">Helpful Websites</a></li>
              <li><a href="/resources#youtube-channels" className="text-neutral-400 hover:text-red-500 text-sm transition-colors">YouTube Channels</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/SJUACM" target="_blank" rel="noreferrer" 
                 className="text-neutral-400 hover:text-red-500 transition-colors">
                <FontAwesomeIcon icon={faGithub as IconProp} className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/stjacm" target="_blank" rel="noreferrer"
                 className="text-neutral-400 hover:text-red-500 transition-colors">
                <FontAwesomeIcon icon={faLinkedin as IconProp} className="text-xl" />
              </a>
              <a href="https://discord.gg/Bcwm3e8m" target="_blank" rel="noreferrer"
                 className="text-neutral-400 hover:text-red-500 transition-colors">
                <FontAwesomeIcon icon={faDiscord as IconProp} className="text-xl" />
              </a>
              <a href="https://www.instagram.com/stj.acm/" target="_blank" rel="noreferrer"
                 className="text-neutral-400 hover:text-red-500 transition-colors">
                <FontAwesomeIcon icon={faInstagram as IconProp} className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} STJ ACM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
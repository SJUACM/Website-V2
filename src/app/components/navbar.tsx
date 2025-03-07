"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../utils/cn";
import Logo from "../../../public/images/SJU_ACM_Logo.png";

export function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(".navbar-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 flex justify-center pt-3 xs:pt-4 md:pt-6 z-50 safe-top transition-all duration-300",
        scrolled ? "pt-2 xs:pt-3 md:pt-4" : "",
        className
      )}
      suppressHydrationWarning
    >
      <div
        className={cn(
          "navbar-container flex items-center justify-between bg-black/40 backdrop-blur-md border border-white/[0.1] rounded-full px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-3 md:py-4 w-[95%] xs:w-[90%] md:w-[900px] mx-auto transition-all duration-300",
          scrolled ? "py-2 md:py-3 shadow-lg bg-black/60" : "",
          className
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="SJU ACM Logo"
            width={40}
            height={40}
            className="w-8 h-8 xs:w-9 xs:h-9 md:w-10 md:h-10 hover:opacity-90 transition-opacity"
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-1.5 xs:p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={e => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links - Updated styling */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-10 bg-black/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 mt-4 md:mt-0 rounded-2xl md:rounded-none mx-4 md:mx-0 border border-white/10 md:border-none transition-transform duration-300 origin-top ${
            isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0"
          } md:scale-y-100 md:opacity-100`}
        >
          <NavLink href="/about" text="About" />
          <NavLink href="/meetings" text="Meetings" />
          <NavLink href="/eboard" text="E-Board" />
          <NavLink href="/resources" text="Resources" />
          <NavLink href="/hackathons" text="Hackathons" />
          <NavLink href="/blog" text="Blog" />
        </div>

        {/* Spacer div for layout balance */}
        <div className="hidden md:block w-[40px] lg:w-[45px]"></div>
      </div>
    </div>
  );
}

// Updated NavLink component with better hover effects
function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="relative group text-xs xs:text-sm text-neutral-200 transition-colors hover:text-white py-1 px-2"
    >
      {text}
      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-500 group-hover:w-8 transition-all duration-200 ease-out -translate-x-1/2 group-hover:opacity-100" />
    </Link>
  );
}

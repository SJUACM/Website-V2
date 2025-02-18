"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../utils/cn";
import Logo from "../../../public/images/SJU_ACM_Logo.png";

export function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center pt-6 z-50">
      <div
        className={cn(
          "flex items-center justify-between bg-black/40 backdrop-blur-md border border-white/[0.1] rounded-full px-6 md:px-8 py-3 md:py-4 w-[90%] md:w-[900px] mx-auto",
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
            className="hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          } md:flex absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 bg-black/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 mt-4 md:mt-0 rounded-2xl md:rounded-none mx-4 md:mx-0 border border-white/10 md:border-none`}
        >
          <NavLink href="/about" text="About" />
          <NavLink href="/meetings" text="Meetings" />
          <NavLink href="/eboard" text="E-Board" />
          <NavLink href="/resources" text="Resources" />
          <NavLink href="/blog" text="Blog" />
        </div>

        {/* Spacer div for layout balance */}
        <div className="hidden md:block w-[45px]"></div>
      </div>
    </div>
  );
}

// Updated NavLink component with better hover effects
function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="relative group text-sm text-neutral-200 transition-colors hover:text-white"
    >
      {text}
      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-500 group-hover:w-8 transition-all duration-200 ease-out -translate-x-1/2 group-hover:opacity-100" />
    </Link>
  );
}

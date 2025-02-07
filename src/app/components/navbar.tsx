"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../utils/cn";
import Logo from "../../../public/images/SJU_ACM_Logo.png";

export function Navbar({ className }: { className?: string }) {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center pt-10">
      <div
        className={cn(
          "flex items-center justify-between bg-black/40 backdrop-blur-md border border-white/[0.1] rounded-full px-8 py-4 w-[900px]",
          className,
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="SJU ACM Logo"
            width={55}
            height={55}
            className="hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-10">
          <Link
            href="/about"
            className="text-neutral-200 hover:text-white transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/meetings"
            className="text-neutral-200 hover:text-white transition-colors relative group"
          >
            Meetings
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/eboard"
            className="text-neutral-200 hover:text-white transition-colors relative group"
          >
            E-Board
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/resources"
            className="text-neutral-200 hover:text-white transition-colors relative group"
          >
            Resources
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/blog"
            className="text-neutral-200 hover:text-white transition-colors relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Added empty div for spacing */}
        <div className="w-[55px]"></div>
      </div>
    </div>
  );
}

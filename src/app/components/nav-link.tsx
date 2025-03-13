"use client";

import React from "react";
import Link from "next/link";

export function NavLink({ href, text }: { href: string; text: string }) {
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
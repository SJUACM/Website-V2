import React from "react";
import Link from "next/link";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center h-full">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex flex-col items-center space-y-6">
          <MobileNavLink href="/about" text="About" onClose={onClose} />
          <MobileNavLink href="/meetings" text="Meetings" onClose={onClose} />
          <MobileNavLink href="/eboard" text="E-Board" onClose={onClose} />
          <MobileNavLink href="/resources" text="Resources" onClose={onClose} />
          <MobileNavLink
            href="/hackathons"
            text="Hackathons"
            onClose={onClose}
          />
          <MobileNavLink href="/blog" text="Blog" onClose={onClose} />
        </nav>
      </div>
    </div>
  );
}

function MobileNavLink({
  href,
  text,
  onClose,
}: {
  href: string;
  text: string;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="text-2xl font-medium text-white hover:text-red-500 transition-colors"
    >
      {text}
    </Link>
  );
}

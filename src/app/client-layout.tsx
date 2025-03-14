"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { PostHogProvider } from "./providers/posthog-provider";

// Define the type for our custom window properties
interface CustomWindow extends Window {
  __ENV?: {
    CONTENTFUL_SPACE_ID?: string;
    CONTENTFUL_ACCESS_TOKEN?: string;
  };
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Initialize Contentful environment variables on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get environment variables from meta tags
      const spaceId = document.querySelector('meta[name="contentful-space-id"]')?.getAttribute('content');
      const accessToken = document.querySelector('meta[name="contentful-access-token"]')?.getAttribute('content');
      
      if (spaceId && accessToken) {
        // Store in window.__ENV for access by other components
        (window as CustomWindow).__ENV = {
          CONTENTFUL_SPACE_ID: spaceId,
          CONTENTFUL_ACCESS_TOKEN: accessToken,
        };
        
        console.log('Contentful environment variables initialized on client');
      }
    }
  }, []);

  return (
    <PostHogProvider>
      <div
        className={`${isHomePage ? "home-page-body" : "overflow-x-hidden max-w-[100vw]"} flex-grow flex flex-col`}
      >
        {children}
      </div>
    </PostHogProvider>
  );
} 
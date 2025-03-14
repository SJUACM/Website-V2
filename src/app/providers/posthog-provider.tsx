"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as OriginalPostHogProvider } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize PostHog
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      capture_pageview: false, // We'll manually capture pageviews
      loaded: posthog => {
        if (process.env.NODE_ENV === "development") {
          // Make available during development
          window.posthog = posthog;
        }
      },
    });

    // Return cleanup function
    return () => {
      // Proper cleanup for PostHog
      posthog.capture("$pageleave");
    };
  }, []);

  // Track pageviews
  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }

      // Track pageview
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return (
    <OriginalPostHogProvider client={posthog}>
      {children}
    </OriginalPostHogProvider>
  );
}

// Add TypeScript declaration for the window object
declare global {
  interface Window {
    posthog?: typeof posthog;
  }
}

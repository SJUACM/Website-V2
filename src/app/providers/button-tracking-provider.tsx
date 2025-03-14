"use client";

import { useEffect } from "react";
import { setupButtonClickTracking } from "../utils/trackButtonClicks";

/**
 * Provider component that initializes automatic button click tracking
 * This should be added to your app's provider list
 */
export function ButtonTrackingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Set up button click tracking
    const cleanup = setupButtonClickTracking();

    // Clean up when the component unmounts
    return cleanup;
  }, []);

  return <>{children}</>;
}

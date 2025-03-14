"use client";

import { useCallback } from "react";
import {
  trackEvent,
  identifyUser,
  resetUser,
  setUserProperties,
  isPostHogLoaded,
} from "../utils/posthog";

/**
 * Custom hook for using PostHog in React components
 */
export function usePostHog() {
  const track = useCallback(
    (eventName: string, properties?: Record<string, any>) => {
      trackEvent(eventName, properties);
    },
    []
  );

  const identify = useCallback(
    (userId: string, properties?: Record<string, any>) => {
      identifyUser(userId, properties);
    },
    []
  );

  const reset = useCallback(() => {
    resetUser();
  }, []);

  const setProperties = useCallback((properties: Record<string, any>) => {
    setUserProperties(properties);
  }, []);

  const isLoaded = useCallback(() => {
    return isPostHogLoaded();
  }, []);

  return {
    track,
    identify,
    reset,
    setProperties,
    isLoaded,
  };
}

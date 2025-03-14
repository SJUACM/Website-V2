"use client";

import { useCallback } from "react";
import { usePostHog } from "./usePostHog";

/**
 * Custom hook for tracking button clicks in components
 * @returns An object with functions for tracking button clicks
 */
export function useTrackedButton() {
  const { track } = usePostHog();

  /**
   * Create a click handler that tracks the button click
   * @param eventName The name of the event to track
   * @param properties Additional properties to include with the event
   * @param originalHandler The original click handler
   * @returns A function that tracks the click and calls the original handler
   */
  const createClickHandler = useCallback(
    <T extends Element = HTMLButtonElement>(
      eventName: string,
      properties: Record<string, any> = {},
      originalHandler?: (e: React.MouseEvent<T>) => void
    ) => {
      return (e: React.MouseEvent<T>) => {
        // Track the event
        track(eventName, {
          ...properties,
          path: typeof window !== "undefined" ? window.location.pathname : "",
          url: typeof window !== "undefined" ? window.location.href : "",
        });

        // Call the original handler if it exists
        if (originalHandler) {
          originalHandler(e);
        }
      };
    },
    [track]
  );

  /**
   * Track a button click
   * @param eventName The name of the event to track
   * @param properties Additional properties to include with the event
   */
  const trackButtonClick = useCallback(
    (eventName: string, properties: Record<string, any> = {}) => {
      track(eventName, {
        ...properties,
        path: typeof window !== "undefined" ? window.location.pathname : "",
        url: typeof window !== "undefined" ? window.location.href : "",
      });
    },
    [track]
  );

  return {
    createClickHandler,
    trackButtonClick,
  };
}

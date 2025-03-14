"use client";

import React from "react";
import { Button, ButtonProps } from "./button";
import { usePostHog } from "@/app/hooks/usePostHog";

export interface TrackedButtonProps extends ButtonProps {
  /**
   * The name of the event to track in PostHog
   * If not provided, will use "button_click" with the button text as a property
   */
  trackingEvent?: string;

  /**
   * Additional properties to include with the tracking event
   */
  trackingProperties?: Record<string, any>;
}

export const TrackedButton = React.forwardRef<
  HTMLButtonElement,
  TrackedButtonProps
>(
  (
    { onClick, children, trackingEvent, trackingProperties = {}, ...props },
    ref
  ) => {
    const { track } = usePostHog();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Track the click event
      const buttonText = typeof children === "string" ? children : "Button";
      const eventName = trackingEvent || "button_click";

      // Combine default properties with custom properties
      const properties = {
        button_text: buttonText,
        ...trackingProperties,
      };

      // Track the event
      track(eventName, properties);

      // Call the original onClick handler if it exists
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <Button ref={ref} onClick={handleClick} {...props}>
        {children}
      </Button>
    );
  }
);

TrackedButton.displayName = "TrackedButton";

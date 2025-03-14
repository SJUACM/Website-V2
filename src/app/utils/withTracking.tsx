"use client";

import React from "react";
import { usePostHog } from "@/app/hooks/usePostHog";

interface WithTrackingProps {
  /**
   * The name of the event to track in PostHog
   */
  trackingEvent?: string;

  /**
   * Additional properties to include with the tracking event
   */
  trackingProperties?: Record<string, any>;

  /**
   * The DOM event to track (e.g., 'click', 'hover', 'focus')
   * @default 'click'
   */
  trackingEventType?: string;
}

type EventHandlers = {
  onClick?: (e: React.SyntheticEvent) => void;
  onMouseEnter?: (e: React.SyntheticEvent) => void;
  onMouseLeave?: (e: React.SyntheticEvent) => void;
  onFocus?: (e: React.SyntheticEvent) => void;
  onBlur?: (e: React.SyntheticEvent) => void;
  onKeyDown?: (e: React.SyntheticEvent) => void;
  onKeyUp?: (e: React.SyntheticEvent) => void;
  onSubmit?: (e: React.SyntheticEvent) => void;
  onScroll?: (e: React.SyntheticEvent) => void;
  onChange?: (e: React.SyntheticEvent) => void;
  [key: `on${string}`]: ((e: React.SyntheticEvent) => void) | undefined;
};

/**
 * Higher-order component that adds PostHog tracking to any component
 * @param Component The component to wrap with tracking
 * @param defaultEventName The default event name to use if not provided in props
 * @param defaultEventType The default DOM event to track if not provided in props
 */
export function withTracking<P extends EventHandlers>(
  Component: React.ComponentType<P>,
  defaultEventName: string = "element_interaction",
  defaultEventType: string = "click"
) {
  // Create a new component that wraps the original component
  const WithTracking = React.forwardRef<HTMLElement, P & WithTrackingProps>(
    (
      { trackingEvent, trackingProperties = {}, trackingEventType, ...props },
      ref
    ) => {
      const { track } = usePostHog();

      // Determine the event name and type to use
      const eventName = trackingEvent || defaultEventName;
      const eventType = trackingEventType || defaultEventType;

      // Create a handler for the specified event
      const handleEvent = (e: React.SyntheticEvent) => {
        // Get component name for tracking
        const componentName =
          Component.displayName || Component.name || "Component";

        // Track the event
        track(eventName, {
          component: componentName,
          event_type: eventType,
          ...trackingProperties,
        });

        // Call the original event handler if it exists
        const handlerName =
          `on${eventType.charAt(0).toUpperCase() + eventType.slice(1)}` as keyof EventHandlers;
        const originalHandler = props[handlerName];
        if (originalHandler && typeof originalHandler === "function") {
          originalHandler(e);
        }
      };

      // Create the props to pass to the component
      const handlerName =
        `on${eventType.charAt(0).toUpperCase() + eventType.slice(1)}` as keyof P;
      const newProps = {
        ...props,
        [handlerName]: handleEvent,
        ref,
      } as unknown as P;

      return <Component {...newProps} />;
    }
  );

  // Set the display name for the wrapped component
  const wrappedComponentName =
    Component.displayName || Component.name || "Component";
  WithTracking.displayName = `withTracking(${wrappedComponentName})`;

  return WithTracking;
}

/**
 * Create a tracked version of a component that tracks click events
 * @param Component The component to track
 * @param eventName The name of the event to track
 */
export function createTrackedComponent<P extends EventHandlers>(
  Component: React.ComponentType<P>,
  eventName: string
) {
  return withTracking(Component, eventName);
}

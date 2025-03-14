import posthog from 'posthog-js';

/**
 * Track a custom event with PostHog
 * @param eventName The name of the event to track
 * @param properties Optional properties to include with the event
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.capture(eventName, properties);
  }
};

/**
 * Identify a user with PostHog
 * @param userId The unique identifier for the user
 * @param properties Optional properties to set for the user
 */
export const identifyUser = (userId: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.identify(userId, properties);
  }
};

/**
 * Reset the current user's identity
 */
export const resetUser = () => {
  if (typeof window !== 'undefined') {
    posthog.reset();
  }
};

/**
 * Set properties for the current user
 * @param properties The properties to set
 */
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.people.set(properties);
  }
};

/**
 * Check if PostHog is loaded and ready
 */
export const isPostHogLoaded = (): boolean => {
  return typeof window !== 'undefined' && !!window.posthog;
}; 
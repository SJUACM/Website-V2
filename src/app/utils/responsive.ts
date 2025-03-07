/**
 * Responsive utilities for the application
 * These functions help with responsive design and device detection
 */

// Check if the code is running on the client side
export const isClient = typeof window !== "undefined";

// Get the current viewport width
export const getViewportWidth = (): number => {
  if (!isClient) return 1200; // Default for SSR
  return window.innerWidth;
};

// Get the current viewport height
export const getViewportHeight = (): number => {
  if (!isClient) return 800; // Default for SSR
  return window.innerHeight;
};

// Breakpoint values (matching Tailwind config)
export const breakpoints = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Check if the current viewport is below a certain breakpoint
export const isBelowBreakpoint = (
  breakpoint: keyof typeof breakpoints
): boolean => {
  if (!isClient) return false;
  return window.innerWidth < breakpoints[breakpoint];
};

// Check if the current viewport is above a certain breakpoint
export const isAboveBreakpoint = (
  breakpoint: keyof typeof breakpoints
): boolean => {
  if (!isClient) return true;
  return window.innerWidth >= breakpoints[breakpoint];
};

// Check if the device is mobile (based on screen width)
export const isMobile = (): boolean => {
  return isBelowBreakpoint("md");
};

// Check if the device is a tablet (based on screen width)
export const isTablet = (): boolean => {
  return isAboveBreakpoint("md") && isBelowBreakpoint("lg");
};

// Check if the device is desktop (based on screen width)
export const isDesktop = (): boolean => {
  return isAboveBreakpoint("lg");
};

// Check if the device has touch capabilities
export const isTouchDevice = (): boolean => {
  if (!isClient) return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

// Calculate fluid values between min and max based on viewport width
export const fluidValue = (
  minValue: number,
  maxValue: number,
  minWidth: number = breakpoints.xs,
  maxWidth: number = breakpoints.xl,
  unit: string = "px"
): string => {
  if (!isClient) return `${maxValue}${unit}`;

  const currentWidth = window.innerWidth;

  // If below minWidth, return minValue
  if (currentWidth <= minWidth) return `${minValue}${unit}`;

  // If above maxWidth, return maxValue
  if (currentWidth >= maxWidth) return `${maxValue}${unit}`;

  // Calculate fluid value
  const value =
    minValue +
    ((maxValue - minValue) * (currentWidth - minWidth)) / (maxWidth - minWidth);

  return `${value.toFixed(2)}${unit}`;
};

// Create a CSS clamp value for fluid typography or spacing
export const createClamp = (
  minValue: number,
  maxValue: number,
  minWidth: number = breakpoints.xs,
  maxWidth: number = breakpoints.xl,
  unit: string = "rem"
): string => {
  // Calculate the slope
  const slope = (maxValue - minValue) / (maxWidth - minWidth);
  // Calculate the y-intercept
  const yAxisIntersection = -minWidth * slope + minValue;

  // Return the clamp function
  return `clamp(${minValue}${unit}, ${yAxisIntersection.toFixed(4)}${unit} + ${(slope * 100).toFixed(4)}vw, ${maxValue}${unit})`;
};

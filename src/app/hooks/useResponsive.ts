'use client';

import { useState, useEffect } from 'react';
import { breakpoints, isClient } from '../utils/responsive';

type Breakpoint = keyof typeof breakpoints;

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  breakpoint: Breakpoint;
  width: number;
  height: number;
  isTouchDevice: boolean;
}

/**
 * Hook to get responsive information about the current viewport
 * @returns Responsive state object with various device information
 */
export function useResponsive(): ResponsiveState {
  // Default state for SSR
  const defaultState: ResponsiveState = {
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLargeDesktop: false,
    breakpoint: 'lg',
    width: 1024,
    height: 768,
    isTouchDevice: false,
  };

  // State to track viewport information
  const [state, setState] = useState<ResponsiveState>(defaultState);

  useEffect(() => {
    if (!isClient) return;

    // Function to determine current breakpoint
    const getCurrentBreakpoint = (): Breakpoint => {
      const width = window.innerWidth;
      if (width < breakpoints.sm) return 'xs';
      if (width < breakpoints.md) return 'sm';
      if (width < breakpoints.lg) return 'md';
      if (width < breakpoints.xl) return 'lg';
      if (width < breakpoints['2xl']) return 'xl';
      return '2xl';
    };

    // Function to update state based on current viewport
    const updateState = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const breakpoint = getCurrentBreakpoint();
      
      setState({
        isMobile: width < breakpoints.md,
        isTablet: width >= breakpoints.md && width < breakpoints.lg,
        isDesktop: width >= breakpoints.lg,
        isLargeDesktop: width >= breakpoints.xl,
        breakpoint,
        width,
        height,
        isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      });
    };

    // Initial update
    updateState();

    // Add event listener for resize
    window.addEventListener('resize', updateState);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateState);
    };
  }, []);

  return state;
}

/**
 * Hook to conditionally render content based on breakpoint
 * @param minBreakpoint Minimum breakpoint to render content
 * @param maxBreakpoint Maximum breakpoint to render content (optional)
 * @returns Boolean indicating whether to render content
 */
export function useBreakpoint(minBreakpoint: Breakpoint, maxBreakpoint?: Breakpoint): boolean {
  const { width } = useResponsive();
  
  if (!isClient) return true;
  
  const isAboveMin = width >= breakpoints[minBreakpoint];
  const isBelowMax = maxBreakpoint ? width < breakpoints[maxBreakpoint] : true;
  
  return isAboveMin && isBelowMax;
}

/**
 * Hook to get a fluid value based on viewport width
 * @param minValue Minimum value at smallest breakpoint
 * @param maxValue Maximum value at largest breakpoint
 * @param minBreakpoint Minimum breakpoint (default: 'xs')
 * @param maxBreakpoint Maximum breakpoint (default: 'xl')
 * @param unit CSS unit to use (default: 'px')
 * @returns Calculated fluid value as a string with unit
 */
export function useFluidValue(
  minValue: number,
  maxValue: number,
  minBreakpoint: Breakpoint = 'xs',
  maxBreakpoint: Breakpoint = 'xl',
  unit: string = 'px'
): string {
  const { width } = useResponsive();
  
  if (!isClient) return `${maxValue}${unit}`;
  
  const minWidth = breakpoints[minBreakpoint];
  const maxWidth = breakpoints[maxBreakpoint];
  
  // If below minWidth, return minValue
  if (width <= minWidth) return `${minValue}${unit}`;
  
  // If above maxWidth, return maxValue
  if (width >= maxWidth) return `${maxValue}${unit}`;
  
  // Calculate fluid value
  const value = minValue + ((maxValue - minValue) * (width - minWidth)) / (maxWidth - minWidth);
  
  return `${value.toFixed(2)}${unit}`;
} 
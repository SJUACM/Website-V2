"use client";

import React, { ReactNode } from "react";
import { useResponsive, useBreakpoint } from "../hooks/useResponsive";
import { breakpoints } from "../utils/responsive";

type Breakpoint = keyof typeof breakpoints;

interface ResponsiveProps {
  children: ReactNode;
  breakpoint?: Breakpoint;
  showOnMobile?: boolean;
  showOnTablet?: boolean;
  showOnDesktop?: boolean;
  showAbove?: Breakpoint;
  showBelow?: Breakpoint;
  between?: [Breakpoint, Breakpoint];
  className?: string;
}

/**
 * A component that conditionally renders its children based on the current viewport size
 */
export function Responsive({
  children,
  breakpoint,
  showOnMobile = true,
  showOnTablet = true,
  showOnDesktop = true,
  showAbove,
  showBelow,
  between,
  className = "",
}: ResponsiveProps) {
  const { isMobile, isTablet, isDesktop, width } = useResponsive();

  // Determine if content should be shown based on device type
  const showBasedOnDevice =
    (isMobile && showOnMobile) ||
    (isTablet && showOnTablet) ||
    (isDesktop && showOnDesktop);

  // Determine if content should be shown based on breakpoint
  let showBasedOnBreakpoint = true;

  if (breakpoint) {
    showBasedOnBreakpoint = width >= breakpoints[breakpoint];
  }

  if (showAbove) {
    showBasedOnBreakpoint = width >= breakpoints[showAbove];
  }

  if (showBelow) {
    showBasedOnBreakpoint = width < breakpoints[showBelow];
  }

  if (between && between.length === 2) {
    showBasedOnBreakpoint =
      width >= breakpoints[between[0]] && width < breakpoints[between[1]];
  }

  // Only render if all conditions are met
  if (!showBasedOnDevice || !showBasedOnBreakpoint) {
    return null;
  }

  return <div className={className}>{children}</div>;
}

/**
 * Component that only renders on mobile devices
 */
export function Mobile({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Responsive
      showOnMobile
      showOnTablet={false}
      showOnDesktop={false}
      className={className}
    >
      {children}
    </Responsive>
  );
}

/**
 * Component that only renders on tablet devices
 */
export function Tablet({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Responsive
      showOnMobile={false}
      showOnTablet
      showOnDesktop={false}
      className={className}
    >
      {children}
    </Responsive>
  );
}

/**
 * Component that only renders on desktop devices
 */
export function Desktop({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Responsive
      showOnMobile={false}
      showOnTablet={false}
      showOnDesktop
      className={className}
    >
      {children}
    </Responsive>
  );
}

/**
 * Component that renders on tablet and desktop devices
 */
export function TabletAndAbove({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Responsive
      showOnMobile={false}
      showOnTablet
      showOnDesktop
      className={className}
    >
      {children}
    </Responsive>
  );
}

/**
 * Component that renders on mobile and tablet devices
 */
export function MobileAndTablet({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Responsive
      showOnMobile
      showOnTablet
      showOnDesktop={false}
      className={className}
    >
      {children}
    </Responsive>
  );
}

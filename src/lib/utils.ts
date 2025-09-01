/**
 * Format a date string to a readable format
 * @param dateString ISO date string
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/**
 * Format a date range to a readable format
 * @param startDate ISO date string
 * @param endDate ISO date string
 * @returns Formatted date range string
 */
export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // If dates are exactly the same (same day event)
  if (start.getTime() === end.getTime()) {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(start);
  }

  // If same month and year
  if (
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear()
  ) {
    return `${new Intl.DateTimeFormat("en-US", { month: "short" }).format(start)} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`;
  }

  // Different months
  return `${new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(start)} - ${new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(end)}`;
}

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for conditionally joining CSS class names together
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Position hierarchy for E-Board members
 * Lower numbers = higher priority (displayed first)
 */
const POSITION_ORDER = {
  "President": 1,
  "Vice President": 2,
  "Information Officer": 3,
  "Treasurer": 4,
  "Events Coordinator": 5,
  "Social Media Manager": 6,
  "Committee Chairs": 7,
  // Add variations and fallbacks
  "VP": 2,
  "Vice-President": 2,
  "Info Officer": 3,
  "Event Coordinator": 5,
  "Social Media": 6,
  "Committee Chair": 7,
} as const;

/**
 * Get the sort order for a position
 * @param position The position title
 * @returns Sort order number (lower = higher priority)
 */
function getPositionOrder(position: string): number {
  // Normalize the position string (trim and handle case variations)
  const normalizedPosition = position.trim();
  
  // Try exact match first
  if (normalizedPosition in POSITION_ORDER) {
    return POSITION_ORDER[normalizedPosition as keyof typeof POSITION_ORDER];
  }
  
  // Try case-insensitive match
  const lowerPosition = normalizedPosition.toLowerCase();
  for (const [key, value] of Object.entries(POSITION_ORDER)) {
    if (key.toLowerCase() === lowerPosition) {
      return value;
    }
  }
  
  // If no match found, put at the end
  return 999;
}

/**
 * Sort E-Board members by their position hierarchy
 * @param members Array of members with position field
 * @returns Sorted array with positions in the specified order
 */
export function sortEboardMembersByPosition<T extends { position: string }>(
  members: T[]
): T[] {
  return [...members].sort((a, b) => {
    const orderA = getPositionOrder(a.position);
    const orderB = getPositionOrder(b.position);
    
    // Primary sort by position order
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    
    // Secondary sort by name if positions are the same order
    return a.position.localeCompare(b.position);
  });
}

/**
 * Parse year string to a number for sorting
 * Handles various year formats like "2023", "2022-2023", "Fall 2023", etc.
 * For academic year ranges (e.g., "2024-2025"), uses the ending year
 * @param year The year string
 * @returns Numeric year for sorting (or 0 if invalid)
 */
function parseYearForSorting(year: string): number {
  if (!year || typeof year !== 'string') return 0;
  
  // Extract all 4-digit years found in the string
  const yearMatches = year.match(/\d{4}/g);
  if (!yearMatches) return 0;
  
  // If multiple years are found (e.g., "2024-2025"), use the latest one
  if (yearMatches.length > 1) {
    const years = yearMatches.map(y => parseInt(y, 10));
    return Math.max(...years);
  }
  
  // If only one year is found, use it
  return parseInt(yearMatches[0], 10);
}

/**
 * Sort past E-Board members by year (most recent first) then by position hierarchy
 * @param members Array of past members with position and year fields
 * @returns Sorted array with most recent years first, then by position order within each year
 */
export function sortPastEboardMembersByYearAndPosition<T extends { position: string; year: string }>(
  members: T[]
): T[] {
  return [...members].sort((a, b) => {
    const yearA = parseYearForSorting(a.year);
    const yearB = parseYearForSorting(b.year);
    
    // Primary sort by year (most recent first)
    if (yearA !== yearB) {
      return yearB - yearA; // Descending order (most recent first)
    }
    
    // Secondary sort by position order
    const orderA = getPositionOrder(a.position);
    const orderB = getPositionOrder(b.position);
    
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    
    // Tertiary sort by position name if same order
    return a.position.localeCompare(b.position);
  });
}

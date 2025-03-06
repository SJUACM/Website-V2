/**
 * Format a date string to a readable format
 * @param dateString ISO date string
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
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
  
  // If same day
  if (start.toDateString() === end.toDateString()) {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(start);
  }
  
  // If same month and year
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${new Intl.DateTimeFormat('en-US', { month: 'short' }).format(start)} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`;
  }
  
  // Different months
  return `${new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(start)} - ${new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(end)}`;
} 
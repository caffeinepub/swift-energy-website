/**
 * Validates and converts Month/Day/Year inputs to a bigint timestamp
 * compatible with the backend's Time.Time type (nanoseconds since epoch).
 */

export interface DateValidationResult {
  valid: boolean;
  timestamp?: bigint;
  error?: string;
}

export function validateAndConvertDate(
  month: string,
  day: string,
  year: string
): DateValidationResult {
  // Check if all fields are provided
  if (!month.trim() || !day.trim() || !year.trim()) {
    return {
      valid: false,
      error: 'Please enter a complete date (month, day, and year).',
    };
  }

  // Parse to numbers
  const monthNum = parseInt(month, 10);
  const dayNum = parseInt(day, 10);
  const yearNum = parseInt(year, 10);

  // Check if they are valid numbers
  if (isNaN(monthNum) || isNaN(dayNum) || isNaN(yearNum)) {
    return {
      valid: false,
      error: 'Please enter valid numeric values for the date.',
    };
  }

  // Validate month range
  if (monthNum < 1 || monthNum > 12) {
    return {
      valid: false,
      error: 'Month must be between 1 and 12.',
    };
  }

  // Validate day range
  if (dayNum < 1 || dayNum > 31) {
    return {
      valid: false,
      error: 'Day must be between 1 and 31.',
    };
  }

  // Validate year range (reasonable range)
  if (yearNum < 1900 || yearNum > 2100) {
    return {
      valid: false,
      error: 'Please enter a valid year between 1900 and 2100.',
    };
  }

  // Create a Date object and validate it's a real date
  // Note: JavaScript Date months are 0-indexed
  const date = new Date(yearNum, monthNum - 1, dayNum);

  // Check if the date is valid (e.g., not Feb 30)
  if (
    date.getFullYear() !== yearNum ||
    date.getMonth() !== monthNum - 1 ||
    date.getDate() !== dayNum
  ) {
    return {
      valid: false,
      error: 'Please enter a valid calendar date (e.g., February cannot have 30 days).',
    };
  }

  // Convert to nanoseconds (Internet Computer Time.Time format)
  // JavaScript Date.getTime() returns milliseconds, multiply by 1,000,000 for nanoseconds
  const timestampMs = date.getTime();
  const timestampNs = BigInt(timestampMs) * BigInt(1_000_000);

  return {
    valid: true,
    timestamp: timestampNs,
  };
}

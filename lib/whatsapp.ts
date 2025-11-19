/**
 * Utility functions for WhatsApp integration
 */

/**
 * Normalizes phone number to include country code
 * Handles Pakistani numbers (starting with 0) by converting to country code format
 * @param phoneNumber - Phone number (can start with 0 for local format)
 * @returns Normalized phone number with country code
 */
function normalizePhoneNumber(phoneNumber: string): string {
  // Clean phone number - remove all non-digits
  let cleanPhone = phoneNumber.replace(/\D/g, '');
  
  if (!cleanPhone) {
    throw new Error('Phone number is required');
  }

  // If number starts with 0 and is 11 digits, it's likely a Pakistani number
  // Convert 0XXXXXXXXXX to 92XXXXXXXXXX
  if (cleanPhone.startsWith('0') && cleanPhone.length === 11) {
    cleanPhone = '92' + cleanPhone.substring(1);
  }
  // If number starts with 0 and is 10 digits, also handle as Pakistani
  else if (cleanPhone.startsWith('0') && cleanPhone.length === 10) {
    cleanPhone = '92' + cleanPhone.substring(1);
  }

  return cleanPhone;
}

/**
 * Generates a WhatsApp chat link
 * @param phoneNumber - Phone number (with or without country code)
 * @param message - Pre-filled message (optional)
 * @returns WhatsApp wa.me link
 */
export function generateWhatsAppLink(
  phoneNumber: string,
  message?: string
): string {
  const normalizedPhone = normalizePhoneNumber(phoneNumber);
  const baseUrl = `https://wa.me/${normalizedPhone}`;
  
  if (message) {
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}?text=${encodedMessage}`;
  }

  return baseUrl;
}

/**
 * Validates a phone number format
 * @param phoneNumber - Phone number to validate
 * @returns true if valid, false otherwise
 */
export function isValidPhoneNumber(phoneNumber: string): boolean {
  // Remove all non-digits
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  // Check if it's between 7 and 15 digits (international format)
  return cleanPhone.length >= 7 && cleanPhone.length <= 15;
}


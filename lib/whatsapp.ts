/**
 * Utility functions for WhatsApp integration
 */

/**
 * Generates a WhatsApp chat link
 * @param phoneNumber - Phone number with country code (without + sign)
 * @param message - Pre-filled message (optional)
 * @returns WhatsApp wa.me link
 */
export function generateWhatsAppLink(
  phoneNumber: string,
  message?: string
): string {
  // Clean phone number - remove all non-digits
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  
  if (!cleanPhone) {
    throw new Error('Phone number is required');
  }

  const baseUrl = `https://wa.me/${cleanPhone}`;
  
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


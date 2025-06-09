
import { sanitizeText } from './sanitization';

// Email validation with stricter pattern
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Phone validation (US format)
const PHONE_REGEX = /^\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;

// Name validation (only letters, spaces, hyphens, apostrophes)
const NAME_REGEX = /^[a-zA-Z\s\-']{1,50}$/;

// Company name validation (alphanumeric, spaces, basic punctuation)
const COMPANY_REGEX = /^[a-zA-Z0-9\s\-'.,&()]{1,100}$/;

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  sanitizedValue?: string;
}

export const validateEmail = (email: string): ValidationResult => {
  const sanitized = sanitizeText(email).trim().toLowerCase();
  
  if (!sanitized) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (sanitized.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }
  
  if (!EMAIL_REGEX.test(sanitized)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true, sanitizedValue: sanitized };
};

export const validateName = (name: string, fieldName: string = 'Name'): ValidationResult => {
  const sanitized = sanitizeText(name).trim();
  
  if (!sanitized) {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  if (sanitized.length < 2) {
    return { isValid: false, error: `${fieldName} must be at least 2 characters` };
  }
  
  if (!NAME_REGEX.test(sanitized)) {
    return { isValid: false, error: `${fieldName} contains invalid characters` };
  }
  
  return { isValid: true, sanitizedValue: sanitized };
};

export const validatePhone = (phone: string): ValidationResult => {
  const sanitized = sanitizeText(phone).trim();
  
  if (!sanitized) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  // Remove all non-digit characters for validation
  const digitsOnly = sanitized.replace(/\D/g, '');
  
  if (digitsOnly.length < 10 || digitsOnly.length > 11) {
    return { isValid: false, error: 'Please enter a valid phone number' };
  }
  
  if (!PHONE_REGEX.test(sanitized)) {
    return { isValid: false, error: 'Please enter a valid phone number format' };
  }
  
  return { isValid: true, sanitizedValue: sanitized };
};

export const validateCompany = (company: string): ValidationResult => {
  const sanitized = sanitizeText(company).trim();
  
  if (!sanitized) {
    return { isValid: false, error: 'Company name is required' };
  }
  
  if (sanitized.length < 2) {
    return { isValid: false, error: 'Company name must be at least 2 characters' };
  }
  
  if (!COMPANY_REGEX.test(sanitized)) {
    return { isValid: false, error: 'Company name contains invalid characters' };
  }
  
  return { isValid: true, sanitizedValue: sanitized };
};

export const validateTextArea = (text: string, maxLength: number = 1000): ValidationResult => {
  const sanitized = sanitizeText(text).trim();
  
  if (sanitized.length > maxLength) {
    return { isValid: false, error: `Text must be ${maxLength} characters or less` };
  }
  
  return { isValid: true, sanitizedValue: sanitized };
};

// Rate limiting utility (client-side)
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  
  isAllowed(key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < windowMs);
    
    if (recentAttempts.length >= maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    return true;
  }
}

export const rateLimiter = new RateLimiter();

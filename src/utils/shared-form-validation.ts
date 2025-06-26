
import { sanitizeAndValidateInput, securityMonitor } from '@/utils/security';
import { validateEmail, validateName, validateTextArea, rateLimiter } from '@/utils/formValidation';

interface ValidationResult {
  isValid: boolean;
  error?: string;
  sanitizedValue?: string;
}

interface FormValidationConfig {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  type: 'email' | 'name' | 'textarea' | 'text';
}

// Enhanced rate limiter with progressive delays
class EnhancedRateLimiter {
  private attempts: Map<string, { times: number[], violations: number }> = new Map();
  
  isAllowed(key: string, maxAttempts: number = 3, windowMs: number = 60000): boolean {
    const now = Date.now();
    const record = this.attempts.get(key) || { times: [], violations: 0 };
    
    // Remove old attempts outside the window
    const recentAttempts = record.times.filter(time => now - time < windowMs);
    
    if (recentAttempts.length >= maxAttempts) {
      record.violations += 1;
      this.attempts.set(key, { times: recentAttempts, violations: record.violations });
      
      // Log security event for rate limiting
      securityMonitor.logEvent('rate_limit_exceeded', 
        `Rate limit exceeded for ${key}, violations: ${record.violations}`, 
        record.violations > 3 ? 'high' : 'medium'
      );
      
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(key, { times: recentAttempts, violations: record.violations });
    return true;
  }
  
  getViolationCount(key: string): number {
    return this.attempts.get(key)?.violations || 0;
  }
  
  getProgressiveDelay(key: string): number {
    const violations = this.getViolationCount(key);
    // Progressive delay: 1s, 5s, 15s, 30s, 60s
    const delays = [1000, 5000, 15000, 30000, 60000];
    return delays[Math.min(violations, delays.length - 1)] || 60000;
  }
}

const enhancedRateLimiter = new EnhancedRateLimiter();

export const validateFormField = (
  fieldName: string,
  value: string,
  config: FormValidationConfig
): ValidationResult => {
  try {
    // Security validation first
    sanitizeAndValidateInput(value, `form-${fieldName}`);
    
    // Field-specific validation
    let validation: ValidationResult;
    
    switch (config.type) {
      case 'email':
        validation = validateEmail(value);
        break;
      case 'name':
        validation = validateName(value, fieldName);
        break;
      case 'textarea':
        validation = validateTextArea(value, config.maxLength || 1000);
        break;
      case 'text':
        if (!value && config.required) {
          validation = { isValid: false, error: `${fieldName} is required` };
        } else if (value.length < (config.minLength || 0)) {
          validation = { isValid: false, error: `${fieldName} must be at least ${config.minLength} characters` };
        } else if (value.length > (config.maxLength || 255)) {
          validation = { isValid: false, error: `${fieldName} must be ${config.maxLength} characters or less` };
        } else {
          validation = { isValid: true, sanitizedValue: value };
        }
        break;
      default:
        validation = { isValid: true, sanitizedValue: value };
    }
    
    // Log validation failures for security monitoring
    if (!validation.isValid) {
      securityMonitor.logEvent('form_validation_failure', 
        `Validation failed for ${fieldName}: ${validation.error}`, 
        'low'
      );
    }
    
    return validation;
  } catch (error) {
    securityMonitor.logEvent('form_validation_failure', 
      `Security validation failed for ${fieldName}: ${error}`, 
      'high'
    );
    return { isValid: false, error: 'Invalid input detected' };
  }
};

export const checkRateLimit = (formType: string, maxAttempts: number = 3, windowMs: number = 60000): boolean => {
  return enhancedRateLimiter.isAllowed(formType, maxAttempts, windowMs);
};

export const getRateLimitDelay = (formType: string): number => {
  return enhancedRateLimiter.getProgressiveDelay(formType);
};

export const validateAllFields = <T extends Record<string, string>>(
  formData: T,
  fieldConfigs: Record<keyof T, FormValidationConfig>
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  let isValid = true;
  
  for (const [fieldName, value] of Object.entries(formData)) {
    const config = fieldConfigs[fieldName as keyof T];
    if (config) {
      const validation = validateFormField(fieldName, value, config);
      if (!validation.isValid) {
        errors[fieldName] = validation.error || 'Invalid input';
        isValid = false;
      }
    }
  }
  
  return { isValid, errors };
};

// Enhanced form security with CSRF-like protection
export const validateFormSecurity = (formData: FormData): { isValid: boolean; error?: string } => {
  // Check honeypot
  const honeypotValue = formData.get('website_url');
  if (honeypotValue && honeypotValue.toString().trim() !== '') {
    securityMonitor.logEvent('bot_detected', 'Honeypot field filled', 'high');
    return { isValid: false, error: 'Security validation failed' };
  }
  
  // Check form token if present
  const formToken = formData.get('form_token');
  if (formToken && !securityMonitor.validateFormToken(formToken.toString())) {
    return { isValid: false, error: 'Form session expired. Please refresh and try again.' };
  }
  
  return { isValid: true };
};

// Form security helper for React components
export const useFormSecurity = () => {
  const generateFormToken = () => securityMonitor.generateFormToken();
  
  const createSecureForm = (formElement: HTMLFormElement) => {
    // Add honeypot field
    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = 'website_url';
    honeypot.style.display = 'none';
    honeypot.style.visibility = 'hidden';
    honeypot.style.position = 'absolute';
    honeypot.style.left = '-9999px';
    honeypot.tabIndex = -1;
    honeypot.autocomplete = 'off';
    formElement.appendChild(honeypot);
    
    // Add form token
    const tokenField = document.createElement('input');
    tokenField.type = 'hidden';
    tokenField.name = 'form_token';
    tokenField.value = generateFormToken();
    formElement.appendChild(tokenField);
    
    return formElement;
  };
  
  return { generateFormToken, createSecureForm, validateFormSecurity };
};

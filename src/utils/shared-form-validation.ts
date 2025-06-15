
import { sanitizeAndValidateInput } from '@/utils/securityMonitoring';
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
    
    return validation;
  } catch (error) {
    return { isValid: false, error: 'Invalid input detected' };
  }
};

export const checkRateLimit = (formType: string, maxAttempts: number = 3, windowMs: number = 60000): boolean => {
  return rateLimiter.isAllowed(formType, maxAttempts, windowMs);
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

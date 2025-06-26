
import React, { useState, useEffect, useRef } from 'react';
import { Loader2, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContactFormData } from '@/hooks/useContactFormData';
import { submitContactForm } from '@/utils/contactFormSubmission';
import { validateFormField, checkRateLimit, getRateLimitDelay, useFormSecurity } from '@/utils/shared-form-validation';
import { securityMonitor } from '@/utils/securityMonitoring';
import ContactFormField from './form/ContactFormField';

interface FallbackContactFormProps {
  onSubmit: () => void;
}

const FallbackContactForm = ({ onSubmit }: FallbackContactFormProps) => {
  const { formData, updateField, resetForm } = useContactFormData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [rateLimitDelay, setRateLimitDelay] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const { createSecureForm, validateFormSecurity } = useFormSecurity();

  // Setup secure form on mount
  useEffect(() => {
    if (formRef.current) {
      createSecureForm(formRef.current);
    }
  }, [createSecureForm]);

  // Handle rate limit countdown
  useEffect(() => {
    if (rateLimitDelay > 0) {
      const timer = setInterval(() => {
        setRateLimitDelay(prev => Math.max(0, prev - 1000));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [rateLimitDelay]);

  const validateField = (fieldName: keyof typeof formData, value: string) => {
    const fieldConfigs = {
      email: { type: 'email' as const, required: true },
      firstName: { type: 'name' as const, required: true },
      lastName: { type: 'name' as const, required: true },
      message: { type: 'textarea' as const, required: true, maxLength: 1000 }
    };

    const config = fieldConfigs[fieldName];
    if (!config) return true;

    const validation = validateFormField(fieldName, value, config);
    
    if (!validation.isValid) {
      setValidationErrors(prev => ({ ...prev, [fieldName]: validation.error || 'Invalid input' }));
      return false;
    } else {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
      return true;
    }
  };

  const handleFieldChange = (fieldName: keyof typeof formData, value: string) => {
    updateField(fieldName, value);
    validateField(fieldName, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if still in rate limit delay
    if (rateLimitDelay > 0) {
      setValidationErrors({ form: `Please wait ${Math.ceil(rateLimitDelay / 1000)} seconds before trying again.` });
      return;
    }
    
    // Rate limiting check with enhanced security
    if (!checkRateLimit('contact-form', 3, 60000)) {
      const delay = getRateLimitDelay('contact-form');
      setRateLimitDelay(delay);
      setValidationErrors({ form: `Too many submission attempts. Please wait ${Math.ceil(delay / 1000)} seconds.` });
      return;
    }
    
    // Security validation
    if (formRef.current) {
      const formDataObj = new FormData(formRef.current);
      const securityValidation = validateFormSecurity(formDataObj);
      if (!securityValidation.isValid) {
        setValidationErrors({ form: securityValidation.error || 'Security validation failed' });
        return;
      }
    }
    
    // Validate all fields with proper typing
    const fieldsToValidate: (keyof typeof formData)[] = ['email', 'firstName', 'lastName', 'message'];
    let isFormValid = true;
    
    for (const field of fieldsToValidate) {
      const fieldValue = formData[field] || '';
      if (!validateField(field, fieldValue)) {
        isFormValid = false;
      }
    }
    
    if (!isFormValid) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData, () => {
        resetForm();
        setValidationErrors({});
        onSubmit();
      });
    } catch (error) {
      console.error('Error processing form submission:', error);
      securityMonitor.logEvent('form_validation_failure', 
        `Contact form submission error: ${error}`, 
        'medium'
      );
      setValidationErrors({ form: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isRateLimited = rateLimitDelay > 0;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {validationErrors.form && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
          {validationErrors.form}
        </div>
      )}
      
      {isRateLimited && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-3 rounded-md text-sm">
          Security cooldown: {Math.ceil(rateLimitDelay / 1000)} seconds remaining
        </div>
      )}
      
      <ContactFormField
        id="message"
        label="How Can We Help?"
        type="textarea"
        value={formData.message}
        onChange={(value) => handleFieldChange('message', value)}
        placeholder="Tell us about your project and how we can help..."
        required
        icon={MessageSquare}
        error={validationErrors.message}
      />
      
      <ContactFormField
        id="email"
        label="Work Email"
        type="email"
        value={formData.email}
        onChange={(value) => handleFieldChange('email', value)}
        placeholder="your.email@company.com"
        required
        icon={Mail}
        error={validationErrors.email}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactFormField
          id="firstName"
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={(value) => handleFieldChange('firstName', value)}
          placeholder="First name"
          required
          icon={User}
          error={validationErrors.firstName}
        />
        
        <ContactFormField
          id="lastName"
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={(value) => handleFieldChange('lastName', value)}
          placeholder="Last name"
          required
          icon={User}
          error={validationErrors.lastName}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-dataops-600 hover:bg-dataops-700 text-white"
        disabled={isSubmitting || Object.keys(validationErrors).length > 0 || isRateLimited}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Preparing Email...
          </>
        ) : isRateLimited ? (
          `Wait ${Math.ceil(rateLimitDelay / 1000)}s`
        ) : (
          'Send Message'
        )}
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to receive marketing communications from DataOps Group.
        <br />
        <span className="text-xs text-gray-400">Protected by advanced security measures.</span>
      </p>
    </form>
  );
};

export default FallbackContactForm;

import React, { useState, useEffect, useRef } from 'react';
import { Loader2, Mail, User, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { validateFormField, checkRateLimit, getRateLimitDelay, useFormSecurity } from '@/utils/shared-form-validation';
import { securityMonitor } from '@/utils/security';

interface FallbackFormProps {
  onSubmit: () => void;
}

const FallbackForm = ({ onSubmit }: FallbackFormProps) => {
  const [formData, setFormData] = useState({ firstName: '', email: '' });
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

  const validateField = (fieldName: string, value: string) => {
    const fieldConfigs = {
      email: { type: 'email' as const, required: true },
      firstName: { type: 'name' as const, required: true }
    };

    const config = fieldConfigs[fieldName as keyof typeof fieldConfigs];
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

  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
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
    if (!checkRateLimit('book-form', 2, 60000)) {
      const delay = getRateLimitDelay('book-form');
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
    
    // Validate all fields
    const isFirstNameValid = validateField('firstName', formData.firstName);
    const isEmailValid = validateField('email', formData.email);
    
    if (!isFirstNameValid || !isEmailValid) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission (in a real app, you'd send this to your backend)
      console.log('Fallback form submitted:', formData);
      
      // Track the submission
      if (window.gtag) {
        window.gtag('event', 'form_submission', {
          'event_category': 'Book',
          'event_label': 'Sample Chapter Download - Fallback',
          'value': 1
        });
      }
      
      // Clear form and trigger success
      setFormData({ firstName: '', email: '' });
      setValidationErrors({});
      onSubmit();
    } catch (error) {
      console.error('Error submitting fallback form:', error);
      securityMonitor.logEvent('form_validation_failure', 
        `Book form submission error: ${error}`, 
        'medium'
      );
      setValidationErrors({ form: 'There was an error submitting the form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isRateLimited = rateLimitDelay > 0;

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Your Free Sample Chapter</h3>
        <p className="text-sm text-gray-600">Fill out the form below to download instantly</p>
      </div>
      
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
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
            First Name *
          </Label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => handleFieldChange('firstName', e.target.value)}
              className={`pl-10 ${validationErrors.firstName ? 'border-red-500 focus:border-red-500' : ''}`}
              placeholder="Enter your first name"
            />
          </div>
          {validationErrors.firstName && (
            <p className="text-sm text-red-600 mt-1">{validationErrors.firstName}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address *
          </Label>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              className={`pl-10 ${validationErrors.email ? 'border-red-500 focus:border-red-500' : ''}`}
              placeholder="Enter your email address"
            />
          </div>
          {validationErrors.email && (
            <p className="text-sm text-red-600 mt-1">{validationErrors.email}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={isSubmitting || Object.keys(validationErrors).length > 0 || isRateLimited}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : isRateLimited ? (
            `Wait ${Math.ceil(rateLimitDelay / 1000)}s`
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              Download Sample Chapter
            </>
          )}
        </Button>
      </form>
      
      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to receive marketing communications from DataOps Group.
        <br />
        <span className="text-xs text-gray-400">Protected by advanced security measures.</span>
      </p>
    </div>
  );
};

export default FallbackForm;

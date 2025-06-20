
import React, { useState } from 'react';
import { Loader2, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContactFormData } from '@/hooks/useContactFormData';
import { submitContactForm } from '@/utils/contactFormSubmission';
import { validateFormField, checkRateLimit } from '@/utils/shared-form-validation';
import ContactFormField from './form/ContactFormField';

interface FallbackContactFormProps {
  onSubmit: () => void;
}

const FallbackContactForm = ({ onSubmit }: FallbackContactFormProps) => {
  const { formData, updateField, resetForm } = useContactFormData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

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
    
    // Rate limiting check
    if (!checkRateLimit('contact-form', 3, 60000)) {
      setValidationErrors({ form: 'Too many submission attempts. Please wait a minute.' });
      return;
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
      setValidationErrors({ form: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {validationErrors.form && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
          {validationErrors.form}
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
        disabled={isSubmitting || Object.keys(validationErrors).length > 0}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Preparing Email...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to receive marketing communications from DataOps Group.
      </p>
    </form>
  );
};

export default FallbackContactForm;

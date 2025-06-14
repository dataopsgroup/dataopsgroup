
import React, { useState } from 'react';
import { Loader2, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContactFormData } from '@/hooks/useContactFormData';
import { submitContactForm } from '@/utils/contactFormSubmission';
import ContactFormField from './form/ContactFormField';

interface FallbackContactFormProps {
  onSubmit: () => void;
}

const FallbackContactForm = ({ onSubmit }: FallbackContactFormProps) => {
  const { formData, updateField, resetForm } = useContactFormData();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData, () => {
        resetForm();
        onSubmit();
      });
    } catch (error) {
      console.error('Error processing form submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <ContactFormField
        id="message"
        label="How Can We Help?"
        type="textarea"
        value={formData.message}
        onChange={(value) => updateField('message', value)}
        placeholder="Tell us about your project and how we can help..."
        required
        icon={MessageSquare}
      />
      
      <ContactFormField
        id="email"
        label="Work Email"
        type="email"
        value={formData.email}
        onChange={(value) => updateField('email', value)}
        placeholder="your.email@company.com"
        required
        icon={Mail}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactFormField
          id="firstName"
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={(value) => updateField('firstName', value)}
          placeholder="First name"
          required
          icon={User}
        />
        
        <ContactFormField
          id="lastName"
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={(value) => updateField('lastName', value)}
          placeholder="Last name"
          required
          icon={User}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-dataops-600 hover:bg-dataops-700 text-white"
        disabled={isSubmitting}
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

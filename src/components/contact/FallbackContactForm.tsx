
import React, { useState } from 'react';
import { Loader2, Mail, User, MessageSquare, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FallbackContactFormProps {
  onSubmit: () => void;
}

const FallbackContactForm = ({ onSubmit }: FallbackContactFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real implementation, you'd send this to your backend
      console.log('Fallback form submitted:', formData);
      
      // Track the submission
      if (window.gtag) {
        window.gtag('event', 'form_submission', {
          'event_category': 'Contact',
          'event_label': 'Contact Form - Fallback',
          'value': 1
        });
      }
      
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit();
    } catch (error) {
      console.error('Error submitting fallback form:', error);
      alert('There was an error submitting the form. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              className="pl-10"
              placeholder="First name"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
            Last Name
          </Label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              className="pl-10"
              placeholder="Last name"
            />
          </div>
        </div>
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
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="pl-10"
            placeholder="your.email@company.com"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
          Company
        </Label>
        <div className="relative mt-1">
          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            className="pl-10"
            placeholder="Your company name"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message *
        </Label>
        <div className="relative mt-1">
          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Textarea
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="pl-10 min-h-[100px]"
            placeholder="Tell us about your project and how we can help..."
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-dataops-600 hover:bg-dataops-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Submitting...
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

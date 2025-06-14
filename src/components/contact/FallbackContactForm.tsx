
import React, { useState } from 'react';
import { Loader2, Mail, User, MessageSquare, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

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
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create email body
      const emailBody = `
New contact form submission from DataOps Group website:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Message: ${formData.message}

Submitted from: ${window.location.href}
Timestamp: ${new Date().toISOString()}
      `.trim();

      // Create mailto link
      const subject = encodeURIComponent('New Contact Form Submission - DataOps Group');
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:geoff@dataopsgroup.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Track the submission
      if (window.gtag) {
        window.gtag('event', 'form_submission', {
          'event_category': 'Contact',
          'event_label': 'Contact Form - Email',
          'value': 1
        });
      }
      
      toast.success("Thank you! Your message has been prepared in your email client. Please send it to complete your submission.", {
        duration: 8000,
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      });
      
      onSubmit();
    } catch (error) {
      console.error('Error processing form submission:', error);
      toast.error('There was an error processing your request. Please try calling us directly at +1 479 844 2052.');
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

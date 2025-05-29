
import React, { useState } from 'react';
import { Loader2, Mail, User, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FallbackFormProps {
  onSubmit: () => void;
}

const FallbackForm = ({ onSubmit }: FallbackFormProps) => {
  const [formData, setFormData] = useState({ firstName: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email) {
      alert('Please fill in all fields');
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
      
      // Trigger download and success
      onSubmit();
    } catch (error) {
      console.error('Error submitting fallback form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Your Free Sample Chapter</h3>
        <p className="text-sm text-gray-600">Fill out the form below to download instantly</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Enter your first name"
            />
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
              placeholder="Enter your email address"
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
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
      </p>
    </div>
  );
};

export default FallbackForm;

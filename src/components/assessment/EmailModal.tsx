
import React, { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { toast } from 'sonner';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (email: string, name: string, company: string) => Promise<void>;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose, onSend }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    name?: string;
    company?: string;
    consent?: string;
  }>({});

  const validateForm = (): boolean => {
    const newErrors: {
      email?: string;
      name?: string;
      company?: string;
      consent?: string;
    } = {};
    
    if (!email) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Please enter a valid email address';
    
    if (!name) newErrors.name = 'Name is required';
    if (!company) newErrors.company = 'Company name is required';
    if (!consent) newErrors.consent = 'You must accept the terms to proceed';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await onSend(email, name, company);
      // The parent component will handle success and closing the modal
    } catch (error) {
      console.error('Email submission error:', error);
      toast.error('Failed to send results. Please try again.');
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Email Your Assessment Results</DialogTitle>
          <DialogDescription>
            We'll send you a detailed PDF report based on your assessment, along with personalized recommendations.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="company" className="block mb-1 font-medium text-gray-700">
              Company Name*
            </label>
            <input
              type="text"
              id="company"
              placeholder="Company Name"
              className={`w-full p-2 border ${errors.company ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              disabled={isSubmitting}
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company}</p>
            )}
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              className={`mt-1 mr-2 ${errors.consent ? 'border-red-500' : ''}`}
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              disabled={isSubmitting}
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              I agree to receive my assessment results and occasional follow-up communications. You can unsubscribe at any time.
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-sm mt-1">{errors.consent}</p>
          )}
          
          <DialogFooter className="mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-dataops-600 hover:bg-dataops-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send My Results'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;

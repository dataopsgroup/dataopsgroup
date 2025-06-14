
import { toast } from 'sonner';
import { ContactFormData } from '@/hooks/useContactFormData';

export const submitContactForm = async (
  formData: ContactFormData,
  onSuccess: () => void
): Promise<void> => {
  if (!formData.firstName || !formData.email || !formData.message) {
    toast.error('Please fill in all required fields');
    throw new Error('Required fields missing');
  }

  // Create email body
  const emailBody = `
New contact form submission from DataOps Group website:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
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
  
  onSuccess();
};

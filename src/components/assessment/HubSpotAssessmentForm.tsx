
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

// Use memo to prevent unnecessary re-renders
const ContactCard = React.memo(({ children }: { children: React.ReactNode }) => (
  <Card>
    <CardContent className="pt-6">
      {children}
    </CardContent>
  </Card>
));

ContactCard.displayName = 'ContactCard';

const HubSpotAssessmentForm = () => {
  const scriptLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    // Only load the script if it hasn't been loaded already
    if (!scriptLoadedRef.current) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/21794360.js';
      script.defer = true;
      document.body.appendChild(script);
      scriptLoadedRef.current = true;

      // Add form submission tracking when the script loads
      script.onload = () => {
        // Add event listeners for form submission tracking
        const checkForForm = setInterval(() => {
          const form = document.querySelector('.hs-form-frame form');
          if (form) {
            clearInterval(checkForForm);
            
            form.addEventListener('submit', () => {
              // Track form submission in Google Analytics
              if (window.gtag) {
                window.gtag('event', 'form_submission', {
                  'event_category': 'Assessment',
                  'event_label': 'HubSpot Assessment Form',
                  'value': 1,
                  'conversion': true
                });
                
                // Conversion tracking
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-16996265146/assessment_form_submission',
                  'value': 1.0,
                  'currency': 'USD'
                });
              }
              
              // Show success toast
              toast.success("Assessment submitted successfully! We'll send your results shortly.", {
                duration: 5000,
              });
            });

            // Add accessibility attributes
            form.setAttribute('data-testid', 'assessment-form');
            form.setAttribute('aria-label', 'HubSpot Assessment Form');
            
            // Make the form accessible
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach((input: Element) => {
              if (input instanceof HTMLElement && !input.getAttribute('aria-label')) {
                const label = input.getAttribute('placeholder') || '';
                input.setAttribute('aria-label', label);
              }
            });
            
            // Add form interaction tracking
            const trackFieldInteraction = (fieldName: string, action: string) => {
              if (window.gtag) {
                window.gtag('event', 'form_field_interaction', {
                  'event_category': 'Assessment Form',
                  'event_label': fieldName,
                  'action': action
                });
              }
            };
            
            inputs.forEach((input: Element) => {
              if (input instanceof HTMLElement) {
                const fieldName = input.getAttribute('name') || input.id || 'unknown';
                
                input.addEventListener('focus', () => {
                  trackFieldInteraction(fieldName, 'focus');
                });
                
                input.addEventListener('blur', () => {
                  trackFieldInteraction(fieldName, 'complete');
                });
              }
            });
          }
        }, 100);

        // Stop checking after 10 seconds
        setTimeout(() => clearInterval(checkForForm), 10000);
      };
    }

    return () => {
      // Clean up script if component unmounts
      const scriptToRemove = document.querySelector('script[src="https://js.hsforms.net/forms/embed/21794360.js"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <ContactCard>
      <div className="hs-form-frame min-h-[400px]" 
           data-region="na1" 
           data-form-id="5fa0be50-a566-4e8c-a5e6-79486ef220ee" 
           data-portal-id="21794360"
           aria-live="polite">
        <div className="flex justify-center items-center h-20">
          <p className="text-gray-500">Loading assessment form...</p>
        </div>
      </div>
    </ContactCard>
  );
};

export default HubSpotAssessmentForm;

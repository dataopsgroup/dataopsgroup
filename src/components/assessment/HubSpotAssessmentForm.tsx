
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
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    // Create HubSpot script with the new form ID
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/21794360.js';
    script.defer = true;
    document.body.appendChild(script);

    // Add onload handler to initialize form
    script.onload = () => {
      if (window.hbspt && !formLoadedRef.current) {
        formLoadedRef.current = true;
        window.hbspt.forms.create({
          portalId: "21794360",
          formId: "5fa0be50-a566-4e8c-a5e6-79486ef220ee",
          region: "na1",
          target: "#hubspot-assessment-form-container",
          redirectUrl: `${window.location.origin}/hubspot-assessment-results`,
          onFormSubmit: () => {
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
          },
          onFormReady: () => {
            // Form is ready
            const formElement = formContainerRef.current?.querySelector('form');
            if (formElement) {
              formElement.setAttribute('data-testid', 'assessment-form');
              formElement.setAttribute('aria-label', 'HubSpot Assessment Form');
              
              // Make the form accessible
              const inputs = formElement.querySelectorAll('input, select, textarea');
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
          }
        });
      }
    };

    return () => {
      // Clean up
      const scriptToRemove = document.querySelector('script[src="https://js.hsforms.net/forms/embed/21794360.js"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
      // Remove any HubSpot form elements that might have been created
      const formContainer = document.getElementById('hubspot-assessment-form-container');
      if (formContainer) {
        while (formContainer.firstChild) {
          formContainer.removeChild(formContainer.firstChild);
        }
      }
      formLoadedRef.current = false;
    };
  }, []);

  return (
    <ContactCard>
      <div id="hubspot-assessment-form-container" ref={formContainerRef} className="min-h-[400px]" aria-live="polite">
        <div className="flex justify-center items-center h-20">
          <p className="text-gray-500">Loading assessment form...</p>
        </div>
      </div>
    </ContactCard>
  );
};

export default HubSpotAssessmentForm;

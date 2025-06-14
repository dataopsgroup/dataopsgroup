
import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
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

const Contact = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    // Initialize HubSpot queue if it doesn't exist
    if (typeof window !== 'undefined' && !window._hsq) {
      window._hsq = [];
    }

    const loadHubSpotForm = () => {
      // Check if form is already loaded
      if (formLoadedRef.current) return;

      console.log('Loading HubSpot form...');
      
      // Create HubSpot script
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      
      script.onload = () => {
        console.log('HubSpot script loaded successfully');
        
        if (window.hbspt && !formLoadedRef.current) {
          formLoadedRef.current = true;
          
          // Check current cookie consent status
          const cookieConsent = localStorage.getItem('cookie-consent');
          const hasConsent = cookieConsent === 'accepted';
          
          try {
            window.hbspt.forms.create({
              portalId: "21794360",
              formId: "017ded40-83ce-44ac-a1f5-770ef2e04805",
              region: "na1",
              target: "#hubspot-form-container",
              redirectUrl: `${window.location.origin}/contact-thank-you`,
              
              // Disable HubSpot's cookie banner and tracking
              cookieTracking: false,
              disableCookieSubmission: !hasConsent,
              
              // Additional privacy settings
              privacyConsent: {
                checkboxes: [],
                communicationConsentRequired: false,
                processingConsentRequired: false
              },
              
              onFormSubmit: () => {
                console.log('HubSpot form submitted successfully');
                
                // Track form submission in Google Analytics only if consent given
                if (hasConsent && typeof window !== 'undefined' && window.gtag) {
                  try {
                    window.gtag('event', 'form_submission', {
                      'event_category': 'Contact',
                      'event_label': 'Contact Form',
                      'value': 1,
                      'conversion': true
                    });
                    
                    // Conversion tracking
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-16996265146/contact_form_submission',
                      'value': 1.0,
                      'currency': 'USD'
                    });
                  } catch (error) {
                    console.warn('Analytics tracking failed:', error);
                  }
                }
                
                // Show success toast
                toast.success("Form submitted successfully! We'll be in touch shortly.", {
                  duration: 5000,
                });
              },
              
              onFormReady: () => {
                console.log('HubSpot form ready');
                // Form is ready
                const formElement = formContainerRef.current?.querySelector('form');
                if (formElement) {
                  // Add custom styles or event listeners if needed
                  formElement.setAttribute('data-testid', 'contact-form');
                  formElement.setAttribute('aria-label', 'Contact DataOps Group');
                  
                  // Make the form accessible
                  const inputs = formElement.querySelectorAll('input, select, textarea');
                  inputs.forEach((input: Element) => {
                    // Add missing aria attributes if needed
                    if (input instanceof HTMLElement && !input.getAttribute('aria-label')) {
                      const label = input.getAttribute('placeholder') || '';
                      input.setAttribute('aria-label', label);
                    }
                  });
                }
              },
              
              onFormFailedValidation: () => {
                console.log('HubSpot form validation failed');
              }
            });
          } catch (error) {
            console.error('Error creating HubSpot form:', error);
            // Show fallback message
            const container = document.getElementById('hubspot-form-container');
            if (container) {
              container.innerHTML = '<p class="text-gray-500">Form temporarily unavailable. Please call us at +1 479 844 2052.</p>';
            }
          }
        }
      };

      script.onerror = () => {
        console.error('Failed to load HubSpot forms script');
        // Show fallback message
        const container = document.getElementById('hubspot-form-container');
        if (container) {
          container.innerHTML = '<p class="text-gray-500">Form temporarily unavailable. Please call us at +1 479 844 2052.</p>';
        }
      };

      document.body.appendChild(script);
    };

    // Load form with a small delay to ensure DOM is ready
    const timer = setTimeout(loadHubSpotForm, 100);

    return () => {
      clearTimeout(timer);
      // Clean up
      const scriptToRemove = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
      // Remove any HubSpot form elements that might have been created
      const formContainer = document.getElementById('hubspot-form-container');
      if (formContainer) {
        while (formContainer.firstChild) {
          formContainer.removeChild(formContainer.firstChild);
        }
      }
      formLoadedRef.current = false;
    };
  }, []);

  return (
    <section id="contact" className="mb-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <ContactCard>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-dataops-600 mr-3 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-medium mb-1 text-xl">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+14798442052" className="hover:text-dataops-600 transition-colors">
                      +1 479 844 2052
                    </a>
                  </p>
                  <p className="text-gray-600">Mon-Thu, 9am-5pm CT</p>
                </div>
              </div>
            </ContactCard>
          </div>
          
          {/* HubSpot Contact Form */}
          <div className="md:col-span-2">
            <ContactCard>
              <div id="hubspot-form-container" ref={formContainerRef} className="min-h-[400px]" aria-live="polite">
                <div className="flex justify-center items-center h-20">
                  <p className="text-gray-500">Loading form...</p>
                </div>
              </div>
            </ContactCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

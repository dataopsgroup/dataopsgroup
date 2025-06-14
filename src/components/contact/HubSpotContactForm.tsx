
import React, { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import ContactCard from './ContactCard';

const HubSpotContactForm = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formLoadedRef = useRef<boolean>(false);
  const initAttemptedRef = useRef<boolean>(false);

  useEffect(() => {
    // Prevent multiple initialization attempts
    if (initAttemptedRef.current) return;
    initAttemptedRef.current = true;

    // Initialize HubSpot queue if it doesn't exist
    if (typeof window !== 'undefined' && !window._hsq) {
      window._hsq = [];
    }

    const createForm = () => {
      if (formLoadedRef.current || !window.hbspt?.forms) {
        return;
      }

      console.log('Creating HubSpot form...');
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
          disableCookieSubmission: !hasConsent,
          
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
            console.log('HubSpot form ready and displayed');
            // Form is ready
            const formElement = formContainerRef.current?.querySelector('form');
            if (formElement) {
              formElement.setAttribute('data-testid', 'contact-form');
              formElement.setAttribute('aria-label', 'Contact DataOps Group');
            }
          },
          
          onFormFailedValidation: () => {
            console.log('HubSpot form validation failed');
          }
        });
      } catch (error) {
        console.error('Error creating HubSpot form:', error);
        showFallbackMessage();
      }
    };

    const loadHubSpotScript = () => {
      console.log('Loading HubSpot script...');
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      
      script.onload = () => {
        console.log('HubSpot script loaded successfully');
        // Wait for hbspt to be fully available
        let attempts = 0;
        const checkHubSpot = () => {
          attempts++;
          if (window.hbspt?.forms) {
            createForm();
          } else if (attempts < 10) {
            setTimeout(checkHubSpot, 200);
          } else {
            console.error('HubSpot forms not available after script load');
            showFallbackMessage();
          }
        };
        checkHubSpot();
      };

      script.onerror = () => {
        console.error('Failed to load HubSpot forms script');
        showFallbackMessage();
      };

      document.head.appendChild(script);
    };

    const showFallbackMessage = () => {
      const container = document.getElementById('hubspot-form-container');
      if (container) {
        container.innerHTML = '<p class="text-gray-500">Form temporarily unavailable. Please call us at +1 479 844 2052.</p>';
      }
    };

    // Check if HubSpot is already available
    if (window.hbspt?.forms) {
      console.log('HubSpot already available, creating form...');
      createForm();
    } else {
      // Check if script is already loading
      const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
      if (existingScript) {
        console.log('HubSpot script already exists, waiting for load...');
        // Wait for existing script to load
        let attempts = 0;
        const checkExistingScript = () => {
          attempts++;
          if (window.hbspt?.forms) {
            createForm();
          } else if (attempts < 15) {
            setTimeout(checkExistingScript, 300);
          } else {
            console.log('Existing script timeout, loading new script');
            loadHubSpotScript();
          }
        };
        checkExistingScript();
      } else {
        loadHubSpotScript();
      }
    }

    return () => {
      formLoadedRef.current = false;
    };
  }, []);

  return (
    <ContactCard>
      <div id="hubspot-form-container" ref={formContainerRef} className="min-h-[400px]" aria-live="polite">
        <div className="flex justify-center items-center h-20">
          <p className="text-gray-500">Loading form...</p>
        </div>
      </div>
    </ContactCard>
  );
};

export default HubSpotContactForm;

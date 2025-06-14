
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import ContactCard from './ContactCard';
import FallbackContactForm from './FallbackContactForm';

const HubSpotContactForm = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<'loading' | 'ready' | 'error' | 'fallback'>('loading');
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 2; // Reduced retries
  const mountedRef = useRef(true);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    
    const initializeForm = async () => {
      if (!mountedRef.current) return;

      try {
        console.log(`HubSpot form initialization attempt ${retryCount + 1}`);
        
        // Load HubSpot script if not already loaded
        if (!scriptLoadedRef.current && !window.hbspt) {
          await loadHubSpotScript();
        }
        
        // Wait for HubSpot to be available
        await waitForHubSpot();
        
        // Create the form
        if (window.hbspt && window.hbspt.forms && formContainerRef.current) {
          window.hbspt.forms.create({
            portalId: "21794360",
            formId: "017ded40-83ce-44ac-a1f5-770ef2e04805",
            region: "na1",
            target: "#hubspot-form-container",
            redirectUrl: `${window.location.origin}/contact-thank-you`,
            onFormSubmit: () => {
              if (mountedRef.current) {
                console.log('HubSpot form submitted successfully');
                toast.success("Form submitted successfully! We'll be in touch shortly.", {
                  duration: 5000,
                });
                
                // Track submission regardless of consent for conversion tracking
                if (window.gtag) {
                  try {
                    window.gtag('event', 'form_submission', {
                      'event_category': 'Contact',
                      'event_label': 'Contact Form',
                      'value': 1,
                      'conversion': true
                    });
                  } catch (error) {
                    console.warn('Analytics tracking failed:', error);
                  }
                }
              }
            },
            onFormReady: () => {
              if (mountedRef.current) {
                console.log('HubSpot form ready');
                setFormState('ready');
                
                // Add accessibility attributes
                const formElement = formContainerRef.current?.querySelector('form');
                if (formElement) {
                  formElement.setAttribute('data-testid', 'contact-form');
                  formElement.setAttribute('aria-label', 'Contact DataOps Group');
                }
              }
            },
            onFormFailedValidation: () => {
              console.log('HubSpot form validation failed');
            }
          });
        } else {
          throw new Error('HubSpot forms not available');
        }
      } catch (error) {
        console.error(`Form initialization error (attempt ${retryCount + 1}):`, error);
        
        if (mountedRef.current) {
          if (retryCount < maxRetries) {
            console.log(`Retrying in 2 seconds...`);
            setTimeout(() => {
              if (mountedRef.current) {
                setRetryCount(prev => prev + 1);
              }
            }, 2000);
          } else {
            console.log('Max retries reached, showing fallback form');
            setFormState('fallback');
          }
        }
      }
    };

    const timer = setTimeout(initializeForm, 100);

    return () => {
      mountedRef.current = false;
      clearTimeout(timer);
    };
  }, [retryCount]);

  const loadHubSpotScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (scriptLoadedRef.current || window.hbspt) {
        resolve();
        return;
      }

      const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
      if (existingScript) {
        scriptLoadedRef.current = true;
        resolve();
        return;
      }

      console.log('Loading HubSpot forms script...');
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;

      script.onload = () => {
        console.log('HubSpot forms script loaded');
        scriptLoadedRef.current = true;
        resolve();
      };

      script.onerror = () => {
        console.error('Failed to load HubSpot forms script');
        reject(new Error('Script load failed'));
      };

      document.head.appendChild(script);
    });
  };

  const waitForHubSpot = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 15;
      
      const checkHubSpot = () => {
        attempts++;
        if (window.hbspt?.forms) {
          resolve();
        } else if (attempts < maxAttempts) {
          setTimeout(checkHubSpot, 200);
        } else {
          reject(new Error('HubSpot not available after script load'));
        }
      };
      
      checkHubSpot();
    });
  };

  const handleRetry = () => {
    setFormState('loading');
    setRetryCount(0);
  };

  const handleFallbackSubmit = () => {
    toast.success("Thank you! We'll be in touch shortly.", {
      duration: 5000,
    });
  };

  if (formState === 'fallback') {
    return (
      <ContactCard>
        <div className="space-y-4">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
            <p className="text-sm text-gray-600">
              Having trouble with the form? Call us directly at{' '}
              <a href="tel:+14798442052" className="text-dataops-600 hover:underline font-medium">
                +1 479 844 2052
              </a>
            </p>
          </div>
          <FallbackContactForm onSubmit={handleFallbackSubmit} />
          <div className="text-center">
            <button
              onClick={handleRetry}
              className="text-sm text-dataops-600 hover:underline"
            >
              Try loading HubSpot form again
            </button>
          </div>
        </div>
      </ContactCard>
    );
  }

  return (
    <ContactCard>
      <div className="relative min-h-[400px]">
        {/* Loading overlay */}
        {formState === 'loading' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-white z-10">
            <Loader2 className="h-8 w-8 animate-spin text-dataops-600" />
            <p className="text-gray-600">Loading contact form...</p>
            {retryCount > 0 && (
              <p className="text-sm text-gray-500">Attempt {retryCount + 1} of {maxRetries + 1}</p>
            )}
          </div>
        )}

        {/* HubSpot form container */}
        <div 
          id="hubspot-form-container" 
          ref={formContainerRef} 
          className="min-h-[400px]"
          aria-live="polite"
          style={{ 
            visibility: formState === 'ready' ? 'visible' : 'hidden',
            position: formState === 'ready' ? 'relative' : 'absolute'
          }}
        />
      </div>
    </ContactCard>
  );
};

export default HubSpotContactForm;


import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import ContactCard from './ContactCard';
import { hubspotService } from '@/services/hubspotService';

const HubSpotContactForm = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    
    const initializeForm = async () => {
      if (!mountedRef.current) return;

      try {
        console.log(`Initializing HubSpot form (attempt ${retryCount + 1})`);
        
        const success = await hubspotService.createForm({
          portalId: "21794360",
          formId: "017ded40-83ce-44ac-a1f5-770ef2e04805",
          region: "na1",
          target: "#hubspot-form-container",
          redirectUrl: `${window.location.origin}/contact-thank-you`,
          onFormSubmit: () => {
            if (mountedRef.current) {
              toast.success("Form submitted successfully! We'll be in touch shortly.", {
                duration: 5000,
              });
            }
          },
          onFormReady: () => {
            if (mountedRef.current) {
              console.log('Form ready, updating state');
              setFormState('ready');
            }
          },
          onFormFailedValidation: () => {
            console.log('Form validation failed');
          }
        });

        if (!success && mountedRef.current) {
          throw new Error('Form creation failed');
        }
      } catch (error) {
        console.error('Form initialization error:', error);
        
        if (mountedRef.current) {
          if (retryCount < maxRetries) {
            console.log(`Retrying form initialization in ${(retryCount + 1) * 2000}ms`);
            setTimeout(() => {
              if (mountedRef.current) {
                setRetryCount(prev => prev + 1);
              }
            }, (retryCount + 1) * 2000);
          } else {
            console.error('Max retries reached, showing error state');
            setFormState('error');
          }
        }
      }
    };

    // Start initialization after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeForm, 300);

    return () => {
      mountedRef.current = false;
      clearTimeout(timer);
    };
  }, [retryCount]);

  const handleRetry = () => {
    setFormState('loading');
    setRetryCount(0);
  };

  return (
    <ContactCard>
      {/* Always render the form container so HubSpot can find it */}
      <div 
        id="hubspot-form-container" 
        ref={formContainerRef} 
        className="min-h-[400px]" 
        aria-live="polite"
      >
        {formState === 'loading' && (
          <div className="flex flex-col items-center justify-center h-64 space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-dataops-600" />
            <p className="text-gray-600">Loading contact form...</p>
            {retryCount > 0 && (
              <p className="text-sm text-gray-500">Attempt {retryCount + 1} of {maxRetries + 1}</p>
            )}
          </div>
        )}
        
        {formState === 'error' && (
          <div className="flex flex-col items-center justify-center h-64 space-y-4 text-center">
            <p className="text-gray-600 mb-4">
              We're having trouble loading the contact form. 
            </p>
            <div className="space-y-3">
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-dataops-600 text-white rounded hover:bg-dataops-700 transition-colors"
              >
                Try Again
              </button>
              <p className="text-sm text-gray-500">
                Or call us directly at{' '}
                <a href="tel:+14798442052" className="text-dataops-600 hover:underline">
                  +1 479 844 2052
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </ContactCard>
  );
};

export default HubSpotContactForm;

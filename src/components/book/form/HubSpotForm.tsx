
import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface HubSpotFormProps {
  onFormReady: () => void;
  onFormFailed: () => void;
  onFormSubmit: () => void;
}

const HubSpotForm = ({ onFormReady, onFormFailed, onFormSubmit }: HubSpotFormProps) => {
  const formLoadedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const FORM_TIMEOUT = 10000; // 10 seconds timeout
    
    const timeoutId = setTimeout(() => {
      if (!formLoadedRef.current) {
        console.log('HubSpot form failed to load within timeout, showing fallback');
        setIsLoading(false);
        onFormFailed();
      }
    }, FORM_TIMEOUT);

    const initializeForm = () => {
      if (formLoadedRef.current) return;
      
      console.log('Attempting to initialize HubSpot form...');
      
      if (typeof window !== 'undefined' && window.hbspt && window.hbspt.forms) {
        try {
          const targetElement = document.getElementById('hubspot-sample-chapter-form');
          if (targetElement && !formLoadedRef.current) {
            console.log('Creating HubSpot form...');
            window.hbspt.forms.create({
              portalId: "21794360",
              formId: "2b7d8957-6b71-4c86-bb95-3c29e0d17e8a",
              region: "na1",
              target: "#hubspot-sample-chapter-form",
              onFormSubmit: () => {
                console.log('HubSpot form submitted successfully');
                clearTimeout(timeoutId);
                onFormSubmit();
                
                if (window.gtag) {
                  window.gtag('event', 'form_submission', {
                    'event_category': 'Book',
                    'event_label': 'Sample Chapter Download',
                    'value': 1
                  });
                }
              },
              onFormReady: () => {
                console.log('HubSpot form ready');
                formLoadedRef.current = true;
                setIsLoading(false);
                clearTimeout(timeoutId);
                onFormReady();
              }
            });
          }
        } catch (error) {
          console.error('Error creating HubSpot form:', error);
          clearTimeout(timeoutId);
          setIsLoading(false);
          onFormFailed();
        }
      } else {
        console.log('HubSpot not available, loading script...');
        loadHubSpotScript();
      }
    };

    const loadHubSpotScript = () => {
      const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
      
      if (!existingScript) {
        console.log('Loading HubSpot script...');
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.charset = 'utf-8';
        script.async = true;
        
        script.onload = () => {
          console.log('HubSpot script loaded successfully');
          setTimeout(initializeForm, 100);
        };
        
        script.onerror = () => {
          console.error('Failed to load HubSpot forms script');
          clearTimeout(timeoutId);
          setIsLoading(false);
          onFormFailed();
        };
        
        document.head.appendChild(script);
      } else {
        console.log('HubSpot script already exists, initializing...');
        setTimeout(initializeForm, 100);
      }
    };

    initializeForm();

    return () => {
      clearTimeout(timeoutId);
      formLoadedRef.current = false;
    };
  }, [onFormReady, onFormFailed, onFormSubmit]);

  return (
    <div className="min-h-[400px]">
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-40 space-y-3">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-gray-500 text-sm">Loading form...</p>
        </div>
      )}
      <div id="hubspot-sample-chapter-form" className={isLoading ? 'hidden' : ''}></div>
    </div>
  );
};

export default HubSpotForm;

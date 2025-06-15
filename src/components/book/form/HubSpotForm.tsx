
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
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    console.log('📋 HubSpot form initialization attempt:', retryCount + 1);
    
    const FORM_TIMEOUT = 10000; // 10 seconds timeout
    
    const timeoutId = setTimeout(() => {
      if (!formLoadedRef.current) {
        console.log('⏰ HubSpot form failed to load within timeout, showing fallback');
        setIsLoading(false);
        onFormFailed();
      }
    }, FORM_TIMEOUT);

    const initializeForm = () => {
      if (formLoadedRef.current) {
        console.log('✅ HubSpot form already loaded, skipping initialization');
        return;
      }
      
      console.log('🔄 Attempting to initialize HubSpot form...');
      
      try {
        if (typeof window !== 'undefined' && window.hbspt && window.hbspt.forms) {
          const targetElement = document.getElementById('hubspot-sample-chapter-form');
          if (targetElement && !formLoadedRef.current) {
            console.log('🎯 Creating HubSpot form...');
            window.hbspt.forms.create({
              portalId: "21794360",
              formId: "2b7d8957-6b71-4c86-bb95-3c29e0d17e8a",
              region: "na1",
              target: "#hubspot-sample-chapter-form",
              onFormSubmit: () => {
                console.log('✅ HubSpot form submitted successfully');
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
                console.log('✅ HubSpot form ready');
                formLoadedRef.current = true;
                setIsLoading(false);
                clearTimeout(timeoutId);
                onFormReady();
              }
            });
          } else if (!targetElement) {
            console.warn('❌ Target element not found for HubSpot form');
            throw new Error('Target element not found');
          }
        } else {
          console.log('📥 HubSpot not available, loading script...');
          loadHubSpotScript();
        }
      } catch (error) {
        console.error('❌ Error creating HubSpot form:', error);
        handleFormError();
      }
    };

    const loadHubSpotScript = () => {
      try {
        const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
        
        if (!existingScript) {
          console.log('📥 Loading HubSpot script...');
          const script = document.createElement('script');
          script.src = '//js.hsforms.net/forms/embed/v2.js';
          script.charset = 'utf-8';
          script.async = true;
          
          script.onload = () => {
            console.log('✅ HubSpot script loaded successfully');
            setTimeout(initializeForm, 100);
          };
          
          script.onerror = () => {
            console.error('❌ Failed to load HubSpot forms script');
            handleFormError();
          };
          
          document.head.appendChild(script);
        } else {
          console.log('♻️ HubSpot script already exists, initializing...');
          setTimeout(initializeForm, 100);
        }
      } catch (error) {
        console.error('❌ Error loading HubSpot script:', error);
        handleFormError();
      }
    };

    const handleFormError = () => {
      clearTimeout(timeoutId);
      
      if (retryCount < maxRetries) {
        console.log(`🔄 Retrying HubSpot form initialization (${retryCount + 1}/${maxRetries})`);
        setRetryCount(prev => prev + 1);
        setTimeout(() => {
          setIsLoading(true);
        }, 2000); // Wait 2 seconds before retry
      } else {
        console.error('❌ Max retries reached, showing fallback form');
        setIsLoading(false);
        onFormFailed();
      }
    };

    // Only initialize if we haven't reached max retries
    if (retryCount <= maxRetries) {
      initializeForm();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onFormReady, onFormFailed, onFormSubmit, retryCount, maxRetries]);

  // Reset form loaded state when retrying
  useEffect(() => {
    if (retryCount > 0) {
      formLoadedRef.current = false;
    }
  }, [retryCount]);

  return (
    <div className="min-h-[400px]">
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-40 space-y-3">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-gray-500 text-sm">
            Loading form...
            {retryCount > 0 && ` (Attempt ${retryCount + 1}/${maxRetries + 1})`}
          </p>
        </div>
      )}
      <div id="hubspot-sample-chapter-form" className={isLoading ? 'hidden' : ''}></div>
    </div>
  );
};

export default HubSpotForm;

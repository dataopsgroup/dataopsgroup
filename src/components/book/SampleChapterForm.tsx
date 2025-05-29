
import React, { useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

const SampleChapterForm = () => {
  const formLoadedRef = useRef(false);

  useEffect(() => {
    // Check if HubSpot script already exists
    const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
    
    if (existingScript) {
      // Script already loaded, try to create form
      initializeForm();
    } else {
      // Load HubSpot forms script
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.async = true;
      
      script.onload = () => {
        initializeForm();
      };
      
      script.onerror = () => {
        console.error('Failed to load HubSpot forms script');
        showErrorMessage();
      };
      
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup when component unmounts
      formLoadedRef.current = false;
    };
  }, []);

  const initializeForm = () => {
    // Wait for DOM to be ready
    setTimeout(() => {
      if (window.hbspt && document.getElementById('hubspot-sample-chapter-form') && !formLoadedRef.current) {
        try {
          window.hbspt.forms.create({
            portalId: "21794360",
            formId: "2b7d8957-6b71-4c86-bb95-3c29e0d17e8a",
            region: "na1",
            target: "#hubspot-sample-chapter-form",
            onFormSubmit: () => {
              console.log('Sample chapter form submitted successfully');
              // Optional: Add analytics tracking here
              if (window.gtag) {
                window.gtag('event', 'form_submission', {
                  'event_category': 'Book',
                  'event_label': 'Sample Chapter Download',
                  'value': 1
                });
              }
            },
            onFormReady: () => {
              formLoadedRef.current = true;
              // Hide loading message
              const loadingElement = document.querySelector('#hubspot-sample-chapter-form .loading-message');
              if (loadingElement && loadingElement instanceof HTMLElement) {
                loadingElement.style.display = 'none';
              }
            }
          });
        } catch (error) {
          console.error('Error creating HubSpot form:', error);
          showErrorMessage();
        }
      } else if (!formLoadedRef.current) {
        // Retry after a short delay
        setTimeout(initializeForm, 500);
      }
    }, 100);
  };

  const showErrorMessage = () => {
    const container = document.getElementById('hubspot-sample-chapter-form');
    if (container) {
      container.innerHTML = `
        <div class="text-center py-8">
          <p class="text-red-600 mb-4">Unable to load the form at this time.</p>
          <p class="text-gray-600 text-sm">Please try refreshing the page or contact us directly at info@dataopsgroup.com</p>
        </div>
      `;
    }
  };

  return (
    <div id="hubspot-sample-chapter-form" className="min-h-[400px]">
      <div className="loading-message flex flex-col items-center justify-center h-40 space-y-3">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <p className="text-gray-500 text-sm">Loading form...</p>
      </div>
    </div>
  );
};

export default SampleChapterForm;

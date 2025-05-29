
import React, { useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

const SampleChapterForm = () => {
  const formLoadedRef = useRef(false);
  const initAttempts = useRef(0);

  useEffect(() => {
    const maxAttempts = 5;
    
    const initializeForm = () => {
      // Prevent infinite initialization attempts
      if (formLoadedRef.current || initAttempts.current >= maxAttempts) {
        return;
      }
      
      initAttempts.current += 1;

      // Check if HubSpot is available
      if (typeof window !== 'undefined' && window.hbspt && window.hbspt.forms) {
        try {
          const targetElement = document.getElementById('hubspot-sample-chapter-form');
          if (targetElement && !formLoadedRef.current) {
            window.hbspt.forms.create({
              portalId: "21794360",
              formId: "2b7d8957-6b71-4c86-bb95-3c29e0d17e8a",
              region: "na1",
              target: "#hubspot-sample-chapter-form",
              onFormSubmit: () => {
                console.log('Sample chapter form submitted successfully');
                triggerFileDownload();
                
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
                const loadingElement = document.querySelector('#hubspot-sample-chapter-form .loading-message');
                if (loadingElement && loadingElement instanceof HTMLElement) {
                  loadingElement.style.display = 'none';
                }
              }
            });
          }
        } catch (error) {
          console.error('Error creating HubSpot form:', error);
          showErrorMessage();
        }
      } else {
        // Load HubSpot script if not available
        loadHubSpotScript();
      }
    };

    const loadHubSpotScript = () => {
      const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.charset = 'utf-8';
        script.async = true;
        
        script.onload = () => {
          setTimeout(initializeForm, 100);
        };
        
        script.onerror = () => {
          console.error('Failed to load HubSpot forms script');
          showErrorMessage();
        };
        
        document.head.appendChild(script);
      } else {
        setTimeout(initializeForm, 100);
      }
    };

    // Start initialization
    setTimeout(initializeForm, 100);

    return () => {
      formLoadedRef.current = false;
      initAttempts.current = 0;
    };
  }, []);

  const triggerFileDownload = () => {
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1I5hdGjfk62vYf_rMBWlrhrrj6p6SUS6h';
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'CMO-Data-Playbook-Sample-Chapter.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

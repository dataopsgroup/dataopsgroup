
import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X, Loader2 } from 'lucide-react';

interface SampleChapterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SampleChapterModal: React.FC<SampleChapterModalProps> = ({ isOpen, onClose }) => {
  const formLoadedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isOpen && !formLoadedRef.current) {
      setIsLoading(true);
      setHasError(false);
      
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
          setHasError(true);
          setIsLoading(false);
        };
        
        document.head.appendChild(script);
      }
    }
  }, [isOpen]);

  const initializeForm = () => {
    // Wait a bit for the DOM to be ready
    setTimeout(() => {
      if (window.hbspt && document.getElementById('sample-chapter-form-container')) {
        try {
          window.hbspt.forms.create({
            portalId: "21794360",
            formId: "2b7d8957-6b71-4c86-bb95-3c29e0d17e8a",
            region: "na1",
            target: "#sample-chapter-form-container",
            onFormSubmit: () => {
              // Trigger PDF download after form submission
              setTimeout(() => {
                console.log('Triggering sample chapter download...');
                // Close modal after successful submission
                onClose();
              }, 1000);
            },
            onFormReady: () => {
              setIsLoading(false);
              formLoadedRef.current = true;
            }
          });
        } catch (error) {
          console.error('Error creating HubSpot form:', error);
          setHasError(true);
          setIsLoading(false);
        }
      } else {
        // Retry after a short delay
        setTimeout(() => {
          if (window.hbspt && document.getElementById('sample-chapter-form-container')) {
            initializeForm();
          } else {
            setHasError(true);
            setIsLoading(false);
          }
        }, 500);
      }
    }, 100);
  };

  const handleClose = () => {
    // Reset states when closing
    setIsLoading(true);
    setHasError(false);
    formLoadedRef.current = false;
    
    // Clear the form container
    const container = document.getElementById('sample-chapter-form-container');
    if (container) {
      container.innerHTML = '';
    }
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
            Download Sample Chapter
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            Get the introduction and first chapter of "The CMO's Data Playbook" free.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div id="sample-chapter-form-container" className="hubspot-form-container min-h-[300px]">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-40 space-y-3">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <p className="text-gray-500 text-sm">Loading form...</p>
              </div>
            )}
            
            {hasError && (
              <div className="flex flex-col items-center justify-center h-40 space-y-3 text-center">
                <div className="text-red-500 text-sm">
                  <p className="font-medium">Unable to load form</p>
                  <p className="mt-2">Please try refreshing the page or contact us directly.</p>
                </div>
                <button 
                  onClick={handleClose}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SampleChapterModal;

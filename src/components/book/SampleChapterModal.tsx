
import React, { useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface SampleChapterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    hbspt: any;
  }
}

const SampleChapterModal: React.FC<SampleChapterModalProps> = ({ isOpen, onClose }) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formLoadedRef = useRef(false);

  useEffect(() => {
    if (isOpen && !formLoadedRef.current) {
      // Load HubSpot forms script
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.async = true;
      
      script.onload = () => {
        if (window.hbspt && formContainerRef.current) {
          window.hbspt.forms.create({
            portalId: "21794360",
            formId: "2b7d8957-6b71-4c86-bb95-3c29e0d17e8a",
            region: "na1",
            target: formContainerRef.current,
            onFormSubmit: () => {
              // Trigger PDF download after form submission
              setTimeout(() => {
                // This will be replaced with actual PDF download once uploaded
                console.log('Triggering sample chapter download...');
                // Close modal after successful submission
                onClose();
              }, 1000);
            }
          });
          formLoadedRef.current = true;
        }
      };
      
      document.head.appendChild(script);
    }
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
            Download Sample Chapter
          </DialogTitle>
          <p className="text-gray-600 text-sm">
            Get the introduction and first chapter of "The CMO's Data Playbook" free.
          </p>
        </DialogHeader>
        
        <div className="mt-4">
          <div ref={formContainerRef} className="hubspot-form-container">
            {/* HubSpot form will be injected here */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SampleChapterModal;

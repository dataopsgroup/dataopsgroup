
import React from 'react';
import { Button } from '@/components/ui/button';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose, onSend }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Email Your Assessment Results</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        
        <p className="mb-4 text-gray-700">
          We'll send you a detailed PDF report based on your assessment, along with personalized recommendations.
        </p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block mb-1 font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              placeholder="Company Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              className="mt-1 mr-2"
              required
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              I agree to receive my assessment results and occasional follow-up communications. You can unsubscribe at any time.
            </label>
          </div>
          
          <Button
            onClick={onSend}
            className="w-full bg-dataops-600 hover:bg-dataops-700 text-white"
          >
            Send My Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;

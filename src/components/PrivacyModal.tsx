
import React from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Privacy Policy</h2>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        <div className="prose">
          <h3>Cookie Policy</h3>
          <p>
            This website uses cookies to enhance your browsing experience. Cookies are small text files
            that are placed on your device to help the site provide a better user experience. In general,
            cookies are used to retain user preferences and provide anonymized tracking data to third-party
            applications like Google Analytics.
          </p>

          <h3>What Information Do We Collect?</h3>
          <p>
            We collect information that you provide directly to us, such as when you fill out a form,
            subscribe to our newsletter, or contact us. This information may include your name, email address,
            company name, and any other information you choose to provide.
          </p>

          <h3>How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Send you technical notices, updates, and administrative messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, and events</li>
          </ul>

          <h3>Third-Party Services</h3>
          <p>
            We may use third-party services, such as Google Analytics, to collect, monitor, and analyze this
            information in order to improve our service's functionality. These third-party service providers
            have their own privacy policies addressing how they use such information.
          </p>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-dataops-600 text-white rounded hover:bg-dataops-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;

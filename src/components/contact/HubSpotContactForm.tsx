
import React from 'react';
import ContactCard from './ContactCard';
import FallbackContactForm from './FallbackContactForm';

const HubSpotContactForm = () => {
  const handleFormSubmit = () => {
    // Form submission is handled within FallbackContactForm
    console.log('Contact form submitted successfully');
  };

  return (
    <ContactCard>
      <div className="space-y-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
          <p className="text-sm text-gray-600">
            Ready to transform your operations? Get in touch today.
          </p>
        </div>
        <FallbackContactForm onSubmit={handleFormSubmit} />
      </div>
    </ContactCard>
  );
};

export default HubSpotContactForm;

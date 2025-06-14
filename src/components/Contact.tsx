
import React from 'react';
import ContactInfo from './contact/ContactInfo';
import HubSpotContactForm from './contact/HubSpotContactForm';

const Contact = () => {
  return (
    <section id="contact" className="mb-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <ContactInfo />
          </div>
          
          {/* HubSpot Contact Form */}
          <div className="md:col-span-2">
            <HubSpotContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

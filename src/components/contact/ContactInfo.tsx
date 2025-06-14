
import React from 'react';
import { Phone } from 'lucide-react';
import ContactCard from './ContactCard';

const ContactInfo = () => {
  return (
    <ContactCard>
      <div className="flex items-start">
        <Phone className="w-5 h-5 text-dataops-600 mr-3 mt-1" aria-hidden="true" />
        <div>
          <h3 className="font-medium mb-1 text-xl">Call Us</h3>
          <p className="text-gray-600">
            <a href="tel:+14798442052" className="hover:text-dataops-600 transition-colors">
              +1 479 844 2052
            </a>
          </p>
          <p className="text-gray-600">Mon-Thu, 9am-5pm CT</p>
        </div>
      </div>
    </ContactCard>
  );
};

export default ContactInfo;

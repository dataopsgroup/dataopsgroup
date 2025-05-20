
import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="bg-dataops-900 text-white py-16" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Data Operations?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Book a consultation today and discover how our expert team can help you maximize your HubSpot investment.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex bg-white text-dataops-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-dataops-50 transition-colors"
          aria-label="Contact us to book a consultation"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;

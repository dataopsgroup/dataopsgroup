
import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="bg-brand-navy text-white py-16" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4 font-rubik">
          Ready to Transform Your Portfolio Operations?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto font-roboto leading-relaxed">
          Get in touch today and discover how our expert team can help you scale proven systems across your portfolio companies and maximize your investment returns.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex bg-brand-saffron text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-saffron/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Contact us to get in touch"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;

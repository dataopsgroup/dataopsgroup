
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  const trackCTAClick = () => {
    // Track in Google Analytics
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        'event_category': 'Engagement',
        'event_label': 'Footer CTA Banner',
        'value': 1
      });
      
      // Enhanced conversion tracking
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16996265146/footer_cta_click',
        'value': 1.0,
        'currency': 'USD'
      });
    }
    
    // Track in HubSpot
    if (window._hsq) {
      window._hsq.push(['trackEvent', {
        id: 'footer_cta_click'
      }]);
    }
  };

  return (
    <section className="gradient-bg py-16" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Fix Your HubSpot Ordeal and Generate Revenue?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Stop throwing money at new leads when your existing contacts could be paying customers. 
          Schedule a consultation to see how we can convert your HubSpot portal into a revenue engine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-white text-dataops-800 hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-dataops-700 focus:outline-none" 
            asChild 
            onClick={trackCTAClick}
          >
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;


import React from 'react';

const HeroAuthority = () => {
  return (
    <section className="trust-section">
      <h2>Companies Trust DataOps Group to Transform Their HubSpot ROI</h2>
      <p className="subtitle">See how we've helped businesses turn their marketing technology investment into measurable revenue growth</p>
      
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <div className="results-badge">47% Lead Growth</div>
          <p className="testimonial-quote">DataOps Group transformed our HubSpot from a glorified contact database into a revenue-generating machine. Our qualified leads increased by 47% in 90 days.</p>
          <div className="company-info">
            <div className="company-name">Atlas World Equipment Wholesaler</div>
            <div className="industry-type">Industrial Equipment • B2B</div>
          </div>
        </div>
        
        <div className="testimonial-card">
          <div className="results-badge">25% Sales Cycle Reduction</div>
          <p className="testimonial-quote">Our sales team finally has the automation and insights they need. We're closing deals 25% faster with better qualified prospects.</p>
          <div className="company-info">
            <div className="company-name">North American Electronics</div>
            <div className="industry-type">Electronics • Manufacturing</div>
          </div>
        </div>
        
        <div className="testimonial-card">
          <div className="results-badge">35% ROI Improvement</div>
          <p className="testimonial-quote">The strategic overhaul of our HubSpot workflows delivered measurable results within the first quarter. Best investment we've made.</p>
          <div className="company-info">
            <div className="company-name">Swift Electronics</div>
            <div className="industry-type">Technology • B2B Services</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAuthority;

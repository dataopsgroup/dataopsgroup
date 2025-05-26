import React from 'react';
const CMODataPlaybook = () => {
  return <section className="cmo-playbook-section">
      <div className="playbook-container">
        {/* Book Showcase */}
        <div className="book-showcase">
          
          <div className="book-highlight">
            
          </div>
        </div>
        
        {/* Content */}
        <div className="playbook-content">
          
          
          <h2 className="playbook-title">The CMO's Data Playbook</h2>
          <h3 className="playbook-subtitle">Transform Data Into Revenue</h3>
          
          <p className="playbook-description">
            Get the strategic framework that marketing leaders use to turn their data investments into measurable business growth. This comprehensive playbook reveals the exact methodologies we use with Fortune 500 companies.
          </p>
          
          <div className="playbook-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span className="benefit-text">5-step framework for connecting marketing data to revenue outcomes</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span className="benefit-text">ROI measurement strategies that prove marketing's business impact</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span className="benefit-text">Executive dashboards that CMOs use to report to the board</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span className="benefit-text">Case studies from companies that achieved 40%+ growth using these methods</span>
            </div>
          </div>
          
          <button className="playbook-cta">Download Free Playbook</button>
          <p className="cta-subtext">No spam. Unsubscribe anytime. Trusted by marketing leaders worldwide.</p>
        </div>
      </div>
    </section>;
};
export default CMODataPlaybook;
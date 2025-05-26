
import React from 'react';

const Approach = () => {
  return (
    <section id="approach" className="sound-familiar-section">
      <h2>Sound Familiar?</h2>
      <p className="subtitle">If any of these HubSpot challenges resonate with your experience, you're not alone. We've helped hundreds of companies solve these exact problems.</p>
      
      <div className="problem-cards-grid">
        {/* Problem Card 1 */}
        <div className="problem-card">
          <div className="problem-icon">📊</div>
          <h3 className="problem-title">Your marketing and sales teams are fighting over lead quality</h3>
          <p className="problem-description">Sales complains about poor lead quality while marketing insists they're delivering good prospects. The disconnect is costing you deals and creating internal friction.</p>
        </div>
        
        {/* Problem Card 2 */}
        <div className="problem-card">
          <div className="problem-icon">🔍</div>
          <h3 className="problem-title">Deals are stuck in your pipeline with no clear reason why</h3>
          <p className="problem-description">Your pipeline is full but deals aren't closing. You lack visibility into what's actually happening in your sales process and where prospects are getting stuck.</p>
        </div>
        
        {/* Problem Card 3 */}
        <div className="problem-card">
          <div className="problem-icon">💸</div>
          <h3 className="problem-title">You're spending more time managing HubSpot than growing revenue</h3>
          <p className="problem-description">Your team spends hours on manual tasks, data entry, and trying to make HubSpot work properly instead of focusing on closing deals and growing the business.</p>
        </div>
        
        {/* Problem Card 4 */}
        <div className="problem-card">
          <div className="problem-icon">📈</div>
          <h3 className="problem-title">Your dashboards show activity but not actual business impact</h3>
          <p className="problem-description">You have plenty of reports showing emails sent and calls made, but you can't clearly connect your marketing efforts to real revenue growth and ROI.</p>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="familiar-cta">
        <h3>Ready to Fix These Problems?</h3>
        <p>Our free HubSpot assessment identifies exactly what's broken in your setup and provides a clear roadmap to fix it.</p>
        <button className="familiar-cta-button">Get Your Free Assessment</button>
      </div>
    </section>
  );
};

export default Approach;

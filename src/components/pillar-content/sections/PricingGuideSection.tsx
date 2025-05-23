
import React from 'react';

const PricingGuideSection: React.FC = () => {
  return (
    <section id="pricing-guide" className="p-4" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-4">Complete Pricing Guide for HubSpot Experts and Implementation</h2>
      
      <p className="mb-4">Understanding the full cost structure helps you budget appropriately and compare options effectively. HubSpot expert pricing varies significantly based on experience level, project complexity, and the specific services you need.</p>
      
      <p className="mb-4"><strong>HubSpot Expert Pricing Models</strong> typically fall into several categories, each with distinct advantages depending on your situation. Hourly consulting rates range from $75-125 per hour for entry-level specialists up to $250-400 per hour for premium experts with enterprise experience and deep integration expertise. Geographic location affects these rates, as does industry specialization and the urgency of your timeline.</p>
      
      <p className="mb-4">Project-based pricing offers more predictability for larger implementations. Basic HubSpot setup typically runs $3,500-12,000 and covers single Hub implementation, basic integration with 1-2 existing tools, standard workflow setup, and initial team training. The timeline for this level of work usually spans 30-60 days.</p>
      
      <p className="mb-4">Comprehensive multi-Hub implementations range from $12,000-35,000 and include multiple Hub integration with cross-Hub workflows, complex integrations with 3-5 existing systems, custom reporting development, and comprehensive team training. These projects typically take 60-120 days to complete properly.</p>
      
      <p className="mb-4">Enterprise integration projects can range from $25,000-75,000 or more, depending on complexity. These involve full platform migration from existing systems, custom API development, multi-location deployment, advanced security requirements, and executive-level reporting. Implementation timelines typically run 120-180 days.</p>
      
      <p className="mb-4"><strong>Integration-Specific Pricing</strong> deserves special attention since integration work often represents the most complex and valuable part of a HubSpot implementation. Zapier workflow development typically costs $500-2,500 per workflow, depending on complexity. Simple data transfer workflows fall on the lower end, while complex multi-step automations with conditional logic can reach the higher end of this range.</p>
      
      <p className="mb-4">API integration development is more expensive, typically ranging from $2,500-15,000+ per integration. Simple data synchronization between two systems might cost $2,500-5,000, while bi-directional data flow with real-time updates can cost $5,000-10,000. Custom functionality development and enterprise-level integrations can cost $15,000-50,000 or more.</p>
      
      <p className="mb-4">Common business system integrations have fairly predictable price ranges. Salesforce integration typically costs $5,000-15,000, QuickBooks or other accounting integrations run $3,000-8,000, e-commerce platform integrations cost $4,000-12,000, and ERP system integrations range from $8,000-25,000.</p>
      
      <p className="mb-4"><strong>Total Cost of Ownership Considerations</strong> extend beyond the expert's fees. HubSpot subscription costs are separate from implementation costs and vary by Hub and plan level. Starter plans typically run $50-100 per month per Hub, Professional plans cost $500-1,200 per month per Hub, and Enterprise plans range from $1,200-5,000 per month per Hub.</p>
      
      <p className="mb-4">Additional integration tool costs can add up quickly. Zapier Professional plans cost $50-300 per month depending on usage, custom API development tools might cost $100-500 monthly, and third-party integration platforms can run $200-1,000 per month.</p>
      
      <p className="mb-4">Don't forget hidden costs like staff training time, data cleanup and preparation, additional third-party tool subscriptions, ongoing maintenance requirements, and future expansion needs. These can significantly impact your total investment.</p>
      
      <p className="mb-4"><strong>ROI and Value Calculation</strong> should focus on measurable business improvements rather than just cost savings. Typical expectations include 25-45% improvement in marketing efficiency, 20-35% sales process acceleration, 30-50% customer service efficiency gains, and 15-30% overall productivity improvements.</p>
      
      <p className="mb-4">Payback periods vary by implementation complexity. Basic implementations typically pay for themselves within 3-8 months, comprehensive implementations within 6-15 months, and enterprise implementations within 12-24 months. The key is measuring the right metrics and having realistic expectations about timeline and impact.</p>
    </section>
  );
};

export default PricingGuideSection;


import React from 'react';
import { KeyInsightCallout, PricingHighlight, ExpertTip, ActionChecklist } from '../VisualCallouts';

const PricingGuideSection: React.FC = () => {
  return (
    <section id="pricing-guide" className="prose prose-lg max-w-none" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-6">Complete Pricing Guide for HubSpot Experts and Implementation</h2>
      
      <p className="lead text-xl text-gray-700 mb-6">
        Understanding the full cost structure helps you budget appropriately and compare options effectively. HubSpot expert pricing varies significantly based on experience level, project complexity, and the specific services you need.
      </p>
      
      <h3>HubSpot Expert Pricing Models</h3>
      
      <p>
        HubSpot expert pricing typically falls into several categories, each with distinct advantages depending on your situation. Hourly consulting rates range from $75-125 per hour for entry-level specialists up to $250-400 per hour for premium experts with enterprise experience and deep integration expertise.
      </p>
      
      <PricingHighlight title="Hourly Rate Breakdown">
        <ul>
          <li><strong>Entry-Level Specialists:</strong> $75-125/hour</li>
          <li><strong>Mid-Level Experts:</strong> $125-200/hour</li>
          <li><strong>Senior Specialists:</strong> $200-300/hour</li>
          <li><strong>Enterprise Experts:</strong> $300-400/hour</li>
        </ul>
      </PricingHighlight>
      
      <h3>Project-Based Pricing</h3>
      
      <p>
        Project-based pricing offers more predictability for larger implementations. Basic HubSpot setup typically runs $3,500-12,000 and covers single Hub implementation, basic integration with 1-2 existing tools, standard workflow setup, and initial team training.
      </p>
      
      <KeyInsightCallout title="Implementation Pricing Tiers">
        <p>
          <strong>Basic Setup:</strong> $3,500-12,000 (30-60 days)<br/>
          <strong>Comprehensive Multi-Hub:</strong> $12,000-35,000 (60-120 days)<br/>
          <strong>Enterprise Integration:</strong> $25,000-75,000+ (120-180 days)
        </p>
      </KeyInsightCallout>
      
      <h3>Integration-Specific Pricing</h3>
      
      <p>
        Integration work often represents the most complex and valuable part of a HubSpot implementation. Zapier workflow development typically costs $500-2,500 per workflow, depending on complexity.
      </p>
      
      <p>
        API integration development is more expensive, typically ranging from $2,500-15,000+ per integration. Simple data synchronization between two systems might cost $2,500-5,000, while bi-directional data flow with real-time updates can cost $5,000-10,000.
      </p>
      
      <ActionChecklist 
        title="Common Integration Costs"
        items={[
          "Salesforce integration: $5,000-15,000",
          "QuickBooks/accounting: $3,000-8,000", 
          "E-commerce platforms: $4,000-12,000",
          "ERP systems: $8,000-25,000",
          "Custom API development: $15,000-50,000+"
        ]}
      />
      
      <h3>Total Cost of Ownership</h3>
      
      <p>
        Total cost considerations extend beyond the expert's fees. HubSpot subscription costs are separate from implementation costs and vary by Hub and plan level.
      </p>
      
      <PricingHighlight title="HubSpot Subscription Costs">
        <p>
          <strong>Starter Plans:</strong> $50-100/month per Hub<br/>
          <strong>Professional Plans:</strong> $500-1,200/month per Hub<br/>
          <strong>Enterprise Plans:</strong> $1,200-5,000/month per Hub
        </p>
      </PricingHighlight>
      
      <h3>Hidden Costs to Consider</h3>
      
      <p>
        Don't forget additional costs like staff training time, data cleanup and preparation, additional third-party tool subscriptions, ongoing maintenance requirements, and future expansion needs.
      </p>
      
      <ExpertTip>
        Additional integration tool costs can add up quickly. Zapier Professional plans cost $50-300 per month depending on usage, 
        and third-party integration platforms can run $200-1,000 per month.
      </ExpertTip>
      
      <h3>ROI and Value Calculation</h3>
      
      <p>
        ROI calculations should focus on measurable business improvements rather than just cost savings. Typical expectations include 25-45% improvement in marketing efficiency, 20-35% sales process acceleration, and 30-50% customer service efficiency gains.
      </p>
      
      <KeyInsightCallout title="Payback Periods">
        <p>
          <strong>Basic implementations:</strong> 3-8 months<br/>
          <strong>Comprehensive implementations:</strong> 6-15 months<br/>
          <strong>Enterprise implementations:</strong> 12-24 months
        </p>
      </KeyInsightCallout>
      
      <p>
        The key is measuring the right metrics and having realistic expectations about timeline and impact. Focus on specific, measurable outcomes rather than vague efficiency promises.
      </p>
    </section>
  );
};

export default PricingGuideSection;

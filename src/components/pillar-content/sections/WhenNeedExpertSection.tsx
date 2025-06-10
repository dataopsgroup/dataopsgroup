
import React from 'react';
import { KeyInsightCallout, PricingHighlight, ExpertTip, WarningBox, ActionChecklist } from '../VisualCallouts';

const WhenNeedExpertSection: React.FC = () => {
  return (
    <section id="when-need-expert" className="prose prose-lg max-w-none" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-6">When Your Business Actually Needs a HubSpot Expert</h2>
      
      <p className="lead text-xl text-gray-700 mb-6">
        Understanding when to bring in specialized expertise can save you significant time, money, and frustration. The decision isn't just about whether you can figure out HubSpot on your own—it's about whether the opportunity cost of doing it yourself makes sense for your business.
      </p>
      
      <h3>Implementation Scenarios Requiring Expertise</h3>
      
      <p>
        Certain implementation scenarios almost always benefit from expert help, regardless of your internal technical capabilities:
      </p>
      
      <KeyInsightCallout title="Complex Integration Requirements">
        <p>
          If you need to connect HubSpot with your existing CRM, ERP, or accounting systems, you're looking at integration work that requires both technical skills and business process understanding. 
          The same applies if you're running an e-commerce business and need HubSpot to sync with inventory management, order processing, and customer service systems.
        </p>
      </KeyInsightCallout>
      
      <h4>Migration Projects</h4>
      
      <p>
        Moving from Salesforce, Marketo, or other platforms to HubSpot involves more than just data transfer. You need to map custom fields, preserve campaign history, and ensure your new setup actually improves on what you had before. Many businesses underestimate this complexity and end up with broken processes or lost data.
      </p>
      
      <WarningBox>
        DIY migrations frequently result in data quality issues that take months to identify and fix. 
        The cost of cleaning up bad data often exceeds the cost of proper migration from the start.
      </WarningBox>
      
      <h4>Custom Requirements and Unique Business Models</h4>
      
      <p>
        If your business has unique requirements that don't fit standard templates, that's another strong indicator you need expert help. This includes:
      </p>
      
      <ul>
        <li>Complex approval workflows spanning multiple departments</li>
        <li>Custom reporting needs that combine data from multiple sources</li>
        <li>Industry-specific compliance requirements (HIPAA, SOX, GDPR)</li>
        <li>Unique pricing models or contract structures</li>
        <li>Multi-brand or multi-entity business structures</li>
      </ul>
      
      <h3>Business Indicators for Expert Help</h3>
      
      <p>
        Beyond technical complexity, several business factors strongly indicate when expert help makes financial sense:
      </p>
      
      <ActionChecklist 
        title="Business Decision Factors"
        items={[
          "Your team lacks bandwidth for 100+ hour implementation projects",
          "Competitive pressure requires rapid deployment (under 90 days)",
          "Seasonal business needs demand quick implementation before peak periods",
          "Investor expectations require demonstrable ROI within specific timeframes",
          "Previous DIY attempts have stalled or failed to deliver expected results"
        ]}
      />
      
      <h4>Resource Constraints and Opportunity Cost</h4>
      
      <p>
        If your team lacks the bandwidth for proper implementation, trying to force it internally usually leads to a half-finished setup that creates more problems than it solves. Your staff should be focused on activities that directly generate revenue or serve customers, not wrestling with software configuration.
      </p>
      
      <ExpertTip>
        Calculate the fully-loaded hourly cost of your team members who would handle implementation. 
        When you factor in their salary, benefits, and opportunity cost, expert help often costs less than internal resources.
      </ExpertTip>
      
      <h4>Timeline Pressure and Competitive Needs</h4>
      
      <p>
        Time-sensitive objectives create another compelling case for expert help:
      </p>
      
      <ul>
        <li><strong>Competitive Response:</strong> Rapid deployment to match competitor capabilities</li>
        <li><strong>Seasonal Business:</strong> Implementation before peak sales periods</li>
        <li><strong>Investor Expectations:</strong> Quick ROI demonstration for funding rounds</li>
        <li><strong>Compliance Deadlines:</strong> Regulatory requirements with fixed timelines</li>
      </ul>
      
      <PricingHighlight title="Time-to-Value Comparison">
        <p>
          Expert implementations typically achieve positive ROI within 60-90 days, while DIY projects often take 6-12 months to show meaningful results. 
          For a business generating $1M+ annually, the revenue impact of faster implementation often exceeds the cost of expert help.
        </p>
      </PricingHighlight>
      
      <h3>The Hidden Costs of DIY Implementation</h3>
      
      <p>
        The true cost of DIY implementation goes far beyond the obvious time investment. While your team will spend 100+ hours learning the platform and working through implementation challenges, the hidden costs often exceed the direct ones:
      </p>
      
      <h4>Opportunity Cost Analysis</h4>
      
      <p>
        Consider a marketing manager earning $80,000 annually ($40/hour fully loaded) spending 120 hours on HubSpot implementation. That's $4,800 in direct labor costs, but the opportunity cost is much higher:
      </p>
      
      <ul>
        <li>Lost focus on campaign optimization and lead generation</li>
        <li>Delayed product launches or marketing initiatives</li>
        <li>Reduced team productivity due to divided attention</li>
        <li>Potential revenue impact from suboptimal marketing performance</li>
      </ul>
      
      <h4>Implementation Quality Risks</h4>
      
      <p>
        DIY implementations often suffer from:
      </p>
      
      <ActionChecklist 
        title="Common DIY Problems"
        items={[
          "Suboptimal configuration that limits long-term scalability",
          "Missing automation opportunities that could save ongoing time",
          "Poor data structure that complicates future integrations",
          "Security vulnerabilities from inexperienced setup",
          "Compliance gaps that create legal risks"
        ]}
      />
      
      <KeyInsightCallout title="Research-Backed Results">
        <p>
          Studies show that businesses using certified experts typically see 40% faster implementation timelines, 60% higher user adoption rates, 
          and 25% better performance on key metrics compared to DIY implementations. When you factor in these efficiency gains, 
          expert help often pays for itself through faster time-to-value and better long-term results.
        </p>
      </KeyInsightCallout>
      
      <h3>When DIY Makes Sense</h3>
      
      <p>
        DIY implementation can work well in specific scenarios:
      </p>
      
      <ul>
        <li><strong>Simple, single-hub implementations</strong> with standard requirements</li>
        <li><strong>Strong internal technical capabilities</strong> and available bandwidth</li>
        <li><strong>Limited budget constraints</strong> that make expert help unaffordable</li>
        <li><strong>Learning objectives</strong> where implementation process knowledge is valuable</li>
        <li><strong>Pilot projects</strong> testing HubSpot before full commitment</li>
      </ul>
      
      <ExpertTip>
        Even with DIY implementation, consider expert consultation for planning and architecture decisions. 
        A few hours of strategic consulting can prevent costly mistakes and set you up for long-term success.
      </ExpertTip>
      
      <h3>The Strategic Decision Framework</h3>
      
      <p>
        The question isn't whether you can implement HubSpot yourself—it's whether doing so represents the best use of your resources and the fastest path to achieving your business objectives. Consider expert help when the cost of delayed results or suboptimal implementation exceeds the investment in professional expertise.
      </p>
    </section>
  );
};

export default WhenNeedExpertSection;

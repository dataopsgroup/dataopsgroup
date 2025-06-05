
import React from 'react';
import { KeyInsightCallout, PricingHighlight, ExpertTip, ActionChecklist } from '../VisualCallouts';

const TypesExpertiseSection: React.FC = () => {
  return (
    <section id="types-expertise" className="prose prose-lg max-w-none" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-6">Types of HubSpot Expertise You Need</h2>
      
      <p className="lead text-xl text-gray-700 mb-6">
        HubSpot's ecosystem spans six major hubs and countless integrations. Understanding which type of expertise aligns with your business objectives prevents costly mismatches and ensures faster implementation success.
      </p>
      
      <h3>Marketing Hub Specialists: Demand Generation Masters</h3>
      
      <p>
        Marketing Hub specialists focus on the demand generation side of your business. They excel at lead generation and conversion optimization, email marketing campaigns, and marketing automation workflows. If your primary goal is to improve how you attract and nurture prospects, a Marketing Hub specialist will understand the nuances of campaign analytics, attribution modeling, and landing page optimization.
      </p>
      
      <KeyInsightCallout title="Marketing Hub ROI Indicators">
        <p>
          Look for specialists who can demonstrate experience with lead scoring models that improved qualified lead rates by 40%+, 
          email campaigns achieving 25%+ open rates in your industry, and attribution setups that clearly track campaign ROI.
        </p>
      </KeyInsightCallout>
      
      <h3>Sales Hub Experts: Revenue Acceleration Focus</h3>
      
      <p>
        Sales Hub experts concentrate on accelerating your sales process and improving deal closure rates. They specialize in sales pipeline configuration, deal management, and sales automation. These experts understand how to set up effective sales sequences, optimize quote and proposal processes, and create reporting that actually helps sales managers coach their teams effectively.
      </p>
      
      <ExpertTip>
        The best Sales Hub experts have actually carried a quota themselves. They understand the daily reality of sales reps and design processes that help rather than hinder deal progression.
      </ExpertTip>
      
      <h3>Service Hub Architects: Customer Success Optimization</h3>
      
      <p>
        Service Hub specialists focus on post-sale customer experience and retention. They design ticket management workflows, knowledge base structures, and customer feedback systems. With customer acquisition costs rising across industries, Service Hub expertise often delivers the highest long-term ROI through improved retention and expansion revenue.
      </p>
      
      <PricingHighlight title="Service Hub Value Creation">
        <p>
          Service Hub implementations typically cost $8,000-$15,000 but can reduce support costs by 30-40% while improving customer satisfaction scores. 
          The payback period is usually 6-9 months through improved efficiency and reduced churn.
        </p>
      </PricingHighlight>
      
      <h3>Integration Specialists: The System Connectors</h3>
      
      <p>
        HubSpot integration specialists have become increasingly valuable as businesses rely on more connected systems. These experts understand how to make HubSpot work seamlessly with your existing tools—whether that's connecting your accounting software, e-commerce platform, or custom business applications. They're skilled in API integrations, middleware solutions, and ensuring clean data flow between systems.
      </p>
      
      <p>
        Given that most businesses now use 5-10 different software tools, integration expertise can be the difference between a smooth, automated workflow and a collection of disconnected systems requiring manual work.
      </p>
      
      <h3>RevOps Strategists: The Systems Thinkers</h3>
      
      <p>
        Revenue Operations (RevOps) experts take a holistic approach to aligning your marketing, sales, and service operations. They focus on breaking down silos between departments and creating unified processes that support your entire customer lifecycle. RevOps specialists are particularly valuable for growing businesses that need to scale their operations efficiently.
      </p>
      
      <ActionChecklist 
        title="RevOps Expertise Checklist"
        items={[
          "Cross-departmental process design experience",
          "Advanced reporting and analytics capabilities", 
          "Change management and adoption expertise",
          "Technical integration knowledge",
          "Business strategy alignment skills"
        ]}
      />
      
      <h3>CMS Hub Developers: Technical Foundation Builders</h3>
      
      <p>
        CMS Hub developers specialize in website development within HubSpot's content management system. They handle custom theme development, SEO optimization, and advanced functionality that goes beyond standard templates. If your website is a critical part of your HubSpot strategy, a CMS Hub developer can create the technical foundation that supports your broader marketing and sales goals.
      </p>
      
      <h3>Operations Hub Specialists: Data and Automation Masters</h3>
      
      <p>
        Operations Hub experts focus on data quality, complex workflows, and business process automation. They're essential when you need sophisticated data management, custom calculations, or complex multi-step business processes automated within HubSpot.
      </p>
      
      <KeyInsightCallout title="Matching Expertise to Objectives">
        <p>
          The key is matching the specialist's expertise to your primary objectives. If you're implementing multiple Hubs or need complex integrations, 
          look for someone with broad platform knowledge rather than just specialization in one area. However, for focused implementations, 
          deep expertise in the relevant hub typically delivers better results than generalist knowledge.
        </p>
      </KeyInsightCallout>
      
      <h3>Certification Levels and What They Really Mean</h3>
      
      <p>
        HubSpot offers multiple certification levels, but understanding what they actually indicate about expertise is crucial:
      </p>
      
      <ul>
        <li><strong>User Certifications:</strong> Basic platform knowledge, typically 10-20 hours of study</li>
        <li><strong>Implementation Certifications:</strong> Technical setup and configuration skills</li>
        <li><strong>Solution Partner Status:</strong> Agency-level certifications with client success requirements</li>
        <li><strong>Elite Partner Status:</strong> Highest tier with proven track record and advanced expertise</li>
      </ul>
      
      <ExpertTip>
        Look for experts with multiple hub certifications and recent completion dates. HubSpot's platform evolves rapidly, 
        and certifications older than 18 months may not reflect current best practices.
      </ExpertTip>
    </section>
  );
};

export default TypesExpertiseSection;


import { FAQItem } from "./types";

const dataQualityFAQs: FAQItem[] = [{
  question: "What HubSpot objects typically have the worst data quality issues?",
  answer: `Based on our experience with dozens of HubSpot implementations, we find these objects typically have the most significant data quality issues:

1. Contacts: Often the most problematic, with duplicate records, inconsistent formatting, and missing critical information. This is especially true when contacts are imported from multiple sources or manually entered over time.

2. Companies: Frequently suffer from duplicate records with slight variations in name spelling, missing industry or size data, and outdated information.

3. Deals: Often have inconsistent naming conventions, missing values in key fields like amount or close date, and improper stage assignments.

4. Custom Objects: These tend to have relationship issues, with missing or incorrect associations to contacts, companies, or deals.

5. Products: Commonly have inconsistent pricing information, outdated descriptions, or missing categorization.

The severity of issues varies by organization, but contacts and companies almost always require the most attention during a data cleanup project due to their fundamental role in the CRM.`,
  relatedLink: {
    text: "Request a data quality assessment",
    url: "/assessment",
    ariaLabel: "Request a comprehensive assessment of your HubSpot data quality"
  }
}, {
  question: "What is Statistical Process Control (SPC) and how does it apply to HubSpot data?",
  answer: `Statistical Process Control (SPC) is a methodology developed in manufacturing that uses statistical methods to monitor and control processes. When applied to HubSpot data, it transforms how you interpret and act on your marketing and sales metrics:

1. Signal vs. Noise: SPC helps you distinguish between normal variations in data (noise) and significant changes that require action (signals), preventing overreaction to routine fluctuations.

2. Control Limits: We establish statistical boundaries around your key metrics that indicate when a change is statistically significant and worthy of investigation.

3. Process Behavior Charts: These visualizations make it immediately clear which metric changes deserve attention and which are just normal variation.

4. Predictable Improvement: By focusing only on meaningful changes, your team can implement improvements that have lasting impact rather than chasing random fluctuations.

5. Data-Driven Decisions: SPC creates confidence in when to act and when to stay the course, eliminating gut-based decision making.

By implementing SPC principles in your HubSpot instance, you gain a powerful framework for interpreting data that has been proven effective by operational leaders like Amazon and Toyota.`,
  relatedLink: {
    text: "Learn about our data methodology",
    url: "/methodology",
    ariaLabel: "Discover how we apply Statistical Process Control to marketing operations"
  }
}, {
  question: "How long does it take to clean up a messy HubSpot database?",
  answer: `The timeline for cleaning up a messy HubSpot database depends on several factors, but most projects follow this general timeline:

1. Initial Assessment (1-2 weeks): We conduct a comprehensive audit of your current data quality, identifying critical issues and establishing priorities.

2. Implementation Planning (1 week): We develop a detailed roadmap for addressing the identified issues, including technical solutions and change management strategies.

3. Critical Fixes (2-4 weeks): We address the most severe data quality issues that are actively hindering your operations, such as widespread duplicates or formatting problems.

4. Comprehensive Cleanup (3-8 weeks): We systematically work through all identified issues, implementing both technical solutions and process improvements.

5. Governance Implementation (2-3 weeks): We establish ongoing monitoring and maintenance processes to maintain data quality moving forward.

For a medium-sized database (20,000-50,000 records), the entire process typically takes 2-3 months from start to finish. Smaller databases may be completed more quickly, while larger or more complex instances may require additional time.`,
  relatedLink: {
    text: "Book a consultation",
    url: "/contact",
    ariaLabel: "Schedule a consultation to discuss your specific timeline needs"
  }
}, {
  question: "Why does our marketing data get messy so quickly in HubSpot?",
  answer: `Marketing data in HubSpot tends to degrade quickly for several systemic reasons:

1. Multiple Data Entry Points: Information enters your HubSpot instance through numerous channels—forms, imports, manual entry, integrations—each with different validation rules or none at all.

2. Lack of Standardization: Without consistent guidelines for data formatting and entry, each team member may enter information differently.

3. Attribution Challenges: Prospects often interact with your brand through multiple channels before converting, creating duplicate records with different source attributions.

4. System Integrations: Bi-directional syncs with other platforms can introduce incompatible data formats or trigger duplicate creation.

5. Natural Data Decay: Contact information naturally becomes outdated as people change jobs, email addresses, and phone numbers (industry research shows B2B contact data degrades at roughly 30% per year).

6. Missing Validation: Most HubSpot implementations lack proper field validation rules, allowing incorrect data formats to be saved.

The good news is that all these issues can be addressed through proper data governance, technical solutions, and ongoing maintenance processes.`,
  relatedLink: {
    text: "Learn about data governance",
    url: "/data-governance",
    ariaLabel: "Discover how to implement effective data governance for HubSpot"
  }
}, {
  question: "Can DataOps Group help with HubSpot reporting and dashboards?",
  answer: `Yes, creating effective reporting and dashboards is a core part of our HubSpot optimization services. Our approach to reporting goes beyond basic metrics to deliver actionable intelligence:

1. Signal-Based Dashboards: We implement Statistical Process Control principles to highlight meaningful changes that require attention while filtering out normal data variation.

2. Cross-Object Reporting: We create comprehensive views that connect marketing activities to sales outcomes and customer retention, showing the complete customer journey.

3. Executive Visibility: We design executive dashboards that present high-level KPIs tied directly to business objectives and revenue impact.

4. Team-Specific Views: We create role-based dashboards that give each department the specific metrics they need without overwhelming them with irrelevant data.

5. Predictive Insights: We implement forecasting models that help you anticipate future performance based on historical patterns and current activities.

6. Automated Distribution: We set up regular report delivery to stakeholders, ensuring everyone stays informed without having to log into HubSpot.

Our reporting solutions are built on a foundation of clean, reliable data, which is why we often address data quality issues before tackling reporting challenges.`,
  relatedLink: {
    text: "View our reporting solutions",
    url: "/reporting",
    ariaLabel: "Learn more about our HubSpot reporting and dashboard solutions"
  }
}, {
  question: "How can I check the quality of my HubSpot data without Operations Hub?",
  answer: `While HubSpot's Operations Hub provides dedicated data quality tools, you can still assess and improve your data quality without it using these approaches:

1. Create Custom Reports: Build reports showing contacts missing critical fields like email, company association, or industry. These reports highlight gaps in your data.

2. Use List Filters: Create lists of contacts with formatting inconsistencies (e.g., all-caps names, inconsistent phone formats) to identify standardization issues.

3. Run Duplicate Contact Reports: Use HubSpot's basic duplicate management tool to identify obvious duplicates, even though it won't catch all variations.

4. Review Property Usage: Examine which properties are being consistently used and which have spotty data entry to identify process issues.

5. Analyze Email Performance: High bounce rates or low deliverability often indicate poor data quality issues.

While these manual methods require more effort than using Operations Hub, they can still provide valuable insights into your data health. For more comprehensive analysis, DataOps Group can conduct a professional data quality audit that examines deeper issues that might not be visible through basic reporting.`,
  relatedLink: {
    text: "Schedule a data quality assessment",
    url: "/contact",
    ariaLabel: "Contact us to schedule a comprehensive data quality assessment"
  }
}];

export default dataQualityFAQs;

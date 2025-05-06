
import { FAQItem } from "../types";

// HubSpot-specific data quality FAQs
const dataQualityHubSpotFAQs: FAQItem[] = [
  {
    question: "Why is data quality so important for marketing in HubSpot?",
    answer: "Data quality is the foundation of all successful marketing operations in HubSpot. Poor data quality has far-reaching consequences beyond just marketing—it ripples throughout your organization, distorting insights, causing campaigns to miss their mark, and undermining your ability to demonstrate value to leadership.\n\nInaccurate or incomplete data leads to wasted marketing budget on campaigns targeting the wrong contacts or invalid emails. It creates unreliable reporting that makes it impossible to measure campaign effectiveness accurately. This often results in continued investment in underperforming tactics and causes friction between sales and marketing when teams don't trust the quality of leads.\n\nWhen your data is clean, your marketing automation works properly, your segmentation is accurate, your personalization delivers relevant content, and your reporting reflects reality. This translates directly to higher engagement rates, improved conversion, and the ability to demonstrate clear ROI to stakeholders. In essence, data quality isn't just a technical concern—it's a strategic imperative that affects every aspect of your marketing performance.",
    relatedLink: {
      text: "Schedule a data quality assessment",
      url: "/contact",
      ariaLabel: "Contact us to schedule a comprehensive data quality assessment"
    }
  },
  {
    question: "What causes poor data quality in HubSpot and how can it be prevented?",
    answer: "Poor data quality in HubSpot typically stems from several root causes:\n\n1. Multiple Data Entry Points: Information enters HubSpot through numerous channels—web forms, imports, manual entry, integrations—each with different validation rules or none at all.\n\n2. Lack of Standardization: Without consistent guidelines for data formatting and entry, each team member may enter information differently, creating inconsistencies.\n\n3. Attribution Challenges: Prospects often interact with your brand through multiple channels before converting, creating duplicate records with different source attributions.\n\n4. System Integrations: Bi-directional syncs with other platforms can introduce incompatible data formats or trigger duplicate creation.\n\n5. Natural Data Decay: Contact information naturally becomes outdated as people change jobs, email addresses, and phone numbers (B2B contact data degrades at roughly 30% per year).\n\nTo prevent these issues, implement clear data hygiene rules across all entry points, establish mandatory fields to ensure completeness, conduct regular audits to catch inconsistencies, and assign specific ownership for data quality. Creating progressive profiling for forms, setting up validation rules, and regularly cleansing existing data will maintain the integrity of your HubSpot instance over time.",
    relatedLink: {
      text: "Download our data quality guide",
      url: "/resources/data-guide",
      ariaLabel: "Get our comprehensive guide on maintaining data quality in HubSpot"
    }
  },
  {
    question: "How often should we audit and clean our HubSpot database?",
    answer: "The optimal frequency for HubSpot database auditing and cleaning depends on several factors, but most businesses should follow these guidelines:\n\n1. Comprehensive Audits: Conduct a thorough database audit quarterly to identify systematic issues and trends in data quality.\n\n2. Regular Maintenance: Implement weekly automated cleaning routines for common issues like formatting standardization and duplicate detection.\n\n3. New Campaign Preparation: Always review and clean relevant segments before launching major marketing campaigns to ensure optimal performance.\n\n4. Integration Monitoring: After adding new integrations or data sources, audit affected records within the first week to catch any issues early.\n\n5. Monthly Reports: Generate monthly data quality reports to track improvements and identify emerging issues.\n\nCompanies with higher data velocity (many new records created daily) or multiple data sources typically need more frequent cleaning. The key is establishing consistent processes rather than treating data cleaning as a one-time project. Regular maintenance ensures your marketing decisions are based on accurate, up-to-date information, preventing wasted resources and campaign underperformance.",
    relatedLink: {
      text: "Learn about our ongoing data maintenance services",
      url: "/services/maintenance",
      ariaLabel: "Discover our approach to ongoing HubSpot data maintenance"
    }
  },
  {
    question: "What are the essential HubSpot data points that should always be accurate?",
    answer: "While every business has unique data needs, these core HubSpot data points are universally critical and should be prioritized for accuracy:\n\nFor Contacts:\n- Email Address (primary identifier and communication channel)\n- Full Name (properly formatted with correct capitalization)\n- Company Association (linking contacts to their organization)\n- Lead Source (critical for attribution and ROI calculation)\n- Lifecycle Stage (ensures proper lead management)\n\nFor Companies:\n- Company Name (standardized with consistent formatting)\n- Industry (essential for segmentation)\n- Company Size (employees or revenue for proper targeting)\n- Website URL (used for company matching and verification)\n\nFor Deals:\n- Amount (critical for revenue forecasting)\n- Close Date (essential for pipeline management)\n- Deal Stage (reflects accurate sales process position)\n- Associated Contacts and Company (maintains relationship integrity)\n\nThese foundational data points form the backbone of effective marketing and sales operations. When these are accurate, even if other fields contain gaps, your core business processes can function effectively while you address secondary data issues. Prioritizing these fields in your data quality efforts will yield the highest impact on your marketing and sales performance.",
    relatedLink: {
      text: "Download our data quality checklist",
      url: "/resources/checklist",
      ariaLabel: "Get our comprehensive HubSpot data quality checklist"
    }
  },
  {
    question: "What HubSpot objects typically have the worst data quality issues?",
    answer: "Based on our experience with dozens of HubSpot implementations, we find these objects typically have the most significant data quality issues:\n\n1. Contacts: Often the most problematic, with duplicate records, inconsistent formatting, and missing critical information. This is especially true when contacts are imported from multiple sources or manually entered over time.\n\n2. Companies: Frequently suffer from duplicate records with slight variations in name spelling, missing industry or size data, and outdated information.\n\n3. Deals: Often have inconsistent naming conventions, missing values in key fields like amount or close date, and improper stage assignments.\n\n4. Custom Objects: These tend to have relationship issues, with missing or incorrect associations to contacts, companies, or deals.\n\n5. Products: Commonly have inconsistent pricing information, outdated descriptions, or missing categorization.\n\nThe severity of issues varies by organization, but contacts and companies almost always require the most attention during a data cleanup project due to their fundamental role in the CRM. Focusing on these core objects first typically yields the highest return on investment for your data quality efforts.",
    relatedLink: {
      text: "Request a data quality assessment",
      url: "/assessment",
      ariaLabel: "Request a comprehensive assessment of your HubSpot data quality"
    }
  },
  {
    question: "Why does our marketing data get messy so quickly in HubSpot?",
    answer: "Marketing data in HubSpot tends to degrade quickly for several systemic reasons:\n\n1. Multiple Data Entry Points: Information enters your HubSpot instance through numerous channels—forms, imports, manual entry, integrations—each with different validation rules or none at all.\n\n2. Lack of Standardization: Without consistent guidelines for data formatting and entry, each team member may enter information differently.\n\n3. Attribution Challenges: Prospects often interact with your brand through multiple channels before converting, creating duplicate records with different source attributions.\n\n4. System Integrations: Bi-directional syncs with other platforms can introduce incompatible data formats or trigger duplicate creation.\n\n5. Natural Data Decay: Contact information naturally becomes outdated as people change jobs, email addresses, and phone numbers (industry research shows B2B contact data degrades at roughly 30% per year).\n\n6. Missing Validation: Most HubSpot implementations lack proper field validation rules, allowing incorrect data formats to be saved.\n\nThe good news is that all these issues can be addressed through proper data governance, technical solutions, and ongoing maintenance processes. With a systematic approach to data management, you can significantly slow the rate of data degradation and maintain high-quality information in your HubSpot instance.",
    relatedLink: {
      text: "Learn about data governance",
      url: "/data-governance",
      ariaLabel: "Discover how to implement effective data governance for HubSpot"
    }
  },
  {
    question: "What impact does dirty data have on our marketing campaigns?",
    answer: "Dirty data has far-reaching negative impacts on your HubSpot marketing campaigns that directly affect your bottom line:\n\n1. Decreased Deliverability: High bounce rates from invalid emails damage your sender reputation, causing even valid emails to land in spam folders.\n\n2. Failed Personalization: Incorrect or missing contact information leads to embarrassing personalization errors (\"Hello [First Name]\") that damage your brand credibility.\n\n3. Inaccurate Segmentation: Poor data quality prevents precise targeting, resulting in irrelevant messages sent to the wrong audiences.\n\n4. Skewed Analytics: Duplicates and improper attributions create misleading campaign metrics, making it impossible to accurately measure performance.\n\n5. Wasted Budget: Marketing dollars are squandered on contacts who no longer exist, have incorrect information, or receive duplicate communications.\n\n6. Poor Lead Scoring: Inaccurate or incomplete data leads to improper lead scoring, causing sales to waste time on unqualified prospects or miss hot leads.\n\nOrganizations with clean data achieve significantly higher conversion rates and reduce marketing waste by up to 30% compared to those with significant data quality issues. By investing in data quality, you're directly improving your marketing ROI and campaign effectiveness.",
    relatedLink: {
      text: "Get our data quality impact guide",
      url: "/resources/data-impact",
      ariaLabel: "Download our guide on the impact of data quality on marketing performance"
    }
  },
];

export default dataQualityHubSpotFAQs;

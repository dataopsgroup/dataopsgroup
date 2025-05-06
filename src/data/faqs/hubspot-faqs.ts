
import { FAQItem } from "./types";

const hubspotFAQs: FAQItem[] = [{
  question: "What services does DataOps Group offer for HubSpot users?",
  answer: `DataOps Group specializes in HubSpot optimization for small to medium-sized businesses. Our core services include:

- HubSpot portal repair and optimization for operations with issues due to incorrect setup or long-term mismanagement
- On-demand HubSpot expertise as an embedded team member
- Strategic advisory services for rapidly changing environments
- Sales and marketing alignment through establishing common goals and service level agreements
- Data quality assessment and improvement
- Custom reporting and dashboard development

We work as your strategic partner rather than just another agency, bringing over 10 years of HubSpot experience to help transform your raw data into strategic insights that fuel growth.`,
  relatedLink: {
    text: "View our services",
    url: "/services",
    ariaLabel: "Learn more about DataOps Group's HubSpot optimization services"
  }
}, {
  question: "How does poor data quality in HubSpot affect our marketing ROI?",
  answer: `Poor data quality in HubSpot significantly impacts your marketing ROI in several critical ways:

First, it leads to wasted budget on campaigns targeting the wrong contacts or invalid emails. When your data is messy, you're essentially marketing to ghosts – contacts who may no longer exist, duplicate records, or incorrectly categorized prospects.

Second, it creates unreliable reporting, making it impossible to accurately measure campaign effectiveness. Without clean data, you can't trust the metrics you're using to make decisions, leading to continued investment in underperforming tactics.

Third, it creates friction between sales and marketing teams. When sales doesn't trust the quality of marketing-provided leads, the organizational divide widens, further reducing overall conversion rates.`,
  relatedLink: {
    text: "Download our free data cost guide",
    url: "/guide",
    ariaLabel: "Download our guide to the hidden costs of bad data"
  }
}, {
  question: "What is the difference between being 'data-driven' and just having data in HubSpot?",
  answer: `There's a significant difference between being truly data-driven and simply having data in HubSpot.

Merely having data means you've collected information in your HubSpot instance - you have contact records, email statistics, and website analytics. However, this data often exists in silos, may be of questionable quality, and doesn't necessarily inform strategic decisions.

Being data-driven means systematically using that data to acquire knowledge and make better business decisions. It involves having clean, reliable data, understanding which metrics actually matter (signal vs. noise), and creating processes that use data insights to guide marketing and sales activities.

At DataOps Group, we help transform organizations from simply having HubSpot data to becoming truly data-driven by implementing statistical process control principles that distinguish meaningful changes from normal variations, creating reliable reporting frameworks, and building a culture of data-informed decision making.`,
  relatedLink: {
    text: "Learn about our approach",
    url: "/approach",
    ariaLabel: "Discover how we transform organizations to be truly data-driven"
  }
}, {
  question: "What impact does dirty data have on our HubSpot marketing campaigns?",
  answer: `Dirty data has far-reaching negative impacts on your HubSpot marketing campaigns that directly affect your bottom line:

1. Decreased Deliverability: High bounce rates from invalid emails damage your sender reputation, causing even valid emails to land in spam folders.

2. Failed Personalization: Incorrect or missing contact information leads to embarrassing personalization errors ("Hello [First Name]") that damage your brand credibility.

3. Inaccurate Segmentation: Poor data quality prevents precise targeting, resulting in irrelevant messages sent to the wrong audiences.

4. Skewed Analytics: Duplicates and improper attributions create misleading campaign metrics, making it impossible to accurately measure performance.

5. Wasted Budget: Marketing dollars are squandered on contacts who no longer exist, have incorrect information, or receive duplicate communications.

6. Poor Lead Scoring: Inaccurate or incomplete data leads to improper lead scoring, causing sales to waste time on unqualified prospects or miss hot leads.

Studies show that organizations with clean data achieve 66% higher conversion rates and reduce marketing waste by up to 30% compared to those with significant data quality issues.`,
  relatedLink: {
    text: "Get our data quality impact guide",
    url: "/resources/data-impact",
    ariaLabel: "Download our guide on the impact of data quality on marketing performance"
  }
}, {
  question: "What are the essential HubSpot data points that should always be accurate?",
  answer: `While every business has unique data needs, these core HubSpot data points are universally critical and should be prioritized for accuracy:

For Contacts:
- Email Address (primary identifier and communication channel)
- Full Name (properly formatted with correct capitalization)
- Company Association (linking contacts to their organization)
- Lead Source (critical for attribution and ROI calculation)
- Lifecycle Stage (ensures proper lead management)

For Companies:
- Company Name (standardized with consistent formatting)
- Industry (essential for segmentation)
- Company Size (employees or revenue for proper targeting)
- Website URL (used for company matching and verification)

For Deals:
- Amount (critical for revenue forecasting)
- Close Date (essential for pipeline management)
- Deal Stage (reflects accurate sales process position)
- Associated Contacts and Company (maintains relationship integrity)

These foundational data points form the backbone of effective marketing and sales operations. When these are accurate, even if other fields contain gaps, your core business processes can function effectively while you address secondary data issues.`,
  relatedLink: {
    text: "Download our data quality checklist",
    url: "/resources/checklist",
    ariaLabel: "Get our comprehensive HubSpot data quality checklist"
  }
}, {
  question: "What is the difference between data cleaning and data enrichment in HubSpot?",
  answer: `Data cleaning and data enrichment serve different but complementary purposes in maintaining a healthy HubSpot database:

Data Cleaning focuses on correcting existing information by:
- Removing duplicate records
- Standardizing formatting (e.g., phone numbers, addresses)
- Fixing incorrect information
- Filling in missing required fields
- Removing outdated contacts

Data Enrichment focuses on adding new information by:
- Appending industry data to company records
- Adding missing contact details from third-party sources
- Updating job titles and company affiliations
- Adding technographic or firmographic details
- Enhancing records with social media profiles

While cleaning ensures your existing data is accurate and usable, enrichment makes that data more valuable by adding context and depth. A comprehensive HubSpot optimization strategy should include both practices, starting with cleaning (to ensure you're not enriching bad data) followed by strategic enrichment of your most important records.`,
  relatedLink: {
    text: "Learn about our data services",
    url: "/services",
    ariaLabel: "Explore our HubSpot data cleaning and enrichment services"
  }
}];

export default hubspotFAQs;

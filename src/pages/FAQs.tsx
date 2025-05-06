import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CTABanner from '@/components/CTABanner';
import { HelpCircle, FolderOpen, Book, FileBarChart, Database } from 'lucide-react';
const FAQsPage = () => {
  const hubspotFAQs = [{
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
  const approachFAQs = [{
    question: "How quickly can you fix our messy HubSpot portal?",
    answer: `The timeline for fixing a messy HubSpot portal depends on several factors including the severity of the issues, the size of your database, complexity of your current setup, and your specific goals.

Typically, our HubSpot repair projects follow these phases:

1. Initial assessment and audit (1-2 weeks): We thoroughly evaluate your current HubSpot implementation, identifying critical issues and prioritizing them.

2. Critical repairs (2-4 weeks): We address the most severe pain points first, working on resolving foundational data and structural problems.

3. Optimization and training (2-3 weeks): We implement best practices, establish proper workflows, and train your team to maintain the improved system.

From start to finish, most clients see significant improvements within 4-8 weeks, with the most critical issues resolved even sooner. Throughout the process, we provide clear communication about progress and expected timelines specific to your situation.`,
    relatedLink: {
      text: "Book a consultation",
      url: "/contact",
      ariaLabel: "Schedule a consultation to discuss your HubSpot repair needs"
    }
  }, {
    question: "How does DataOps Group help align our marketing and sales teams?",
    answer: `DataOps Group helps align your marketing and sales teams through a comprehensive approach that addresses both data and organizational challenges:

1. Creating a single source of truth: We implement dashboards that provide both teams with consistent, accurate data they can trust, eliminating debates about lead quality or campaign effectiveness.

2. Establishing clear Service Level Agreements (SLAs): We help define specific commitments between marketing and sales regarding lead quantity, quality, and follow-up timeframes.

3. Setting up shared goals and metrics: We create unified reporting that focuses both teams on revenue outcomes rather than siloed metrics that can create misaligned incentives.

4. Building effective handoff processes: We optimize your HubSpot implementation to ensure smooth transition of leads between marketing and sales, with clear tracking and accountability.

5. Automating regular reporting: We implement weekly or monthly reviews that foster collaborative discussion rather than finger-pointing, creating a culture of continuous improvement.`,
    relatedLink: {
      text: "Learn about our alignment services",
      url: "/services/alignment",
      ariaLabel: "Discover our services for aligning marketing and sales teams"
    }
  }, {
    question: "What makes DataOps Group different from other HubSpot consultants?",
    answer: `DataOps Group stands apart from typical HubSpot consultants in several key ways:

1. Data-First Approach: While most consultants focus primarily on marketing tactics or basic implementation, we prioritize data quality and governance as the foundation for everything else.

2. Statistical Process Control: We apply proven operational excellence methodologies used by companies like Amazon, bringing enterprise-grade data analysis techniques to SMBs in an accessible way.

3. Business Outcome Focus: Rather than just setting up tools, we help you extract meaningful insights that directly connect to revenue generation and business growth.

4. Both Strategic and Tactical: We combine high-level strategic guidance with hands-on implementation, serving as both advisors and execution partners.

5. Long-term Partnership: Instead of one-off projects, we establish ongoing relationships that help you continuously improve your data operations over time.

6. Teaching Approach: We don't just fix problems for you—we teach your team how to maintain best practices and become more self-sufficient with your HubSpot instance.`,
    relatedLink: {
      text: "Read our client testimonials",
      url: "/testimonials",
      ariaLabel: "See what our clients say about working with DataOps Group"
    }
  }, {
    question: "Can you fix our HubSpot data without disrupting our ongoing marketing activities?",
    answer: `Yes, we can fix your HubSpot data while minimizing disruption to your ongoing marketing activities. Our approach prioritizes business continuity through a carefully planned process:

1. Initial Assessment: We begin with a comprehensive audit that identifies issues without making changes to your system.

2. Prioritized Implementation: We address the most critical issues first, particularly those affecting active campaigns.

3. Staged Rollout: Changes are implemented in phases, often during lower-activity periods to minimize impact.

4. Sandbox Testing: We test complex data transformations in a sandbox environment before applying them to your live instance.

5. Backup Protection: We create data backups before implementing major changes to ensure nothing is permanently lost.

6. Real-time Monitoring: Throughout the process, we monitor your active campaigns and marketing metrics to catch any unexpected impacts.

Our goal is to improve your data without causing disruption to your revenue-generating activities. In fact, most clients see immediate improvements in campaign performance even during the cleanup process.`,
    relatedLink: {
      text: "Read our implementation process",
      url: "/implementation",
      ariaLabel: "Learn about our low-disruption implementation process"
    }
  }, {
    question: "How do you approach the 'people side' of data quality improvement?",
    answer: `The technical side of data cleaning is only half the battle. We approach the human element of data quality improvement through:

1. Stakeholder Alignment: We begin by understanding each department's data needs and concerns, ensuring our solution addresses their specific pain points.

2. Change Management: We develop a structured change management plan that communicates why changes are happening and how they benefit everyone.

3. Skills Transfer: Rather than creating dependency, we teach your team the principles of data management through hands-on training sessions.

4. Clear Documentation: We create accessible guides and standard operating procedures customized to your business processes.

5. Workflow Optimization: We design data entry and management workflows that make it easy for team members to maintain quality data.

6. Success Metrics: We establish clear KPIs that demonstrate improvements, building confidence in the new approach.

By addressing both technical and human factors, we ensure data quality improvements are sustainable long after our engagement ends. This people-centric approach is why our clients report 95% user adoption rates for new data processes.`,
    relatedLink: {
      text: "Our training approach",
      url: "/training",
      ariaLabel: "Learn about our people-focused training approach"
    }
  }, {
    question: "How often should we audit and clean our HubSpot database?",
    answer: `The optimal frequency for HubSpot database auditing and cleaning depends on several factors, but here are general guidelines based on our experience:

1. Comprehensive Audits: Conduct a thorough database audit quarterly to identify systematic issues and trends in data quality.

2. Regular Maintenance: Implement weekly automated cleaning routines for common issues like formatting standardization and duplicate detection.

3. New Campaign Preparation: Always review and clean relevant segments before launching major marketing campaigns to ensure optimal performance.

4. Integration Monitoring: After adding new integrations or data sources, audit affected records within the first week to catch any issues early.

5. Monthly Reports: Generate monthly data quality reports to track improvements and identify emerging issues.

Companies with higher data velocity (many new records created daily) or multiple data sources typically need more frequent cleaning. The key is establishing consistent processes rather than treating data cleaning as a one-time project. DataOps Group can help you implement automated monitoring and cleaning routines that maintain data quality with minimal ongoing effort.`,
    relatedLink: {
      text: "Learn about ongoing data maintenance",
      url: "/maintenance",
      ariaLabel: "Discover our approach to ongoing HubSpot data maintenance"
    }
  }];
  const dataQualityFAQs = [{
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

  // Combine all FAQ items for schema markup
  const allFAQs = [...hubspotFAQs, ...approachFAQs, ...dataQualityFAQs];

  // Define breadcrumbs for schema
  const breadcrumbs = [{
    name: 'Home',
    url: '/'
  }, {
    name: 'FAQs',
    url: '/faqs'
  }];
  return <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Frequently Asked Questions - DataOps Group</title>
        <meta name="description" content="Find answers to common questions about HubSpot optimization, data quality, marketing ROI, sales and marketing alignment, and our approach to fixing messy HubSpot portals." />
        <meta name="keywords" content="HubSpot FAQs, HubSpot consultant, data quality, marketing ROI, sales and marketing alignment, HubSpot optimization, statistical process control, data cleaning, reporting dashboards" />
        <link rel="canonical" href={`${window.location.origin}/faqs`} />
        
        {/* FAQ schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": allFAQs.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })}
        </script>
      </Helmet>
      
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-lg text-gray-700">
                Find answers to common questions about our HubSpot optimization services and implementation approach
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <FolderOpen className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    HubSpot Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-4">
                    {hubspotFAQs.map((item, index) => <AccordionItem key={`hub-item-${index + 1}`} value={`hub-item-${index + 1}`} className="bg-white rounded-lg shadow-md border">
                        <AccordionTrigger className="px-6 py-4 text-lg">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          {item.answer.split('\n\n').map((paragraph, i) => <p key={i} className="mb-3 whitespace-pre-line">{paragraph}</p>)}
                          {item.relatedLink && <p className="mt-4">
                              <Link to={item.relatedLink.url} className="text-dataops-600 hover:underline font-medium" aria-label={item.relatedLink.ariaLabel}>
                                {item.relatedLink.text}
                              </Link>
                            </p>}
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <Book className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    Our Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-4">
                    {approachFAQs.map((item, index) => <AccordionItem key={`approach-item-${index + 1}`} value={`approach-item-${index + 1}`} className="bg-white rounded-lg shadow-md border">
                        <AccordionTrigger className="px-6 py-4 text-lg">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          {item.answer.split('\n\n').map((paragraph, i) => <p key={i} className="mb-3 whitespace-pre-line text-base">{paragraph}</p>)}
                          {item.relatedLink && <p className="mt-4">
                              <Link to={item.relatedLink.url} className="text-dataops-600 hover:underline font-medium" aria-label={item.relatedLink.ariaLabel}>
                                {item.relatedLink.text}
                              </Link>
                            </p>}
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <Database className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    Data Quality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-4">
                    {dataQualityFAQs.map((item, index) => <AccordionItem key={`data-item-${index + 1}`} value={`data-item-${index + 1}`} className="bg-white rounded-lg shadow-md border">
                        <AccordionTrigger className="px-6 py-4 text-lg">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          {item.answer.split('\n\n').map((paragraph, i) => <p key={i} className="mb-3 whitespace-pre-line">{paragraph}</p>)}
                          {item.relatedLink && <p className="mt-4">
                              <Link to={item.relatedLink.url} className="text-dataops-600 hover:underline font-medium" aria-label={item.relatedLink.ariaLabel}>
                                {item.relatedLink.text}
                              </Link>
                            </p>}
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-dataops-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Have more questions?</h2>
                    <p className="mb-4 text-gray-700">
                      We're here to help with any questions about HubSpot optimization, data operations, or how our services can benefit your organization.
                    </p>
                    <Link to="/contact" className="text-dataops-600 hover:underline font-medium inline-flex items-center" aria-label="Contact us for personalized answers to your HubSpot questions">
                      Contact us for personalized answers
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </div>;
};
export default FAQsPage;
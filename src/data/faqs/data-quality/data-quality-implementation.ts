
import { FAQItem } from "../types";

// Implementation and planning aspects of data quality
const dataQualityImplementationFAQs: FAQItem[] = [
  {
    question: "How do I create an effective data quality plan?",
    answer: "Creating an effective data quality plan involves these essential steps:\n\n1. Describe your data ecosystem - Map all systems, sources, and flows of data\n\n2. Identify key stakeholders - Determine who creates, manages, and uses the data\n\n3. Define clear roles and responsibilities - Assign specific data quality duties to team members\n\n4. Establish quality metrics and standards - Define what \"good data\" looks like for your organization\n\n5. Build robust data collection workflows - Design processes that prevent errors at the source\n\n6. Implement data management protocols - Create systems for organizing and maintaining data\n\n7. Train and calibrate data collectors - Ensure everyone follows consistent procedures\n\n8. Develop error detection and correction procedures - Create processes to identify and fix issues\n\n9. Document sources of variability - Understand what might affect data consistency\n\n10. Set up ongoing quality monitoring - Regularly assess and improve data quality\n\nAn effective plan should be documented, communicated across the organization, and regularly reviewed for improvement opportunities.",
    relatedLink: {
      text: "Data Quality Planning Template",
      url: "/data-quality-plan-template",
      ariaLabel: "Downloadable template for creating a comprehensive data quality plan"
    }
  },
  {
    question: "What quality control questions should I include in my surveys?",
    answer: "Effective survey quality control questions help ensure respondents are providing thoughtful, accurate responses. Consider including:\n\n1. Attention check questions - Simple questions with obvious answers (e.g., 'Please select \"Strongly Agree\" for this question')\n\n2. Logical consistency checks - Pairs of questions that should have logically consistent answers\n\n3. Instructional manipulation checks - Directions that ask respondents to perform a specific action\n\n4. Speeding checks - Identifying respondents who complete sections too quickly\n\n5. Open-ended validation questions - Short-answer questions that verify engagement\n\nWhen respondents fail these checks, you may need to exclude their data from analysis. However, use these sparingly (1-2 per survey) to avoid respondent fatigue and ensure they're designed to catch intentional non-compliance rather than penalizing honest mistakes.",
    relatedLink: {
      text: "Survey Data Quality Best Practices",
      url: "/survey-quality-guide",
      ariaLabel: "Guide to implementing effective survey data quality measures"
    }
  },
  {
    question: "How can I check the quality of my HubSpot data without Operations Hub?",
    answer: "While HubSpot's Operations Hub provides dedicated data quality tools, you can still assess and improve your data quality without it using these approaches:\n\n1. Create Custom Reports: Build reports showing contacts missing critical fields like email, company association, or industry. These reports highlight gaps in your data.\n\n2. Use List Filters: Create lists of contacts with formatting inconsistencies (e.g., all-caps names, inconsistent phone formats) to identify standardization issues.\n\n3. Run Duplicate Contact Reports: Use HubSpot's basic duplicate management tool to identify obvious duplicates, even though it won't catch all variations.\n\n4. Review Property Usage: Examine which properties are being consistently used and which have spotty data entry to identify process issues.\n\n5. Analyze Email Performance: High bounce rates or low deliverability often indicate poor data quality issues.\n\nWhile these manual methods require more effort than using Operations Hub, they can still provide valuable insights into your data health. For more comprehensive analysis, DataOps Group can conduct a professional data quality audit that examines deeper issues that might not be visible through basic reporting.",
    relatedLink: {
      text: "Schedule a data quality assessment",
      url: "/contact",
      ariaLabel: "Contact us to schedule a comprehensive data quality assessment"
    }
  },
  {
    question: "How long does it take to clean up a messy HubSpot database?",
    answer: "The timeline for cleaning up a messy HubSpot database depends on several factors, but most projects follow this general timeline:\n\n1. Initial Assessment (1-2 weeks): We conduct a comprehensive audit of your current data quality, identifying critical issues and establishing priorities.\n\n2. Implementation Planning (1 week): We develop a detailed roadmap for addressing the identified issues, including technical solutions and change management strategies.\n\n3. Critical Fixes (2-4 weeks): We address the most severe data quality issues that are actively hindering your operations, such as widespread duplicates or formatting problems.\n\n4. Comprehensive Cleanup (3-8 weeks): We systematically work through all identified issues, implementing both technical solutions and process improvements.\n\n5. Governance Implementation (2-3 weeks): We establish ongoing monitoring and maintenance processes to maintain data quality moving forward.\n\nFor a medium-sized database (20,000-50,000 records), the entire process typically takes 2-3 months from start to finish. Smaller databases may be completed more quickly, while larger or more complex instances may require additional time. The key is not just to clean the data once but to implement sustainable processes that keep it clean going forward.",
    relatedLink: {
      text: "Book a consultation",
      url: "/contact",
      ariaLabel: "Schedule a consultation to discuss your specific timeline needs"
    }
  },
  {
    question: "How do you approach the 'people side' of data quality improvement?",
    answer: "The technical side of data cleaning is only half the battle. We approach the human element of data quality improvement through:\n\n1. Stakeholder Alignment: We begin by understanding each department's data needs and concerns, ensuring our solution addresses their specific pain points.\n\n2. Change Management: We develop a structured change management plan that communicates why changes are happening and how they benefit everyone.\n\n3. Skills Transfer: Rather than creating dependency, we teach your team the principles of data management through hands-on training sessions.\n\n4. Clear Documentation: We create accessible guides and standard operating procedures customized to your business processes.\n\n5. Workflow Optimization: We design data entry and management workflows that make it easy for team members to maintain quality data.\n\n6. Success Metrics: We establish clear KPIs that demonstrate improvements, building confidence in the new approach.\n\nBy addressing both technical and human factors, we ensure data quality improvements are sustainable long after our engagement ends. This people-centric approach is why our clients report 95% user adoption rates for new data processes. Without proper change management and user engagement, even the best technical solutions will fail to deliver lasting results.",
    relatedLink: {
      text: "Our training approach",
      url: "/training",
      ariaLabel: "Learn about our people-focused training approach"
    }
  },
  {
    question: "Can you fix our HubSpot data without disrupting our ongoing marketing activities?",
    answer: "Yes, we can fix your HubSpot data while minimizing disruption to your ongoing marketing activities. Our approach prioritizes business continuity through a carefully planned process:\n\n1. Initial Assessment: We begin with a comprehensive audit that identifies issues without making changes to your system.\n\n2. Prioritized Implementation: We address the most critical issues first, particularly those affecting active campaigns.\n\n3. Staged Rollout: Changes are implemented in phases, often during lower-activity periods to minimize impact.\n\n4. Sandbox Testing: We test complex data transformations in a sandbox environment before applying them to your live instance.\n\n5. Backup Protection: We create data backups before implementing major changes to ensure nothing is permanently lost.\n\n6. Real-time Monitoring: Throughout the process, we monitor your active campaigns and marketing metrics to catch any unexpected impacts.\n\nOur goal is to improve your data without causing disruption to your revenue-generating activities. In fact, most clients see immediate improvements in campaign performance even during the cleanup process as their targeting becomes more accurate and their automation workflows operate more efficiently.",
    relatedLink: {
      text: "Read our implementation process",
      url: "/implementation",
      ariaLabel: "Learn about our low-disruption implementation process"
    }
  },
  {
    question: "What is the difference between data cleaning and data enrichment in HubSpot?",
    answer: "Data cleaning and data enrichment serve different but complementary purposes in maintaining a healthy HubSpot database:\n\nData Cleaning focuses on correcting existing information by:\n- Removing duplicate records\n- Standardizing formatting (e.g., phone numbers, addresses)\n- Fixing incorrect information\n- Filling in missing required fields\n- Removing outdated contacts\n\nData Enrichment focuses on adding new information by:\n- Appending industry data to company records\n- Adding missing contact details from third-party sources\n- Updating job titles and company affiliations\n- Adding technographic or firmographic details\n- Enhancing records with social media profiles\n\nWhile cleaning ensures your existing data is accurate and usable, enrichment makes that data more valuable by adding context and depth. A comprehensive HubSpot optimization strategy should include both practices, starting with cleaning (to ensure you're not enriching bad data) followed by strategic enrichment of your most important records.",
    relatedLink: {
      text: "Learn about our data services",
      url: "/services",
      ariaLabel: "Explore our HubSpot data cleaning and enrichment services"
    }
  },
];

export default dataQualityImplementationFAQs;


import { FAQItem } from "./types";

const approachFAQs: FAQItem[] = [{
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

export default approachFAQs;

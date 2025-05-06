
import { FAQItem } from "../types";

// Basic concepts and dimensions of data quality
const dataQualityBasicsFAQs: FAQItem[] = [
  {
    question: "What are the 6 dimensions of data quality?",
    answer: "The six fundamental dimensions of data quality are:\n\n1. Accuracy - Is the data correct and reliable?\n\n2. Completeness - Does the data contain all necessary values and records?\n\n3. Consistency - Is the data consistent across different datasets and systems?\n\n4. Timeliness - Is the data up-to-date and available when needed?\n\n5. Validity - Does the data conform to required formats and business rules?\n\n6. Integrity - Are there proper relationships between data elements and appropriate context?\n\nThese dimensions work together to ensure data is reliable and useful for analysis and decision-making. Organizations often establish specific metrics and thresholds for each dimension to monitor and maintain data quality across systems.",
    relatedLink: {
      text: "Read more about data quality dimensions",
      url: "/data-quality-dimensions-guide",
      ariaLabel: "Comprehensive guide to the six dimensions of data quality"
    }
  },
  {
    question: "What's the difference between data quality and data integrity?",
    answer: "While often used interchangeably, data quality and data integrity represent distinct but complementary aspects of data management:\n\n**Data Quality** focuses on the characteristics that make data reliable and fit for its intended purpose. It addresses attributes like accuracy, completeness, consistency, and timeliness to ensure data meets business requirements. Data quality is primarily concerned with the correctness of individual data elements.\n\n**Data Integrity** extends beyond quality to ensure data maintains its reliability throughout its lifecycle. It focuses on the relationships between data elements, maintaining proper context, and ensuring data remains unaltered during operations. Data integrity emphasizes the structural soundness of data, including referential integrity, and proper maintenance of relationships between tables in relational databases.\n\nIn essence, data quality ensures data is accurate and reliable, while data integrity makes this reliable data useful by adding relationships and context. Both are essential for effective data management—data quality establishes a foundation of trustworthy information, and data integrity makes that information meaningful and actionable.",
    relatedLink: {
      text: "Data Quality vs. Integrity Deep Dive",
      url: "/quality-vs-integrity-guide",
      ariaLabel: "Comprehensive comparison of data quality and data integrity concepts"
    }
  },
  {
    question: "What questions should I ask when analyzing data?",
    answer: "When analyzing data, ask these key questions to extract meaningful insights:\n\n1. What is the business problem I'm trying to solve with this analysis?\n\n2. What are the key patterns or trends in the data?\n\n3. Are there any outliers or anomalies, and what might explain them?\n\n4. How reliable and complete is the underlying data?\n\n5. What biases might exist in how the data was collected or processed?\n\n6. What correlations exist between different variables?\n\n7. Do these correlations suggest causation, or could other factors be involved?\n\n8. How do the findings compare to my initial hypotheses?\n\n9. What actionable insights can be derived from this analysis?\n\n10. How can I effectively communicate these findings to stakeholders?\n\nAsking these questions helps ensure your data analysis is thorough, contextually relevant, and leads to meaningful business decisions rather than just producing interesting statistics.",
    relatedLink: {
      text: "Data Analysis Framework Guide",
      url: "/data-analysis-question-framework",
      ariaLabel: "Step-by-step guide for structuring effective data analysis"
    }
  },
  {
    question: "How do I evaluate our organization's data strategy?",
    answer: "To evaluate your organization's data strategy, ask these seven essential questions:\n\n1. What are our primary business objectives, and how does our data strategy support them?\n\n2. Who are the key stakeholders involved in data collection, management, and analysis?\n\n3. What data sources do we currently utilize, and are there untapped sources we should consider?\n\n4. How do we currently analyze data, and are our methods effective and efficient?\n\n5. What is the current quality of our data, and how do we measure and maintain it?\n\n6. How is data governance implemented across the organization?\n\n7. What technologies and tools comprise our data infrastructure, and are they adequate?\n\nBy answering these questions, you'll identify strengths and gaps in your current approach, reveal opportunities for improvement, and ensure your data strategy effectively supports your business objectives. This evaluation should be conducted periodically, especially when business priorities shift or new technologies emerge.",
    relatedLink: {
      text: "Data Strategy Assessment Tool",
      url: "/data-strategy-assessment",
      ariaLabel: "Interactive tool for evaluating your organization's data strategy"
    }
  },
  {
    question: "What is data lineage and why is it important for marketing operations?",
    answer: "Data lineage is the complete lifecycle of data, tracking its origins, transformations, and uses throughout your organization. For marketing operations, understanding data lineage is critical because it:\n\n1. Enhances Data Trust: When you can trace where data came from and how it's been modified, you can confidently rely on it for decision-making.\n\n2. Improves Problem-Solving: When issues arise, data lineage helps you quickly identify where the breakdown occurred, whether at the source, during transformation, or at the point of use.\n\n3. Supports Compliance: Clear documentation of data flows helps ensure you're handling data appropriately according to regulations like GDPR or CCPA.\n\n4. Facilitates Integration: Understanding how data moves between systems makes it easier to add new tools or modify existing processes without disrupting data integrity.\n\n5. Enables Better Attribution: Proper data lineage helps you accurately track which marketing activities contribute to conversion and revenue.\n\nBy mapping your data lineage, you create transparency across your marketing operations, making it easier to maintain data quality, troubleshoot issues, and continuously improve your processes. This comprehensive view of your data's journey is essential for building a truly data-driven marketing function.",
    relatedLink: {
      text: "Learn about our data lineage mapping",
      url: "/services/lineage-mapping",
      ariaLabel: "Discover our approach to mapping data lineage in marketing operations"
    }
  },
  {
    question: "What is Statistical Process Control (SPC) and how does it apply to HubSpot data?",
    answer: "Statistical Process Control (SPC) is a methodology developed in manufacturing that uses statistical methods to monitor and control processes. When applied to HubSpot data, it transforms how you interpret and act on your marketing and sales metrics:\n\n1. Signal vs. Noise: SPC helps you distinguish between normal variations in data (noise) and significant changes that require action (signals), preventing overreaction to routine fluctuations.\n\n2. Control Limits: We establish statistical boundaries around your key metrics that indicate when a change is statistically significant and worthy of investigation.\n\n3. Process Behavior Charts: These visualizations make it immediately clear which metric changes deserve attention and which are just normal variation.\n\n4. Predictable Improvement: By focusing only on meaningful changes, your team can implement improvements that have lasting impact rather than chasing random fluctuations.\n\n5. Data-Driven Decisions: SPC creates confidence in when to act and when to stay the course, eliminating gut-based decision making.\n\nBy implementing SPC principles in your HubSpot instance, you gain a powerful framework for interpreting data that has been proven effective by operational leaders like Amazon and Toyota, helping you focus resources on changes that will truly move the needle.",
    relatedLink: {
      text: "Learn about our data methodology",
      url: "/methodology",
      ariaLabel: "Discover how we apply Statistical Process Control to marketing operations"
    }
  },
];

export default dataQualityBasicsFAQs;

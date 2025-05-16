
export interface QuestionOption {
  value: number;
  text: string;
  description: string;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

export interface QuizSection {
  id: number;
  title: string;
  questions: Question[];
}

export const quizSections: QuizSection[] = [
  {
    id: 1,
    title: "User Adoption Assessment",
    questions: [
      {
        id: "1.1",
        text: "What percentage of your team regularly uses HubSpot for their core responsibilities?",
        options: [
          { value: 1, text: "Less than 20%", description: "Very low adoption" },
          { value: 2, text: "20-40%", description: "Low adoption" },
          { value: 3, text: "41-60%", description: "Moderate adoption" },
          { value: 4, text: "61-80%", description: "Good adoption" },
          { value: 5, text: "More than 80%", description: "Excellent adoption" }
        ]
      },
      {
        id: "1.2",
        text: "What percentage of your licensed HubSpot capabilities are actively being used?",
        options: [
          { value: 1, text: "Less than 20%", description: "Very limited usage" },
          { value: 2, text: "20-40%", description: "Basic usage only" },
          { value: 3, text: "41-60%", description: "Moderate usage" },
          { value: 4, text: "61-80%", description: "Good utilization" },
          { value: 5, text: "More than 80%", description: "Full utilization" }
        ]
      },
      {
        id: "1.3",
        text: "How would your team rate the value HubSpot provides to their daily work?",
        options: [
          { value: 1, text: "Creates more work", description: "Actively frustrating" },
          { value: 2, text: "Minimal value", description: "Not worth the effort" },
          { value: 3, text: "Some useful features", description: "Mixed perception" },
          { value: 4, text: "Valuable but imperfect", description: "Generally positive" },
          { value: 5, text: "Essential tool", description: "Highly valued" }
        ]
      },
      {
        id: "1.4",
        text: "How effective was your team's HubSpot training?",
        options: [
          { value: 1, text: "No formal training", description: "Self-taught only" },
          { value: 2, text: "Basic generic training", description: "Minimal guidance" },
          { value: 3, text: "Role-based but limited", description: "Some tailored content" },
          { value: 4, text: "Comprehensive training", description: "Well-designed program" },
          { value: 5, text: "Ongoing education", description: "Continuous improvement" }
        ]
      },
      {
        id: "1.5",
        text: "How much resistance exists toward using HubSpot?",
        options: [
          { value: 1, text: "Active resistance", description: "Deliberate workarounds" },
          { value: 2, text: "Significant grumbling", description: "Reluctant usage" },
          { value: 3, text: "Neutral attitude", description: "Used when required" },
          { value: 4, text: "Generally positive", description: "Occasional resistance" },
          { value: 5, text: "Enthusiastic adoption", description: "Team champions system" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Data Quality Assessment",
    questions: [
      {
        id: "2.1",
        text: "What is your estimated duplicate contact/company rate?",
        options: [
          { value: 1, text: "More than 20% duplicates", description: "Severely compromised" },
          { value: 2, text: "15-20% duplicates", description: "Highly problematic" },
          { value: 3, text: "10-15% duplicates", description: "Moderate issues" },
          { value: 4, text: "5-10% duplicates", description: "Minor issues" },
          { value: 5, text: "Less than 5% duplicates", description: "Well-managed" }
        ]
      },
      {
        id: "2.2",
        text: "What percentage of key fields are complete across your records?",
        options: [
          { value: 1, text: "Less than 40% complete", description: "Severely incomplete" },
          { value: 2, text: "40-60% complete", description: "Major gaps" },
          { value: 3, text: "61-75% complete", description: "Moderate completion" },
          { value: 4, text: "76-90% complete", description: "Good completion" },
          { value: 5, text: "More than 90% complete", description: "Excellent completion" }
        ]
      },
      {
        id: "2.3",
        text: "How often is your data reviewed and updated?",
        options: [
          { value: 1, text: "Rarely or never", description: "No maintenance" },
          { value: 2, text: "Annually", description: "Infrequent" },
          { value: 3, text: "Quarterly", description: "Periodic review" },
          { value: 4, text: "Monthly", description: "Regular maintenance" },
          { value: 5, text: "Continuous automation", description: "Systematic approach" }
        ]
      },
      {
        id: "2.4",
        text: "How structured is your approach to data management?",
        options: [
          { value: 1, text: "No defined processes", description: "Ad hoc approach" },
          { value: 2, text: "Some rules, inconsistent", description: "Informal systems" },
          { value: 3, text: "Documented standards", description: "Limited enforcement" },
          { value: 4, text: "Clear standards", description: "Regular enforcement" },
          { value: 5, text: "Comprehensive governance", description: "Formal program" }
        ]
      },
      {
        id: "2.5",
        text: "How much does your team trust HubSpot as the source of truth?",
        options: [
          { value: 1, text: "Actively distrust data", description: "Avoid using system data" },
          { value: 2, text: "Low trust", description: "Frequent verification" },
          { value: 3, text: "Moderate trust", description: "Some verification" },
          { value: 4, text: "Generally trusted", description: "Occasional questions" },
          { value: 5, text: "Complete trust", description: "Single source of truth" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Process Integration Assessment",
    questions: [
      {
        id: "3.1",
        text: "How well does HubSpot align with your team's actual processes?",
        options: [
          { value: 1, text: "Forces unnatural processes", description: "Requires major changes" },
          { value: 2, text: "Significant mismatch", description: "Many workarounds needed" },
          { value: 3, text: "Partial alignment", description: "Some friction points" },
          { value: 4, text: "Good alignment", description: "Minor adjustments needed" },
          { value: 5, text: "Seamless support", description: "Perfectly aligned" }
        ]
      },
      {
        id: "3.2",
        text: "How effectively are you using automation to eliminate manual tasks?",
        options: [
          { value: 1, text: "Minimal automation", description: "Mostly manual processes" },
          { value: 2, text: "Basic automation only", description: "Simple tasks automated" },
          { value: 3, text: "Moderate automation", description: "Key processes automated" },
          { value: 4, text: "Extensive automation", description: "Most tasks automated" },
          { value: 5, text: "Comprehensive automation", description: "All possible automation" }
        ]
      },
      {
        id: "3.3",
        text: "How effectively does HubSpot connect marketing, sales, and service?",
        options: [
          { value: 1, text: "Completely siloed", description: "No department connection" },
          { value: 2, text: "Limited sharing", description: "Minimal cross-team visibility" },
          { value: 3, text: "Some shared processes", description: "Partial integration" },
          { value: 4, text: "Strong alignment", description: "Minor gaps remain" },
          { value: 5, text: "Fully unified experience", description: "Seamless handoffs" }
        ]
      },
      {
        id: "3.4",
        text: "How well is HubSpot integrated with other critical business systems?",
        options: [
          { value: 1, text: "No integration", description: "Standalone system" },
          { value: 2, text: "Manual export/import", description: "Manual transfers" },
          { value: 3, text: "Basic one-way integration", description: "Limited data flow" },
          { value: 4, text: "Bi-directional integration", description: "Key systems connected" },
          { value: 5, text: "Comprehensive ecosystem", description: "Full integration" }
        ]
      },
      {
        id: "3.5",
        text: "How clearly can you track the entire customer journey in HubSpot?",
        options: [
          { value: 1, text: "No end-to-end visibility", description: "Disconnected stages" },
          { value: 2, text: "Major gaps in journey", description: "Significant blind spots" },
          { value: 3, text: "Partial journey visibility", description: "Some key points tracked" },
          { value: 4, text: "Good visibility", description: "Minor blind spots" },
          { value: 5, text: "Complete tracking", description: "Full journey visibility" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Reporting & Analytics Assessment",
    questions: [
      {
        id: "4.1",
        text: "How extensively is your team using HubSpot's reporting capabilities?",
        options: [
          { value: 1, text: "Not using for reporting", description: "External reporting only" },
          { value: 2, text: "Basic out-of-box reports", description: "Default reports only" },
          { value: 3, text: "Some custom reports", description: "Limited customization" },
          { value: 4, text: "Extensive custom reporting", description: "Tailored to needs" },
          { value: 5, text: "Comprehensive dashboards", description: "All levels of business" }
        ]
      },
      {
        id: "4.2",
        text: "How well do your HubSpot metrics align with business objectives?",
        options: [
          { value: 1, text: "No connection to goals", description: "Vanity metrics only" },
          { value: 2, text: "Basic activity metrics", description: "Volume measurements" },
          { value: 3, text: "Some outcome metrics", description: "Mixed relevance" },
          { value: 4, text: "Strong KPI alignment", description: "Good business context" },
          { value: 5, text: "Complete performance view", description: "Perfect alignment" }
        ]
      },
      {
        id: "4.3",
        text: "How often do your teams use HubSpot data to make decisions?",
        options: [
          { value: 1, text: "Rarely or never", description: "Decisions made elsewhere" },
          { value: 2, text: "Occasionally", description: "For major decisions only" },
          { value: 3, text: "Regularly for some", description: "Inconsistent usage" },
          { value: 4, text: "Frequently", description: "Most areas use data" },
          { value: 5, text: "Consistently", description: "Data-driven culture" }
        ]
      },
      {
        id: "4.4",
        text: "How engaged is your leadership with HubSpot insights?",
        options: [
          { value: 1, text: "No engagement", description: "Leadership unaware" },
          { value: 2, text: "Minimal awareness", description: "Limited interest" },
          { value: 3, text: "Periodic reporting", description: "Occasional review" },
          { value: 4, text: "Regular consumption", description: "Interested in results" },
          { value: 5, text: "Active engagement", description: "Data-driven leadership" }
        ]
      },
      {
        id: "4.5",
        text: "How effectively can you track the impact of marketing activities on sales?",
        options: [
          { value: 1, text: "Cannot track", description: "No visibility" },
          { value: 2, text: "Basic correlation", description: "Limited connection" },
          { value: 3, text: "Some attribution", description: "Partial visibility" },
          { value: 4, text: "Strong attribution", description: "Most impact tracked" },
          { value: 5, text: "Complete attribution", description: "Full ROI visibility" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "ROI & Value Assessment",
    questions: [
      {
        id: "5.1",
        text: "How well do you understand your total cost of HubSpot ownership?",
        options: [
          { value: 1, text: "Unknown costs", description: "No clear tracking" },
          { value: 2, text: "License costs only", description: "Partial visibility" },
          { value: 3, text: "License & staff costs", description: "Main costs tracked" },
          { value: 4, text: "Comprehensive visibility", description: "Good understanding" },
          { value: 5, text: "Complete cost analysis", description: "Full TCO picture" }
        ]
      },
      {
        id: "5.2",
        text: "How effectively does HubSpot enable growth and adaptation to changes?",
        options: [
          { value: 1, text: "Major limitations", description: "Constrains business" },
          { value: 2, text: "Challenging to adapt", description: "Significant barriers" },
          { value: 3, text: "Moderately flexible", description: "Some adaptations possible" },
          { value: 4, text: "Responsive & scalable", description: "Supports growth well" },
          { value: 5, text: "Enabler of growth", description: "Strategic advantage" }
        ]
      },
      {
        id: "5.3",
        text: "Can you measure the ROI of your HubSpot implementation?",
        options: [
          { value: 1, text: "Cannot measure ROI", description: "No ability to calculate" },
          { value: 2, text: "Rough estimates only", description: "Anecdotal evidence" },
          { value: 3, text: "Basic ROI calculation", description: "Simplified approach" },
          { value: 4, text: "Good ROI understanding", description: "Clear methodology" },
          { value: 5, text: "Precise ROI tracking", description: "Comprehensive model" }
        ]
      },
      {
        id: "5.4",
        text: "How much value does HubSpot provide beyond contact management?",
        options: [
          { value: 1, text: "Contact database only", description: "Minimal expanded use" },
          { value: 2, text: "Email marketing tool", description: "Limited applications" },
          { value: 3, text: "Department-specific tool", description: "One area benefits" },
          { value: 4, text: "Cross-department value", description: "Multiple applications" },
          { value: 5, text: "Business transformation", description: "Company-wide impact" }
        ]
      },
      {
        id: "5.5",
        text: "How well does your team leverage HubSpot's evolving capabilities?",
        options: [
          { value: 1, text: "Not following updates", description: "Static implementation" },
          { value: 2, text: "Awareness of updates", description: "Minimal adoption" },
          { value: 3, text: "Periodic evaluation", description: "Selected new features" },
          { value: 4, text: "Regular updates", description: "Consistent evaluation" },
          { value: 5, text: "Continuous optimization", description: "Fully leveraged" }
        ]
      }
    ]
  }
];

// Recommendations data for results
export const recommendationsData = [
  {
    section: 'section1',
    name: 'User Adoption',
    title: 'Improve User Adoption',
    text: 'Focus on training and getting stakeholder buy-in to increase regular system usage.'
  },
  {
    section: 'section2',
    name: 'Data Quality',
    title: 'Enhance Data Quality',
    text: 'Implement data cleaning protocols and establish governance rules to maintain clean records.'
  },
  {
    section: 'section3',
    name: 'Process Integration',
    title: 'Streamline Process Integration',
    text: 'Align HubSpot workflows with your business processes and increase automation.'
  },
  {
    section: 'section4',
    name: 'Reporting & Analytics',
    title: 'Improve Reporting & Analytics',
    text: 'Develop dashboards that align with business KPIs and encourage data-driven decisions.'
  },
  {
    section: 'section5',
    name: 'ROI & Value',
    title: 'Maximize ROI & Value',
    text: 'Focus on measuring and optimizing the business impact of your HubSpot implementation.'
  }
];

// Rescue plan actions data
export const rescuePlanActionsData = {
  section1: {
    phase1: [
      'Conduct stakeholder interviews to identify adoption barriers',
      'Develop role-specific training materials'
    ],
    phase2: [
      'Implement user feedback mechanisms',
      'Train departmental champions'
    ],
    phase3: [
      'Create ongoing education program',
      'Measure and celebrate adoption milestones'
    ]
  },
  section2: {
    phase1: [
      'Perform data quality audit',
      'Establish data governance standards'
    ],
    phase2: [
      'Implement duplicate management solution',
      'Enforce required fields and validation'
    ],
    phase3: [
      'Automate data enrichment',
      'Create ongoing data maintenance protocols'
    ]
  },
  section3: {
    phase1: [
      'Map current business processes',
      'Identify integration requirements'
    ],
    phase2: [
      'Build automated workflows for key processes',
      'Connect department handoffs'
    ],
    phase3: [
      'Integrate with other business systems',
      'Optimize customer journey tracking'
    ]
  },
  section4: {
    phase1: [
      'Define reporting objectives and KPIs',
      'Create baseline performance dashboards'
    ],
    phase2: [
      'Develop custom reports for key stakeholders',
      'Implement regular data review meetings'
    ],
    phase3: [
      'Build predictive analytics capabilities',
      'Create executive-level visualizations'
    ]
  },
  section5: {
    phase1: [
      'Evaluate current ROI measurement approach',
      'Identify key value drivers in your business'
    ],
    phase2: [
      'Implement revenue attribution modeling',
      'Connect HubSpot metrics to financial outcomes'
    ],
    phase3: [
      'Develop ROI optimization strategies',
      'Create scaling plan for maximizing value'
    ]
  }
};

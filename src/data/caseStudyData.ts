
export interface CaseStudyData {
  title: string;
  industry: string;
  revenue: string;
  timeline: string;
  metrics: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string }[];
  };
  problems: string[];
  solutions: string[];
  resultsTimeline: {
    month: string;
    title: string;
    description: string;
    metric: string;
  }[];
}

export const caseStudyDataMap: Record<string, CaseStudyData> = {
  'audio-visual-equipment-wholesaler': {
    title: 'B2B Electronics Distribution',
    industry: 'Manufacturing & Distribution',
    revenue: '$20M+ Annual Revenue',
    timeline: '6-Month Engagement',
    metrics: {
      primary: { value: '47%', label: 'Pipeline Growth' },
      secondary: [
        { value: '15%', label: 'Order Size Increase' },
        { value: '1 Week', label: 'Cycle Reduction' },
        { value: '100%', label: 'User Adoption' }
      ]
    },
    problems: [
      'Sales operations lacked clear reporting and visibility',
      'Manual pricing updates were error-prone and slow',
      'Inconsistent HubSpot adoption across teams',
      'Poor data quality led to ineffective campaigns',
      'Thousands of duplicate records skewed analytics'
    ],
    solutions: [
      'Unified HubSpot implementation with real-time dashboards',
      'Automated pricing management with DCKap integration', 
      'Comprehensive 1:1 training achieving 100% adoption',
      'Clean, reliable database with accurate pipeline tracking',
      'Eliminated duplicate records and established data hygiene'
    ],
    resultsTimeline: [
      {
        month: 'Month 1-2',
        title: 'Data Foundation',
        description: 'Audit and cleanse contact, company, and deal data',
        metric: 'Data accuracy improved 85%'
      },
      {
        month: 'Month 3-4', 
        title: 'System Optimization',
        description: 'Implement automated workflows and reporting',
        metric: 'Pipeline visibility increased 100%'
      },
      {
        month: 'Month 5-6',
        title: 'User Training & Adoption',
        description: '20 personalized training sessions completed',
        metric: 'User adoption reached 100%'
      },
      {
        month: 'Month 6+',
        title: 'Results & Growth',
        description: 'Sustained pipeline growth and efficiency gains',
        metric: 'Pipeline growth reached 47%'
      }
    ]
  },

  'multi-national-specialty-insurance': {
    title: 'Specialty Insurance Provider',
    industry: 'Financial Services',
    revenue: 'Multi-National Operations',
    timeline: '12-Month Engagement',
    metrics: {
      primary: { value: '100%', label: 'User Adoption' },
      secondary: [
        { value: '85%', label: 'Process Efficiency' },
        { value: '12 months', label: 'ROI Timeline' },
        { value: '50%', label: 'Report Automation' }
      ]
    },
    problems: [
      'Sales team relied on spreadsheets for deal management',
      'Limited sales visibility hindering performance evaluation',
      'Inconsistent HubSpot adoption across departments',
      'Data disorganization with contact and company issues',
      'Unmanaged sales practices creating compliance risks'
    ],
    solutions: [
      'Complete HubSpot Sales Hub implementation',
      'Real-time dashboards for performance monitoring',
      'Comprehensive user training eliminating offline tools',
      'Clean, organized database with proper associations',
      'Automated workflows and compliance-friendly processes'
    ],
    resultsTimeline: [
      {
        month: 'Month 1-3',
        title: 'Platform Restart',
        description: 'Complete HubSpot implementation from ground up',
        metric: 'System functionality restored 100%'
      },
      {
        month: 'Month 4-6',
        title: 'Data Migration', 
        description: 'Migrated all spreadsheet activities to HubSpot',
        metric: 'Manual processes reduced 75%'
      },
      {
        month: 'Month 7-9',
        title: 'Training & Adoption',
        description: 'Achieved 100% user adoption across all teams',
        metric: 'User adoption reached 100%'
      },
      {
        month: 'Month 10-12',
        title: 'Optimization & Scale',
        description: 'Advanced reporting and automated workflows',
        metric: 'Process efficiency improved 85%'
      }
    ]
  },

  'saas-healthcare-achieves-remarkable-insights': {
    title: 'Healthcare SaaS Platform',
    industry: 'Technology • Healthcare',
    revenue: 'Specialized Medical SaaS',
    timeline: '9-Month Engagement',
    metrics: {
      primary: { value: '20+', label: 'KPI Dashboards' },
      secondary: [
        { value: '65%', label: 'Lead Quality Focus' },
        { value: '40%', label: 'Journey Visibility' },
        { value: '3x', label: 'Data-Driven Decisions' }
      ]
    },
    problems: [
      'Unclear lead progression and customer journey tracking',
      'Inability to measure lead quality and conversion metrics',
      'Limited visibility into sales activities and deal progression',
      'Data hygiene issues with missing contact information',
      'Manual processes for contract renewals and revenue tracking'
    ],
    solutions: [
      'Comprehensive reporting suite with 20+ dashboards',
      'Enhanced lead quality focus and progression metrics',
      'Real-time visibility into customer journey stages',
      'Automated data hygiene processes and validation',
      'Integrated contract renewal monitoring and revenue tracking'
    ],
    resultsTimeline: [
      {
        month: 'Month 1-2',
        title: 'Requirements Analysis',
        description: 'Comprehensive business analysis and KPI definition',
        metric: 'Business requirements documented 100%'
      },
      {
        month: 'Month 3-5',
        title: 'Dashboard Development',
        description: 'Built 20+ custom dashboards for lead progression',
        metric: '20+ dashboards implemented'
      },
      {
        month: 'Month 6-7',
        title: 'Data Quality Systems',
        description: 'Implemented data hygiene and validation processes',
        metric: 'Data quality improved 80%'
      },
      {
        month: 'Month 8-9',
        title: 'Integration & Optimization',
        description: 'Connected third-party tools and payment systems',
        metric: 'Lead quality focus increased 65%'
      }
    ]
  },

  'upscale-home-improvement-goods-manufacturer': {
    title: 'Home Improvement Manufacturing',
    industry: 'Manufacturing • Premium Products',
    revenue: 'Decades-Old Manufacturer',
    timeline: '15-Month Engagement',
    metrics: {
      primary: { value: 'Complete', label: 'Digital Transformation' },
      secondary: [
        { value: '100%', label: 'Form Integration' },
        { value: '95%', label: 'Process Automation' },
        { value: '80%', label: 'Efficiency Gain' }
      ]
    },
    problems: [
      'Website forms not connected to HubSpot system',
      'Hundreds of leads assigned to departed employees',
      'Manual territory assignment causing delays',
      'Outdated landing pages and notification systems',
      'Offline catalog system preventing lead capture'
    ],
    solutions: [
      'Complete HubSpot form integration across all touchpoints',
      'Automated territory mapping based on ZIP codes',
      'Modern lead assignment and notification workflows',
      'Updated landing pages with proper lead tracking',
      'Integrated digital catalog with lead registration'
    ],
    resultsTimeline: [
      {
        month: 'Month 1-3',
        title: 'Emergency Fixes',
        description: 'Connected forms and rescued trapped leads',
        metric: 'Lead flow restored immediately'
      },
      {
        month: 'Month 4-7',
        title: 'System Overhaul',
        description: 'Rebuilt territory mapping and assignment workflows',
        metric: 'Assignment accuracy improved 100%'
      },
      {
        month: 'Month 8-12',
        title: 'Marketing Automation',
        description: 'Implemented event campaigns and SMS integration',
        metric: 'Campaign efficiency increased 90%'
      },
      {
        month: 'Month 13-15',
        title: 'Digital Catalog',
        description: 'Integrated catalog system with lead registration',
        metric: 'Complete digital transformation achieved'
      }
    ]
  }
};

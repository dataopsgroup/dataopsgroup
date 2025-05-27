
import { CaseStudyData } from '@/types/caseStudy';

export const multiNationalSpecialtyInsurance: CaseStudyData = {
  title: 'Specialty Insurance Provider',
  industry: 'Financial Services',
  revenue: '$1B+ Annual Revenue',
  timeline: '6-Month Engagement',
  metrics: {
    primary: { value: '100%', label: 'User Adoption' },
    secondary: [
      { value: '85%', label: 'Process Efficiency' },
      { value: '6 months', label: 'Implementation' },
      { value: '90%', label: 'Report Automation' }
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
};


import { CaseStudyData } from '@/types/caseStudy';

export const audioVisualEquipmentWholesaler: CaseStudyData = {
  title: 'B2B Electronics Distribution',
  industry: 'Manufacturing & Distribution',
  revenue: '$100M Annual Revenue',
  timeline: '6-Month Implementation + Ongoing Partnership',
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
      month: 'Month 7-12',
      title: 'Optimization & Expansion',
      description: 'Advanced automation and territory expansion features',
      metric: 'Process efficiency improved 65%'
    },
    {
      month: 'Month 13+',
      title: 'Strategic Partnership',
      description: 'Ongoing optimization and strategic growth initiatives',
      metric: 'Sustained 47% pipeline growth maintained'
    }
  ]
};

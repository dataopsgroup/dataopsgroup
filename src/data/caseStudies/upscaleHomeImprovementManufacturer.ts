
import { CaseStudyData } from '@/types/caseStudy';

export const upscaleHomeImprovementManufacturer: CaseStudyData = {
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
};

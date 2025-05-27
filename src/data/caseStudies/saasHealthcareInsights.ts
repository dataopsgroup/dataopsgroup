
import { CaseStudyData } from '@/types/caseStudy';

export const saasHealthcareInsights: CaseStudyData = {
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
};

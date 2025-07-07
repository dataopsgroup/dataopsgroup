import { NavItem, SubNavItem } from '@/types/navigation';

// Services dropdown items
export const navServices: SubNavItem[] = [
  { 
    name: 'All Services', 
    href: '/services'
  },
  { 
    name: 'Analytics & BI', 
    href: '/services/analytics-bi'
  },
  { 
    name: 'DataOps Implementation', 
    href: '/services/dataops-implementation'
  },
  { 
    name: 'HubSpot Training & Implementation', 
    href: '/services/team-training'
  },
  { 
    name: 'Marketing Operations & RevOps', 
    href: '/services/marketing-operations-revops'
  },
  { 
    name: 'PE Value Creation Program', 
    href: '/pe-value-creation-program'
  },
  // Removed other services that don't have route definitions in App.tsx
];

// Guides dropdown items 
export const guidesItems: SubNavItem[] = [
  { 
    name: 'How to Hire a HubSpot Expert in 2025', 
    href: '/guides/hubspot-expert' 
  },
  { 
    name: 'HubSpot for Private Equity', 
    href: '/guides/hubspot-private-equity' 
  },
  { 
    name: 'Complete HubSpot Guide for Private Equity', 
    href: '/guides/complete-hubspot-guide-for-private-equity' 
  }
];

// ROI Assessment Tools submenu
export const roiAssessmentItems: SubNavItem[] = [
  { 
    name: 'HubSpot Assessment', 
    href: '/data-operations-assessment'
  },
  { 
    name: 'Bad Data Cost Calculator', 
    href: '/bad-data-cost-calculator'
  },
  { 
    name: 'RevOps ROI Calculator', 
    href: '/revops-roi-calculator'
  }
];

// Insights dropdown items - updated with ROI Assessment Tools grouping
export const insightsItems: SubNavItem[] = [
  { name: 'Blog', href: '/insights' },
  { name: 'Case Studies', href: '/case-studies' },
  { 
    name: 'How to Hire a HubSpot Expert in 2025', 
    href: '/guides/hubspot-expert' 
  },
  { 
    name: 'HubSpot for Private Equity', 
    href: '/guides/hubspot-private-equity' 
  },
  { 
    name: 'Complete HubSpot Guide for Private Equity', 
    href: '/guides/complete-hubspot-guide-for-private-equity' 
  },
  { 
    name: 'ROI Assessment Tools',
    isDropdown: true,
    items: roiAssessmentItems
  }
];

// Industry categories - keeping the definition for potential future use
export const industryItems: SubNavItem[] = [
  { name: 'Finance & Banking', href: '/case-studies' },
  { name: 'Healthcare', href: '/case-studies' },
  { name: 'Manufacturing', href: '/case-studies' },
  { name: 'Retail & E-commerce', href: '/case-studies' },
  { name: 'Technology', href: '/case-studies' },
  { name: 'Insurance', href: '/case-studies' },
  { name: 'Logistics', href: '/case-studies' },
  { name: 'Energy & Utilities', href: '/case-studies' },
];

// Main navigation items - removed Industries item
export const mainNavItems: NavItem[] = [
  { 
    name: 'Services', 
    isDropdown: true,
    items: navServices
  },
  { name: 'About', href: '/about' },
  { name: 'Approach', href: '/approach' },
  { 
    name: 'Insights', 
    isDropdown: true,
    items: insightsItems
  },
];

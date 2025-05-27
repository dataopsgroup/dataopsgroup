import { NavItem, SubNavItem } from '@/types/navigation';

// Services dropdown items
export const navServices: SubNavItem[] = [
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
  // Removed other services that don't have route definitions in App.tsx
];

// Guides dropdown items 
export const guidesItems: SubNavItem[] = [
  { 
    name: 'How to Hire a HubSpot Expert in 2025', 
    href: '/how-to-hire-a-hubspot-expert-in-2025' 
  }
];

// Insights dropdown items - removed book link, added assessment
export const insightsItems: SubNavItem[] = [
  { name: 'Blog', href: '/insights' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Guides', isDropdown: true, items: guidesItems },
  { 
    name: 'HubSpot Assessment', 
    href: '/assessment'
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

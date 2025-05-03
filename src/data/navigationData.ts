
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

// Insights dropdown items
export const insightsItems: SubNavItem[] = [
  { name: 'Blog', href: '/insights' },
  { 
    name: 'Buy the Book', 
    href: '/book', 
    icon: 'book' // Using a string identifier instead of JSX
  }
];

// Industry categories
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

// Main navigation items
export const mainNavItems: NavItem[] = [
  { 
    name: 'Services', 
    isDropdown: true,
    items: navServices
  },
  { name: 'About', href: '/about' },
  { name: 'Approach', href: '/approach' },
  { 
    name: 'Industries', 
    isDropdown: true,
    items: industryItems
  },
  { 
    name: 'Insights', 
    isDropdown: true,
    items: insightsItems
  },
];

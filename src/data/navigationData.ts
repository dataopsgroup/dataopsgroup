
import { NavItem, SubNavItem } from '@/types/navigation';

// Main navigation items with mega-menu structure
export const mainNavItems: NavItem[] = [
  {
    title: "Solutions",
    href: "#",
    children: [
      {
        title: "Analytics & BI",
        icon: "LineChart",
        description: "Transform your data into actionable insights with advanced analytics and business intelligence",
        href: "/services/analytics-bi",
      },
      {
        title: "DataOps Implementation",
        icon: "Database",
        description: "Streamline your data operations with expert implementation and optimization services",
        href: "/services/dataops-implementation",
      },
      {
        title: "Team Training",
        icon: "GraduationCap",
        description: "Empower your team with comprehensive HubSpot training and skill development",
        href: "/services/team-training",
      },
      {
        title: "Marketing Operations & RevOps",
        icon: "Workflow",
        description: "Optimize your revenue operations and marketing processes for maximum efficiency",
        href: "/services/marketing-operations-revops",
      }
    ]
  },
  {
    title: "Resources",
    href: "#",
    children: [
      {
        title: "Case Studies",
        icon: "FileText",
        description: "Real-world examples of HubSpot transformations and results",
        href: "/case-studies",
      },
      {
        title: "Assessment",
        icon: "Calculator",
        description: "Evaluate your current HubSpot setup and identify improvement opportunities",
        href: "/hubspot-assessment",
        badge: "FREE"
      },
      {
        title: "Insights",
        icon: "Newspaper",
        description: "Expert insights, strategies and tips for HubSpot success",
        href: "/insights",
      }
    ]
  },
  {
    title: "About",
    href: "/about",
  },
];

// Legacy exports for backward compatibility (can be removed later)
export const navServices: SubNavItem[] = [
  {
    title: "Analytics & BI",
    href: "/services/analytics-bi",
  },
  {
    title: "DataOps Implementation", 
    href: "/services/dataops-implementation",
  },
  {
    title: "Team Training",
    href: "/services/team-training",
  },
  {
    title: "Marketing Operations & RevOps",
    href: "/services/marketing-operations-revops",
  }
];
export const guidesItems: SubNavItem[] = [];
export const insightsItems: SubNavItem[] = [];
export const industryItems: SubNavItem[] = [];

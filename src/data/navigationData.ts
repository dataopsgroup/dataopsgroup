
import { NavItem, SubNavItem } from '@/types/navigation';

// Main navigation items with mega-menu structure
export const mainNavItems: NavItem[] = [
  {
    title: "Solutions",
    href: "#",
    children: [
      {
        title: "HubSpot Rescue",
        icon: "LifeBuoy",
        description: "Fix broken implementations and optimize your existing HubSpot setup",
        href: "/solutions/hubspot-rescue",
      },
      {
        title: "HubSpot Implementation",
        icon: "Rocket",
        description: "Start your HubSpot journey right with expert-led implementation",
        href: "/solutions/hubspot-implementation",
      },
      {
        title: "HubSpot Integration",
        icon: "Connection",
        description: "Connect your tech stack for seamless data flow and automation",
        href: "/solutions/hubspot-integration",
      },
      {
        title: "HubSpot Strategy",
        icon: "LineChart",
        description: "Align your HubSpot setup with your revenue and growth goals",
        href: "/solutions/hubspot-strategy",
      }
    ]
  },
  {
    title: "Services",
    href: "#",
    children: [
      {
        title: "CRM & Pipeline Management",
        icon: "FolderKanban",
        description: "Optimize your sales process with structured pipelines and automation",
        href: "/services/crm-pipeline-management",
      },
      {
        title: "Workflow Automation",
        icon: "Workflow",
        description: "Automate repetitive tasks and free your team to focus on growth",
        href: "/services/workflow-automation",
      },
      {
        title: "Data Migration & Integration",
        icon: "Database",
        description: "Seamlessly transfer data and connect systems for unified operations",
        href: "/services/data-migration-integration",
      },
      {
        title: "Training & Support",
        icon: "GraduationCap", 
        description: "Empower your team with expert knowledge and ongoing assistance",
        href: "/services/training-support",
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
        href: "/resources/case-studies",
      },
      {
        title: "ROI Calculator",
        icon: "Calculator",
        description: "Estimate your potential return on HubSpot investment",
        href: "/resources/roi-calculator",
        badge: "NEW"
      },
      {
        title: "Blog",
        icon: "Newspaper",
        description: "Expert insights, strategies and tips for HubSpot success",
        href: "/blog",
      },
      {
        title: "HubSpot Resources",
        icon: "BookOpen",
        description: "Guides, templates and tools to maximize your HubSpot experience",
        href: "/resources/hubspot-resources",
      }
    ]
  },
  {
    title: "About",
    href: "/about",
  },
];

// Legacy exports for backward compatibility (can be removed later)
export const navServices: SubNavItem[] = [];
export const guidesItems: SubNavItem[] = [];
export const insightsItems: SubNavItem[] = [];
export const industryItems: SubNavItem[] = [];

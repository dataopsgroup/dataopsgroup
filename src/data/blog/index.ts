
import { BlogPost } from '@/types/blog';

// Import all blog posts
import { howToHireAHubSpotConsultant } from './posts/how-to-hire-a-hubspot-consultant';
import { whatHubSpotDoesForMarketing } from './posts/what-hubspot-does-for-marketing';
import { hiringAndWorkingWithAHubSpotConsultant } from './posts/hiring-and-working-with-a-hubspot-consultant';
import { tipsForSmartWorkflows } from './posts/3-tips-for-smart-workflows';
import { marketingDataManagement } from './posts/marketing-data-management';
import { upscaleHomeImprovementGoodsManufacturer } from './posts/upscale-home-improvement-goods-manufacturer';

// Export all blog posts as a single array
export const blogPosts: BlogPost[] = [
  howToHireAHubSpotConsultant,
  whatHubSpotDoesForMarketing,
  hiringAndWorkingWithAHubSpotConsultant,
  tipsForSmartWorkflows,
  marketingDataManagement,
  upscaleHomeImprovementGoodsManufacturer,
];

// Export individual posts for direct access if needed
export {
  howToHireAHubSpotConsultant,
  whatHubSpotDoesForMarketing,
  hiringAndWorkingWithAHubSpotConsultant,
  tipsForSmartWorkflows,
  marketingDataManagement,
  upscaleHomeImprovementGoodsManufacturer,
};

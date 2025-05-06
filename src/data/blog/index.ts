
import { BlogPost } from '@/types/blog';

// Import all blog posts
import { howToHireAHubSpotConsultant } from './posts/how-to-hire-a-hubspot-consultant';
import { whatHubSpotDoesForMarketing } from './posts/what-hubspot-does-for-marketing';
import { hiringAndWorkingWithAHubSpotConsultant } from './posts/hiring-and-working-with-a-hubspot-consultant';
import { tipsForSmartWorkflows } from './posts/3-tips-for-smart-workflows';
import { marketingDataManagement } from './posts/marketing-data-management';
import { upscaleHomeImprovementGoodsManufacturer } from './posts/upscale-home-improvement-goods-manufacturer';
import { createProLevelHubSpotLeadScoreModel } from './posts/create-pro-level-hubspot-lead-score-model';
import { marketingLeadersDataQualityCrisis } from './posts/marketing-leaders-data-quality-crisis';
import { trueCostOfBadData } from './posts/true-cost-of-bad-data';

// Export all blog posts as a single array
export const blogPosts: BlogPost[] = [
  trueCostOfBadData, // Add the new blog post at the top for recency
  marketingLeadersDataQualityCrisis,
  createProLevelHubSpotLeadScoreModel,
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
  createProLevelHubSpotLeadScoreModel,
  marketingLeadersDataQualityCrisis,
  trueCostOfBadData,
};

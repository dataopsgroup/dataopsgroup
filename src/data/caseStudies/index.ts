
import { CaseStudyData } from '@/types/caseStudy';
import { audioVisualEquipmentWholesaler } from './audioVisualEquipmentWholesaler';
import { multiNationalSpecialtyInsurance } from './multiNationalSpecialtyInsurance';
import { saasHealthcareInsights } from './saasHealthcareInsights';
import { upscaleHomeImprovementManufacturer } from './upscaleHomeImprovementManufacturer';

export const caseStudyDataMap: Record<string, CaseStudyData> = {
  'audio-visual-equipment-wholesaler': audioVisualEquipmentWholesaler,
  'multi-national-specialty-insurance': multiNationalSpecialtyInsurance,
  'saas-healthcare-achieves-remarkable-insights': saasHealthcareInsights,
  'upscale-home-improvement-goods-manufacturer': upscaleHomeImprovementManufacturer
};

export type { CaseStudyData };

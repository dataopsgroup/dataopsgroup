
import { caseStudyDataMap, CaseStudyData } from '@/data/caseStudies';

export const useCaseStudyData = (postId: string): CaseStudyData | null => {
  return caseStudyDataMap[postId] || null;
};


import { caseStudyDataMap, CaseStudyData } from '@/data/caseStudyData';

export const useCaseStudyData = (postId: string): CaseStudyData | null => {
  return caseStudyDataMap[postId] || null;
};

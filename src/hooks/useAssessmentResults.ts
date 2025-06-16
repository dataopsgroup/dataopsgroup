
import { useState, useEffect, useMemo } from 'react';
import { recommendationsData, rescuePlanActionsData } from '../data/assessment/quizData';

interface PriorityRecommendation {
  index: number;
  section: string;
  name: string;
  title: string;
  text: string;
}

interface RescuePlan {
  phase1: string[];
  phase2: string[];
  phase3: string[];
}

export const useAssessmentResults = (scores: Record<string, number>) => {
  const [priorities, setPriorities] = useState<PriorityRecommendation[]>([]);
  const [rescuePlan, setRescuePlan] = useState<RescuePlan>({ phase1: [], phase2: [], phase3: [] });
  
  // Memoize overall score calculation
  const overallScore = useMemo(() => {
    return Object.values(scores).reduce((acc, curr) => acc + curr, 0);
  }, [scores]);

  // Memoize score label calculation
  const scoreLabel = useMemo(() => {
    if (overallScore < 50) return 'Underperforming';
    if (overallScore < 85) return 'Developing';
    if (overallScore < 105) return 'Effective';
    return 'Optimized';
  }, [overallScore]);

  // Memoize priority recommendations calculation
  const priorityRecommendations = useMemo(() => {
    if (Object.keys(scores).length === 0) return [];
    
    // Sort sections by score (lowest first) and get top 3 priorities
    const sortedSections = Object.entries(scores)
      .sort(([, a], [, b]) => a - b)
      .slice(0, 3)
      .map(([section]) => section);
    
    return recommendationsData
      .filter(rec => sortedSections.includes(rec.section))
      .map((rec, index) => ({...rec, index: index + 1}));
  }, [scores]);

  // Memoize rescue plan calculation
  const rescuePlanActions = useMemo(() => {
    if (priorityRecommendations.length === 0) {
      return { phase1: [], phase2: [], phase3: [] };
    }
    
    const prioritySections = priorityRecommendations.map(p => p.section);
    
    // Use a more efficient approach to combine actions
    const combinedPlan = prioritySections.reduce((acc, section) => {
      const sectionActions = rescuePlanActionsData[section as keyof typeof rescuePlanActionsData];
      if (sectionActions) {
        acc.phase1.push(...sectionActions.phase1);
        acc.phase2.push(...sectionActions.phase2);
        acc.phase3.push(...sectionActions.phase3);
      }
      return acc;
    }, { phase1: [] as string[], phase2: [] as string[], phase3: [] as string[] });
    
    return combinedPlan;
  }, [priorityRecommendations]);

  // Only update state when memoized values actually change
  useEffect(() => {
    setPriorities(priorityRecommendations);
  }, [priorityRecommendations]);

  useEffect(() => {
    setRescuePlan(rescuePlanActions);
  }, [rescuePlanActions]);

  return { overallScore, scoreLabel, priorities, rescuePlan };
};

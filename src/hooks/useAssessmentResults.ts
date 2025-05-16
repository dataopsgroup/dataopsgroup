
import { useState, useEffect } from 'react';
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
  
  // Calculate the overall score
  const overallScore = Object.values(scores).reduce((acc, curr) => acc + curr, 0);

  // Calculate score label based on overall score
  const getScoreLabel = () => {
    if (overallScore < 50) return 'Underperforming';
    if (overallScore < 85) return 'Developing';
    if (overallScore < 105) return 'Effective';
    return 'Optimized';
  };

  useEffect(() => {
    // Get priority recommendations based on lowest section scores
    const getPriorityRecommendations = () => {
      // Sort sections by score (lowest first)
      const sortedSections = Object.entries(scores)
        .map(([section, score]) => ({ section, score }))
        .sort((a, b) => a.score - b.score)
        .map(item => item.section)
        .slice(0, 3); // Get top 3 priorities
      
      return recommendationsData
        .filter(rec => sortedSections.includes(rec.section))
        .map((rec, index) => ({...rec, index: index + 1}));
    };

    // Get rescue plan recommendations based on priority areas
    const getRescuePlanActions = () => {
      // Get the top priority areas
      const priorities = getPriorityRecommendations().map(p => p.section);
      
      // For each phase, include actions from priority areas
      return {
        phase1: priorities.flatMap(priority => rescuePlanActionsData[priority as keyof typeof rescuePlanActionsData].phase1),
        phase2: priorities.flatMap(priority => rescuePlanActionsData[priority as keyof typeof rescuePlanActionsData].phase2),
        phase3: priorities.flatMap(priority => rescuePlanActionsData[priority as keyof typeof rescuePlanActionsData].phase3)
      };
    };

    setPriorities(getPriorityRecommendations());
    setRescuePlan(getRescuePlanActions());
  }, [scores]);

  return { overallScore, scoreLabel: getScoreLabel(), priorities, rescuePlan };
};

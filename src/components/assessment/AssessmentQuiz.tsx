
import React, { useState } from 'react';
import AssessmentIntro from './AssessmentIntro';
import QuizSection from './QuizSection';
import QuizResults from './QuizResults';
import { useAssessmentResults } from '@/hooks/useAssessmentResults';

const AssessmentQuiz = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [scores, setScores] = useState<Record<string, number>>({});
  
  const { overallScore, scoreLabel, priorities, rescuePlan } = useAssessmentResults(scores);

  const startQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleQuizComplete = (finalScores: Record<string, number>) => {
    setScores(finalScores);
    setCurrentStep('results');
  };

  const handleEmailResults = () => {
    // Email functionality would be implemented here
    console.log('Email results requested');
  };

  const sectionTitles = [
    'Data Quality & Management',
    'Process Automation',
    'Team Adoption',
    'Performance Measurement',
    'Integration & Workflow'
  ];

  if (currentStep === 'intro') {
    return <AssessmentIntro startQuiz={startQuiz} />;
  }

  if (currentStep === 'quiz') {
    return (
      <QuizSection 
        onComplete={handleQuizComplete}
        sectionTitles={sectionTitles}
      />
    );
  }

  return (
    <QuizResults
      overallScore={overallScore}
      scores={scores}
      sectionTitles={sectionTitles}
      priorities={priorities}
      rescuePlan={rescuePlan}
      onEmailResults={handleEmailResults}
    />
  );
};

export default AssessmentQuiz;

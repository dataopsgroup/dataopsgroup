
import React, { useState } from 'react';
import AssessmentIntro from './AssessmentIntro';
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
    // For now, simulate completing the quiz with sample scores
    // In a real implementation, this would be the actual quiz component
    const sampleScores = {
      'data-quality': 15,
      'process-automation': 12,
      'team-adoption': 18,
      'performance-measurement': 10,
      'integration-workflow': 14
    };
    
    // Auto-complete for demo purposes
    React.useEffect(() => {
      const timer = setTimeout(() => {
        handleQuizComplete(sampleScores);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="p-6 md:p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-dataops-800">
            Completing Assessment...
          </h2>
          <p className="text-gray-600">
            Processing your responses and generating personalized recommendations.
          </p>
        </div>
      </div>
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

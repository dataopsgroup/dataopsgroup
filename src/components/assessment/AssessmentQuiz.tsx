
import React, { useState } from 'react';
import AssessmentIntro from './AssessmentIntro';
import QuizResults from './QuizResults';
import { useAssessmentResults } from '@/hooks/useAssessmentResults';
import { Loader2, CheckCircle } from 'lucide-react';

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
      }, 2000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center p-8">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-dataops-600 to-dataops-700 rounded-full flex items-center justify-center">
                <Loader2 className="h-8 w-8 text-white animate-spin" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Processing Your Assessment
              </h2>
              <p className="text-gray-600 mb-6">
                Analyzing your responses and generating personalized recommendations...
              </p>
            </div>
            
            <div className="space-y-3">
              {[
                'Evaluating data quality practices',
                'Analyzing automation workflows',
                'Calculating performance scores',
                'Generating improvement plan'
              ].map((step, index) => (
                <div key={index} className="flex items-center justify-start text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  {step}
                </div>
              ))}
            </div>
          </div>
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

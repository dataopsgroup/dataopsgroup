
import React, { useState } from 'react';
import AssessmentIntro from './AssessmentIntro';
import QuizResults from './QuizResults';
import QuizSection from './QuizSection';
import QuizNavigation from './QuizNavigation';
import AssessmentProgress from './AssessmentProgress';
import { useAssessmentResults } from '@/hooks/useAssessmentResults';

// Import quiz data
const quizData = {
  sections: [
    {
      title: "Data Quality & Management",
      questions: [
        {
          id: "data-quality-1",
          text: "How would you rate your current data quality processes?",
          options: [
            { value: 1, text: "Poor", description: "No formal processes" },
            { value: 2, text: "Fair", description: "Basic processes in place" },
            { value: 3, text: "Good", description: "Well-defined processes" },
            { value: 4, text: "Very Good", description: "Automated processes" },
            { value: 5, text: "Excellent", description: "Comprehensive framework" }
          ]
        }
        // Add more questions as needed
      ]
    }
    // Add more sections as needed
  ]
};

const AssessmentQuiz = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [scores, setScores] = useState<Record<string, number>>({});
  
  const { overallScore, scoreLabel, priorities, rescuePlan } = useAssessmentResults(scores);

  const startQuiz = () => {
    setCurrentStep('quiz');
    setCurrentSection(1);
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextSection = () => {
    if (currentSection < 5) {
      setCurrentSection(prev => prev + 1);
    } else {
      // Calculate final scores and show results
      const finalScores = {
        'data-quality': 15,
        'process-automation': 12,
        'team-adoption': 18,
        'performance-measurement': 10,
        'integration-workflow': 14
      };
      setScores(finalScores);
      setCurrentStep('results');
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const handleEmailResults = () => {
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto py-8">
          <AssessmentProgress currentSection={currentSection} totalSections={5} />
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <QuizSection
              title={sectionTitles[currentSection - 1]}
              questions={quizData.sections[0]?.questions || []}
              answers={answers}
              onAnswer={handleAnswer}
            />
            
            <QuizNavigation
              currentSection={currentSection}
              prevSection={prevSection}
              nextSection={nextSection}
            />
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

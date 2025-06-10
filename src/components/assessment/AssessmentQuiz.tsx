
import React, { useState } from 'react';
import AssessmentIntro from './AssessmentIntro';
import QuizResults from './QuizResults';
import QuizSection from './QuizSection';
import QuizNavigation from './QuizNavigation';
import AssessmentProgress from './AssessmentProgress';
import { useAssessmentResults } from '@/hooks/useAssessmentResults';
import { quizSections } from '@/data/assessment/quizData';

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

  const calculateSectionScore = (sectionId: number) => {
    const section = quizSections.find(s => s.id === sectionId);
    if (!section) return 0;
    
    let totalScore = 0;
    let questionCount = 0;
    
    section.questions.forEach(question => {
      const answer = answers[question.id];
      if (answer !== undefined) {
        totalScore += answer;
        questionCount++;
      }
    });
    
    return questionCount > 0 ? totalScore : 0;
  };

  const nextSection = () => {
    if (currentSection < quizSections.length) {
      setCurrentSection(prev => prev + 1);
    } else {
      // Calculate final scores for all sections
      const finalScores: Record<string, number> = {};
      
      quizSections.forEach(section => {
        const sectionKey = `section${section.id}`;
        finalScores[sectionKey] = calculateSectionScore(section.id);
      });
      
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

  const sectionTitles = quizSections.map(section => section.title);

  if (currentStep === 'intro') {
    return <AssessmentIntro startQuiz={startQuiz} />;
  }

  if (currentStep === 'quiz') {
    const currentQuizSection = quizSections.find(s => s.id === currentSection);
    
    if (!currentQuizSection) {
      return <div>Section not found</div>;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto py-8">
          <AssessmentProgress currentSection={currentSection} totalSections={quizSections.length} />
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <QuizSection
              title={currentQuizSection.title}
              questions={currentQuizSection.questions}
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

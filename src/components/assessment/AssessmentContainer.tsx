
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AssessmentIntro from './AssessmentIntro';
import AssessmentProgress from './AssessmentProgress';
import QuizSection from './QuizSection';
import QuizNavigation from './QuizNavigation';
import QuizResults from './QuizResults';
import { quizSections } from '@/data/assessment/quizData';
import { useAssessmentResults } from '@/hooks/useAssessmentResults';
import { useAssessmentState } from '@/hooks/useAssessmentState';

const AssessmentContainer = () => {
  const {
    currentSection,
    progress,
    scores,
    answers,
    startQuiz,
    nextSection,
    prevSection,
    handleAnswer
  } = useAssessmentState();

  // Use custom hook to calculate results data
  const { overallScore, scoreLabel, priorities, rescuePlan } = useAssessmentResults(scores);

  // Extract section titles for the results page
  const sectionTitles = quizSections.map(section => 
    section.title.replace(" Assessment", "")
  );

  return (
    <Card className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
      <CardContent className="p-0">
        {/* Quiz Intro */}
        {currentSection === 0 && (
          <AssessmentIntro startQuiz={startQuiz} />
        )}
        
        {/* Quiz Progress */}
        {currentSection >= 1 && currentSection <= 5 && (
          <AssessmentProgress progress={progress} currentSection={currentSection} />
        )}
        
        {/* Quiz Questions */}
        {currentSection >= 1 && currentSection <= 5 && (
          <QuizSection 
            title={quizSections[currentSection - 1]?.title}
            questions={quizSections[currentSection - 1]?.questions}
            answers={answers}
            onAnswer={handleAnswer}
          />
        )}
        
        {/* Quiz Results */}
        {currentSection === 6 && (
          <QuizResults
            overallScore={overallScore}
            scores={scores}
            sectionTitles={sectionTitles}
            priorities={priorities}
            rescuePlan={rescuePlan}
          />
        )}
        
        {/* Quiz Navigation */}
        {currentSection >= 1 && currentSection <= 5 && (
          <QuizNavigation 
            currentSection={currentSection}
            prevSection={prevSection}
            nextSection={nextSection}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default AssessmentContainer;

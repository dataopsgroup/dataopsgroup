
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetaHead from '@/components/seo/MetaHead';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import CTABanner from '@/components/CTABanner';

const HubSpotAssessment = () => {
  const [currentSection, setCurrentSection] = useState(0); // 0 = intro, 1-5 = sections, 6 = results
  const [progress, setProgress] = useState(20);
  const [scores, setScores] = useState<Record<string, number>>({
    section1: 0,
    section2: 0,
    section3: 0,
    section4: 0,
    section5: 0
  });
  const [answers, setAnswers] = useState<Record<string, number>>({});

  // Calculate the overall score
  const overallScore = Object.values(scores).reduce((acc, curr) => acc + curr, 0);

  // Calculate score label based on overall score
  const getScoreLabel = () => {
    if (overallScore < 50) return 'Underperforming';
    if (overallScore < 85) return 'Developing';
    if (overallScore < 105) return 'Effective';
    return 'Optimized';
  };

  // Calculate score color based on score
  const getScoreColor = (score: number, max = 125) => {
    const percentage = (score / max) * 100;
    if (percentage < 40) return 'border-red-500';
    if (percentage < 65) return 'border-orange-400';
    if (percentage < 85) return 'border-yellow-400';
    return 'border-green-500';
  };

  // Get section score color for section bars
  const getSectionBarColor = (score: number) => {
    const percentage = (score / 25) * 100;
    if (percentage < 40) return 'bg-red-500';
    if (percentage < 65) return 'bg-orange-400';
    if (percentage < 85) return 'bg-yellow-400';
    return 'bg-green-500';
  };

  // Get section score width for bar visualization
  const getSectionBarWidth = (score: number) => {
    return `${(score / 25) * 100}%`;
  };

  // Start the quiz
  const startQuiz = () => {
    setCurrentSection(1);
    setProgress(20);
  };

  // Go to next section
  const nextSection = () => {
    if (currentSection < 5) {
      setCurrentSection(currentSection + 1);
      setProgress((currentSection + 1) * 20);
    } else {
      // Calculate section scores
      calculateSectionScores();
      setCurrentSection(6); // Show results
    }
  };

  // Go to previous section
  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
      setProgress((currentSection - 1) * 20);
    }
  };

  // Update answers when a question is answered
  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  // Calculate section scores
  const calculateSectionScores = () => {
    const newScores = { ...scores };
    
    // Calculate section scores based on answers
    for (const [questionId, value] of Object.entries(answers)) {
      const sectionId = questionId.split('.')[0];
      newScores[`section${sectionId}`] = (newScores[`section${sectionId}`] || 0) + value;
    }
    
    setScores(newScores);
  };

  // Open email modal
  const emailResults = () => {
    const modal = document.getElementById('email-modal');
    if (modal) modal.style.display = 'block';
  };

  // Close email modal
  const closeModal = () => {
    const modal = document.getElementById('email-modal');
    if (modal) modal.style.display = 'none';
  };

  // Send results via email
  const sendResults = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;
    const company = document.getElementById('company') as HTMLInputElement;
    const consent = document.getElementById('consent') as HTMLInputElement;
    
    if (email && name && company && consent && email.value && name.value && company.value && consent.checked) {
      // Here you would typically send the data to your backend
      alert('Thank you! Your results have been sent to your email.');
      closeModal();
    } else {
      alert('Please fill out all fields and accept the terms.');
    }
  };

  // Get priority recommendations based on lowest section scores
  const getPriorityRecommendations = () => {
    const recommendations = [
      {
        section: 'section1',
        name: 'User Adoption',
        title: 'Improve User Adoption',
        text: 'Focus on training and getting stakeholder buy-in to increase regular system usage.'
      },
      {
        section: 'section2',
        name: 'Data Quality',
        title: 'Enhance Data Quality',
        text: 'Implement data cleaning protocols and establish governance rules to maintain clean records.'
      },
      {
        section: 'section3',
        name: 'Process Integration',
        title: 'Streamline Process Integration',
        text: 'Align HubSpot workflows with your business processes and increase automation.'
      },
      {
        section: 'section4',
        name: 'Reporting & Analytics',
        title: 'Improve Reporting & Analytics',
        text: 'Develop dashboards that align with business KPIs and encourage data-driven decisions.'
      },
      {
        section: 'section5',
        name: 'ROI & Value',
        title: 'Maximize ROI & Value',
        text: 'Focus on measuring and optimizing the business impact of your HubSpot implementation.'
      }
    ];
    
    // Sort sections by score (lowest first)
    const sortedSections = Object.entries(scores)
      .map(([section, score]) => ({ section, score }))
      .sort((a, b) => a.score - b.score)
      .map(item => item.section)
      .slice(0, 3); // Get top 3 priorities
    
    return recommendations
      .filter(rec => sortedSections.includes(rec.section))
      .map((rec, index) => ({...rec, index: index + 1}));
  };

  // Get rescue plan recommendations based on priority areas
  const getRescuePlanActions = () => {
    const allActions = {
      section1: {
        phase1: [
          'Conduct stakeholder interviews to identify adoption barriers',
          'Develop role-specific training materials'
        ],
        phase2: [
          'Implement user feedback mechanisms',
          'Train departmental champions'
        ],
        phase3: [
          'Create ongoing education program',
          'Measure and celebrate adoption milestones'
        ]
      },
      section2: {
        phase1: [
          'Perform data quality audit',
          'Establish data governance standards'
        ],
        phase2: [
          'Implement duplicate management solution',
          'Enforce required fields and validation'
        ],
        phase3: [
          'Automate data enrichment',
          'Create ongoing data maintenance protocols'
        ]
      },
      section3: {
        phase1: [
          'Map current business processes',
          'Identify integration requirements'
        ],
        phase2: [
          'Build automated workflows for key processes',
          'Connect department handoffs'
        ],
        phase3: [
          'Integrate with other business systems',
          'Optimize customer journey tracking'
        ]
      },
      section4: {
        phase1: [
          'Define reporting objectives and KPIs',
          'Create baseline performance dashboards'
        ],
        phase2: [
          'Develop custom reports for key stakeholders',
          'Implement regular data review meetings'
        ],
        phase3: [
          'Build predictive analytics capabilities',
          'Create executive-level visualizations'
        ]
      },
      section5: {
        phase1: [
          'Evaluate current ROI measurement approach',
          'Identify key value drivers in your business'
        ],
        phase2: [
          'Implement revenue attribution modeling',
          'Connect HubSpot metrics to financial outcomes'
        ],
        phase3: [
          'Develop ROI optimization strategies',
          'Create scaling plan for maximizing value'
        ]
      }
    };

    // Get the top priority areas
    const priorities = getPriorityRecommendations().map(p => p.section);
    
    // For each phase, include actions from priority areas
    return {
      phase1: priorities.flatMap(priority => allActions[priority as keyof typeof allActions].phase1),
      phase2: priorities.flatMap(priority => allActions[priority as keyof typeof allActions].phase2),
      phase3: priorities.flatMap(priority => allActions[priority as keyof typeof allActions].phase3)
    };
  };

  // Quiz data
  const quizSections = [
    {
      id: 1,
      title: "User Adoption Assessment",
      questions: [
        {
          id: "1.1",
          text: "What percentage of your team regularly uses HubSpot for their core responsibilities?",
          options: [
            { value: 1, text: "Less than 20%", description: "Very low adoption" },
            { value: 2, text: "20-40%", description: "Low adoption" },
            { value: 3, text: "41-60%", description: "Moderate adoption" },
            { value: 4, text: "61-80%", description: "Good adoption" },
            { value: 5, text: "More than 80%", description: "Excellent adoption" }
          ]
        },
        {
          id: "1.2",
          text: "What percentage of your licensed HubSpot capabilities are actively being used?",
          options: [
            { value: 1, text: "Less than 20%", description: "Very limited usage" },
            { value: 2, text: "20-40%", description: "Basic usage only" },
            { value: 3, text: "41-60%", description: "Moderate usage" },
            { value: 4, text: "61-80%", description: "Good utilization" },
            { value: 5, text: "More than 80%", description: "Full utilization" }
          ]
        },
        {
          id: "1.3",
          text: "How would your team rate the value HubSpot provides to their daily work?",
          options: [
            { value: 1, text: "Creates more work", description: "Actively frustrating" },
            { value: 2, text: "Minimal value", description: "Not worth the effort" },
            { value: 3, text: "Some useful features", description: "Mixed perception" },
            { value: 4, text: "Valuable but imperfect", description: "Generally positive" },
            { value: 5, text: "Essential tool", description: "Highly valued" }
          ]
        },
        {
          id: "1.4",
          text: "How effective was your team's HubSpot training?",
          options: [
            { value: 1, text: "No formal training", description: "Self-taught only" },
            { value: 2, text: "Basic generic training", description: "Minimal guidance" },
            { value: 3, text: "Role-based but limited", description: "Some tailored content" },
            { value: 4, text: "Comprehensive training", description: "Well-designed program" },
            { value: 5, text: "Ongoing education", description: "Continuous improvement" }
          ]
        },
        {
          id: "1.5",
          text: "How much resistance exists toward using HubSpot?",
          options: [
            { value: 1, text: "Active resistance", description: "Deliberate workarounds" },
            { value: 2, text: "Significant grumbling", description: "Reluctant usage" },
            { value: 3, text: "Neutral attitude", description: "Used when required" },
            { value: 4, text: "Generally positive", description: "Occasional resistance" },
            { value: 5, text: "Enthusiastic adoption", description: "Team champions system" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Data Quality Assessment",
      questions: [
        {
          id: "2.1",
          text: "What is your estimated duplicate contact/company rate?",
          options: [
            { value: 1, text: "More than 20% duplicates", description: "Severely compromised" },
            { value: 2, text: "15-20% duplicates", description: "Highly problematic" },
            { value: 3, text: "10-15% duplicates", description: "Moderate issues" },
            { value: 4, text: "5-10% duplicates", description: "Minor issues" },
            { value: 5, text: "Less than 5% duplicates", description: "Well-managed" }
          ]
        },
        {
          id: "2.2",
          text: "What percentage of key fields are complete across your records?",
          options: [
            { value: 1, text: "Less than 40% complete", description: "Severely incomplete" },
            { value: 2, text: "40-60% complete", description: "Major gaps" },
            { value: 3, text: "61-75% complete", description: "Moderate completion" },
            { value: 4, text: "76-90% complete", description: "Good completion" },
            { value: 5, text: "More than 90% complete", description: "Excellent completion" }
          ]
        },
        {
          id: "2.3",
          text: "How often is your data reviewed and updated?",
          options: [
            { value: 1, text: "Rarely or never", description: "No maintenance" },
            { value: 2, text: "Annually", description: "Infrequent" },
            { value: 3, text: "Quarterly", description: "Periodic review" },
            { value: 4, text: "Monthly", description: "Regular maintenance" },
            { value: 5, text: "Continuous automation", description: "Systematic approach" }
          ]
        },
        {
          id: "2.4",
          text: "How structured is your approach to data management?",
          options: [
            { value: 1, text: "No defined processes", description: "Ad hoc approach" },
            { value: 2, text: "Some rules, inconsistent", description: "Informal systems" },
            { value: 3, text: "Documented standards", description: "Limited enforcement" },
            { value: 4, text: "Clear standards", description: "Regular enforcement" },
            { value: 5, text: "Comprehensive governance", description: "Formal program" }
          ]
        },
        {
          id: "2.5",
          text: "How much does your team trust HubSpot as the source of truth?",
          options: [
            { value: 1, text: "Actively distrust data", description: "Avoid using system data" },
            { value: 2, text: "Low trust", description: "Frequent verification" },
            { value: 3, text: "Moderate trust", description: "Some verification" },
            { value: 4, text: "Generally trusted", description: "Occasional questions" },
            { value: 5, text: "Complete trust", description: "Single source of truth" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Process Integration Assessment",
      questions: [
        {
          id: "3.1",
          text: "How well does HubSpot align with your team's actual processes?",
          options: [
            { value: 1, text: "Forces unnatural processes", description: "Requires major changes" },
            { value: 2, text: "Significant mismatch", description: "Many workarounds needed" },
            { value: 3, text: "Partial alignment", description: "Some friction points" },
            { value: 4, text: "Good alignment", description: "Minor adjustments needed" },
            { value: 5, text: "Seamless support", description: "Perfectly aligned" }
          ]
        },
        {
          id: "3.2",
          text: "How effectively are you using automation to eliminate manual tasks?",
          options: [
            { value: 1, text: "Minimal automation", description: "Mostly manual processes" },
            { value: 2, text: "Basic automation only", description: "Simple tasks automated" },
            { value: 3, text: "Moderate automation", description: "Key processes automated" },
            { value: 4, text: "Extensive automation", description: "Most tasks automated" },
            { value: 5, text: "Comprehensive automation", description: "All possible automation" }
          ]
        },
        {
          id: "3.3",
          text: "How effectively does HubSpot connect marketing, sales, and service?",
          options: [
            { value: 1, text: "Completely siloed", description: "No department connection" },
            { value: 2, text: "Limited sharing", description: "Minimal cross-team visibility" },
            { value: 3, text: "Some shared processes", description: "Partial integration" },
            { value: 4, text: "Strong alignment", description: "Minor gaps remain" },
            { value: 5, text: "Fully unified experience", description: "Seamless handoffs" }
          ]
        },
        {
          id: "3.4",
          text: "How well is HubSpot integrated with other critical business systems?",
          options: [
            { value: 1, text: "No integration", description: "Standalone system" },
            { value: 2, text: "Manual export/import", description: "Manual transfers" },
            { value: 3, text: "Basic one-way integration", description: "Limited data flow" },
            { value: 4, text: "Bi-directional integration", description: "Key systems connected" },
            { value: 5, text: "Comprehensive ecosystem", description: "Full integration" }
          ]
        },
        {
          id: "3.5",
          text: "How clearly can you track the entire customer journey in HubSpot?",
          options: [
            { value: 1, text: "No end-to-end visibility", description: "Disconnected stages" },
            { value: 2, text: "Major gaps in journey", description: "Significant blind spots" },
            { value: 3, text: "Partial journey visibility", description: "Some key points tracked" },
            { value: 4, text: "Good visibility", description: "Minor blind spots" },
            { value: 5, text: "Complete tracking", description: "Full journey visibility" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Reporting & Analytics Assessment",
      questions: [
        {
          id: "4.1",
          text: "How extensively is your team using HubSpot's reporting capabilities?",
          options: [
            { value: 1, text: "Not using for reporting", description: "External reporting only" },
            { value: 2, text: "Basic out-of-box reports", description: "Default reports only" },
            { value: 3, text: "Some custom reports", description: "Limited customization" },
            { value: 4, text: "Extensive custom reporting", description: "Tailored to needs" },
            { value: 5, text: "Comprehensive dashboards", description: "All levels of business" }
          ]
        },
        {
          id: "4.2",
          text: "How well do your HubSpot metrics align with business objectives?",
          options: [
            { value: 1, text: "No connection to goals", description: "Vanity metrics only" },
            { value: 2, text: "Basic activity metrics", description: "Volume measurements" },
            { value: 3, text: "Some outcome metrics", description: "Mixed relevance" },
            { value: 4, text: "Strong KPI alignment", description: "Good business context" },
            { value: 5, text: "Complete performance view", description: "Perfect alignment" }
          ]
        },
        {
          id: "4.3",
          text: "How often do your teams use HubSpot data to make decisions?",
          options: [
            { value: 1, text: "Rarely or never", description: "Decisions made elsewhere" },
            { value: 2, text: "Occasionally", description: "For major decisions only" },
            { value: 3, text: "Regularly for some", description: "Inconsistent usage" },
            { value: 4, text: "Frequently", description: "Most areas use data" },
            { value: 5, text: "Consistently", description: "Data-driven culture" }
          ]
        },
        {
          id: "4.4",
          text: "How engaged is your leadership with HubSpot insights?",
          options: [
            { value: 1, text: "No engagement", description: "Leadership unaware" },
            { value: 2, text: "Minimal awareness", description: "Limited interest" },
            { value: 3, text: "Periodic reporting", description: "Occasional review" },
            { value: 4, text: "Regular consumption", description: "Interested in results" },
            { value: 5, text: "Active engagement", description: "Data-driven leadership" }
          ]
        },
        {
          id: "4.5",
          text: "How effectively can you track the impact of marketing activities on sales?",
          options: [
            { value: 1, text: "Cannot track", description: "No visibility" },
            { value: 2, text: "Basic correlation", description: "Limited connection" },
            { value: 3, text: "Some attribution", description: "Partial visibility" },
            { value: 4, text: "Strong attribution", description: "Most impact tracked" },
            { value: 5, text: "Complete attribution", description: "Full ROI visibility" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "ROI & Value Assessment",
      questions: [
        {
          id: "5.1",
          text: "How well do you understand your total cost of HubSpot ownership?",
          options: [
            { value: 1, text: "Unknown costs", description: "No clear tracking" },
            { value: 2, text: "License costs only", description: "Partial visibility" },
            { value: 3, text: "License & staff costs", description: "Main costs tracked" },
            { value: 4, text: "Comprehensive visibility", description: "Good understanding" },
            { value: 5, text: "Complete cost analysis", description: "Full TCO picture" }
          ]
        },
        {
          id: "5.2",
          text: "How effectively does HubSpot enable growth and adaptation to changes?",
          options: [
            { value: 1, text: "Major limitations", description: "Constrains business" },
            { value: 2, text: "Challenging to adapt", description: "Significant barriers" },
            { value: 3, text: "Moderately flexible", description: "Some adaptations possible" },
            { value: 4, text: "Responsive & scalable", description: "Supports growth well" },
            { value: 5, text: "Enabler of growth", description: "Strategic advantage" }
          ]
        },
        {
          id: "5.3",
          text: "Can you measure the ROI of your HubSpot implementation?",
          options: [
            { value: 1, text: "Cannot measure ROI", description: "No ability to calculate" },
            { value: 2, text: "Rough estimates only", description: "Anecdotal evidence" },
            { value: 3, text: "Basic ROI calculation", description: "Simplified approach" },
            { value: 4, text: "Good ROI understanding", description: "Clear methodology" },
            { value: 5, text: "Precise ROI tracking", description: "Comprehensive model" }
          ]
        },
        {
          id: "5.4",
          text: "How much value does HubSpot provide beyond contact management?",
          options: [
            { value: 1, text: "Contact database only", description: "Minimal expanded use" },
            { value: 2, text: "Email marketing tool", description: "Limited applications" },
            { value: 3, text: "Department-specific tool", description: "One area benefits" },
            { value: 4, text: "Cross-department value", description: "Multiple applications" },
            { value: 5, text: "Business transformation", description: "Company-wide impact" }
          ]
        },
        {
          id: "5.5",
          text: "How well does your team leverage HubSpot's evolving capabilities?",
          options: [
            { value: 1, text: "Not following updates", description: "Static implementation" },
            { value: 2, text: "Awareness of updates", description: "Minimal adoption" },
            { value: 3, text: "Periodic evaluation", description: "Selected new features" },
            { value: 4, text: "Regular updates", description: "Consistent evaluation" },
            { value: 5, text: "Continuous optimization", description: "Fully leveraged" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title="HubSpot Implementation Assessment Quiz | DataOps Group"
        description="Evaluate your current HubSpot implementation and identify key improvement opportunities with our interactive assessment quiz."
        keywords="HubSpot implementation, HubSpot assessment, CRM assessment, HubSpot ROI, HubSpot optimization"
        ogType="website"
        ogTitle="Free HubSpot Implementation Assessment Quiz"
        ogDescription="Get your HubSpot implementation health score and identify priority improvement areas in just 5 minutes."
      />
      
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">HubSpot Implementation</span> Assessment Quiz
            </h1>
            <p className="text-lg text-gray-700">
              Evaluate your current HubSpot implementation and identify key improvement opportunities
            </p>
          </div>
          
          <Card className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
            <CardContent className="p-0">
              {/* Quiz Intro */}
              {currentSection === 0 && (
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-dataops-800">HubSpot Implementation Assessment Quiz</h2>
                    <p className="text-gray-700 mb-4">
                      Evaluate your current HubSpot implementation and identify key improvement opportunities with this interactive assessment.
                    </p>
                    <Alert className="mb-6 bg-blue-50 border-blue-200">
                      <AlertDescription className="text-blue-800">
                        According to Forrester Research, companies with optimized CRM implementations achieve 2.8x higher ROI than those with poorly executed systems.
                      </AlertDescription>
                    </Alert>
                    <p className="font-medium mb-2">This assessment takes approximately 5-7 minutes to complete and will provide you with:</p>
                    <ul className="space-y-2 mb-6 list-disc pl-5 text-gray-700">
                      <li>Your overall HubSpot implementation health score</li>
                      <li>Identification of your highest-priority improvement areas</li>
                      <li>Specific recommended actions based on your results</li>
                      <li>A framework for creating your implementation rescue plan</li>
                    </ul>
                  </div>
                  <Button 
                    onClick={startQuiz} 
                    className="bg-dataops-600 hover:bg-dataops-700 text-white w-full md:w-auto"
                  >
                    Start Assessment
                  </Button>
                </div>
              )}
              
              {/* Quiz Progress */}
              {currentSection >= 1 && currentSection <= 5 && (
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="mb-2">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-dataops-600 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    Section {currentSection} of 5
                  </div>
                </div>
              )}
              
              {/* Quiz Questions */}
              {currentSection >= 1 && currentSection <= 5 && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-dataops-800">
                    {quizSections[currentSection - 1]?.title}
                  </h2>
                  
                  <div className="space-y-10">
                    {quizSections[currentSection - 1]?.questions.map((question) => (
                      <div key={question.id} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                        <h3 className="font-medium text-lg mb-4 text-gray-800">
                          {question.text}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                          {question.options.map((option) => (
                            <div 
                              key={option.value}
                              className={`
                                relative border rounded-lg p-4 transition-all cursor-pointer
                                ${answers[question.id] === option.value 
                                  ? 'border-dataops-600 bg-dataops-50 shadow-md' 
                                  : 'border-gray-200 hover:border-dataops-300 hover:bg-gray-50'}
                              `}
                              onClick={() => handleAnswer(question.id, option.value)}
                            >
                              {answers[question.id] === option.value && (
                                <div className="absolute top-2 right-2 text-dataops-600">
                                  <CheckIcon size={16} />
                                </div>
                              )}
                              <div className="font-medium mb-1">{option.text}</div>
                              <div className="text-sm text-gray-500">{option.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quiz Results */}
              {currentSection === 6 && (
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-center text-dataops-800">Your HubSpot Implementation Assessment Results</h2>
                  
                  {/* Overall Score */}
                  <div className="flex flex-col items-center mb-10">
                    <div className={`w-32 h-32 rounded-full border-8 flex items-center justify-center mb-4 ${getScoreColor(overallScore)}`}>
                      <span className="text-4xl font-bold">{overallScore}</span>
                      <span className="text-gray-500 font-medium">/125</span>
                    </div>
                    <div className={`text-xl font-semibold ${
                      overallScore < 50 ? 'text-red-500' : 
                      overallScore < 85 ? 'text-orange-500' : 
                      overallScore < 105 ? 'text-yellow-600' : 
                      'text-green-500'
                    }`}>
                      {getScoreLabel()}
                    </div>
                  </div>
                  
                  {/* Section Scores */}
                  <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-6 text-gray-800">Section Scores</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(scores).map(([section, score], index) => (
                        <div key={section} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                          <div className="font-medium mb-2">{quizSections[index]?.title.replace(" Assessment", "")}</div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                            <div 
                              className={`h-full ${getSectionBarColor(score)} rounded-full transition-all duration-500`}
                              style={{ width: getSectionBarWidth(score) }}
                            ></div>
                          </div>
                          <div className="text-right text-sm font-medium">{score}/25</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Priority Improvement Areas */}
                  <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-6 text-gray-800">Your Priority Improvement Areas</h3>
                    <div className="space-y-4">
                      {getPriorityRecommendations().map((rec) => (
                        <div key={rec.section} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex gap-4">
                          <div className="bg-dataops-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                            {rec.index}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1 text-dataops-800">{rec.title}</h4>
                            <p className="text-gray-700">{rec.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 90-Day Implementation Rescue Plan */}
                  <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">90-Day Implementation Rescue Plan</h3>
                    <p className="text-gray-700 mb-6">Based on your assessment results, we recommend focusing on the following actions:</p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                        <h4 className="font-semibold text-dataops-700 mb-3">Days 1-30: Foundation</h4>
                        <ul className="space-y-2 text-sm text-gray-700 list-disc pl-4">
                          {getRescuePlanActions().phase1.map((action, index) => (
                            <li key={index}>{action}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                        <h4 className="font-semibold text-dataops-700 mb-3">Days 31-60: Transformation</h4>
                        <ul className="space-y-2 text-sm text-gray-700 list-disc pl-4">
                          {getRescuePlanActions().phase2.map((action, index) => (
                            <li key={index}>{action}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                        <h4 className="font-semibold text-dataops-700 mb-3">Days 61-90: Optimization</h4>
                        <ul className="space-y-2 text-sm text-gray-700 list-disc pl-4">
                          {getRescuePlanActions().phase3.map((action, index) => (
                            <li key={index}>{action}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Next Steps */}
                  <div className="bg-dataops-50 border border-dataops-100 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold mb-3 text-dataops-800">Get Your Personalized Implementation Rescue Plan</h3>
                    <p className="text-gray-700 mb-6">
                      While this assessment provides a solid starting point, a professional HubSpot implementation audit can identify nuanced issues and opportunities that may not be evident internally.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        asChild
                        className="bg-dataops-600 hover:bg-dataops-700 text-white"
                      >
                        <a href="/contact">Request Free Consultation</a>
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={emailResults}
                        className="border-dataops-600 text-dataops-600 hover:bg-dataops-50"
                      >
                        Email My Results
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Quiz Navigation */}
              {currentSection >= 1 && currentSection <= 5 && (
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={prevSection}
                    disabled={currentSection === 1}
                    className="border-gray-300"
                  >
                    Previous
                  </Button>
                  <Button 
                    onClick={nextSection}
                    className="bg-dataops-600 hover:bg-dataops-700 text-white"
                  >
                    {currentSection === 5 ? 'See Results' : 'Next'}
                  </Button>
                </div>
              )}
              
              {/* Email Modal */}
              <div id="email-modal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
                <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Email Your Assessment Results</h3>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                      &times;
                    </button>
                  </div>
                  
                  <p className="mb-4 text-gray-700">
                    We'll send you a detailed PDF report based on your assessment, along with personalized recommendations.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block mb-1 font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        placeholder="Company Name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1 mr-2"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700">
                        I agree to receive my assessment results and occasional follow-up communications. You can unsubscribe at any time.
                      </label>
                    </div>
                    
                    <Button
                      onClick={sendResults}
                      className="w-full bg-dataops-600 hover:bg-dataops-700 text-white"
                    >
                      Send My Results
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <CTABanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default HubSpotAssessment;

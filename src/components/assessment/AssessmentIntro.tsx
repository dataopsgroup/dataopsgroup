
import React from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Play, CheckCircle, Target, BarChart3 } from 'lucide-react';

interface AssessmentIntroProps {
  startQuiz: () => void;
}

const AssessmentIntro: React.FC<AssessmentIntroProps> = ({ startQuiz }) => {
  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-dataops-100 to-saffron-100 text-dataops-700 text-sm font-medium mb-6">
          <Target className="h-4 w-4 mr-2" />
          Free Assessment Tool
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-dataops-600 to-dataops-800 bg-clip-text text-transparent">
          HubSpot Implementation Assessment
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Evaluate your current HubSpot implementation and identify key improvement opportunities with this interactive assessment.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* What You'll Get */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-dataops-800 flex items-center">
              <CheckCircle className="h-6 w-6 mr-3 text-green-500" />
              What You'll Receive
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <BarChart3 className="h-5 w-5 text-dataops-600" />,
                  title: "Overall Health Score",
                  description: "Complete analysis of your HubSpot implementation health"
                },
                {
                  icon: <Target className="h-5 w-5 text-dataops-600" />,
                  title: "Priority Areas",
                  description: "Identification of your highest-priority improvement areas"
                },
                {
                  icon: <CheckCircle className="h-5 w-5 text-dataops-600" />,
                  title: "Action Plan",
                  description: "Specific recommended actions based on your results"
                },
                {
                  icon: <Play className="h-5 w-5 text-dataops-600" />,
                  title: "Implementation Framework",
                  description: "90-day rescue plan to improve your HubSpot ROI"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-dataops-50 border border-gray-100">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Details */}
          <div className="bg-gradient-to-br from-dataops-600 to-dataops-700 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Assessment Details</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron-300 mb-2">5-7</div>
                <div className="text-dataops-100">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron-300 mb-2">25</div>
                <div className="text-dataops-100">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron-300 mb-2">5</div>
                <div className="text-dataops-100">Key Areas</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="space-y-6">
          <Alert className="bg-gradient-to-br from-blue-50 to-dataops-50 border-dataops-200">
            <BarChart3 className="h-4 w-4 text-dataops-600" />
            <AlertDescription className="text-dataops-800 font-medium">
              According to Forrester Research, companies with optimized CRM implementations achieve 
              <span className="text-2xl font-bold text-dataops-600 block mt-2">2.8x higher ROI</span>
              than those with poorly executed systems.
            </AlertDescription>
          </Alert>

          {/* CTA Button */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <Button 
              onClick={startQuiz} 
              className="w-full bg-gradient-to-r from-dataops-600 to-dataops-700 hover:from-dataops-700 hover:to-dataops-800 text-white py-4 text-lg font-semibold rounded-lg shadow-lg transform transition hover:scale-105"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Your Assessment
            </Button>
            <p className="text-xs text-gray-500 text-center mt-3">
              No email required • Instant results • 100% free
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentIntro;

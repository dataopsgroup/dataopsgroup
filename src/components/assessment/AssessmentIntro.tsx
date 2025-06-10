
import React from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
interface AssessmentIntroProps {
  startQuiz: () => void;
}
const AssessmentIntro: React.FC<AssessmentIntroProps> = ({
  startQuiz
}) => {
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-dataops-100 to-saffron-100 text-dataops-700 text-sm font-semibold mb-8 shadow-sm">
            Free Assessment Tool
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-dataops-600 via-dataops-700 to-dataops-800 bg-clip-text text-transparent leading-tight">
            HubSpot Implementation Assessment
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Evaluate your current HubSpot implementation and identify key improvement opportunities with this interactive assessment.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* What You'll Get */}
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-8 text-dataops-800 flex items-center">
                What You'll Receive
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[{
                title: "Overall Health Score",
                description: "Complete analysis of your HubSpot implementation health"
              }, {
                title: "Priority Areas",
                description: "Identification of your highest-priority improvement areas"
              }, {
                title: "Action Plan",
                description: "Specific recommended actions based on your results"
              }, {
                title: "Implementation Framework",
                description: "90-day rescue plan to improve your HubSpot ROI"
              }].map((item, index) => <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 via-blue-50 to-dataops-50 border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="w-3 h-3 rounded-full bg-dataops-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Assessment Details */}
            <div className="bg-gradient-to-br from-dataops-600 via-dataops-700 to-dataops-800 rounded-2xl shadow-xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-dataops-500/20 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center">Assessment Details</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-4xl font-bold text-saffron-300 mb-3">5-7</div>
                    <div className="text-dataops-100 font-medium">Minutes</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-4xl font-bold text-saffron-300 mb-3">25</div>
                    <div className="text-dataops-100 font-medium">Questions</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-4xl font-bold text-saffron-300 mb-3">5</div>
                    <div className="text-dataops-100 font-medium">Key Areas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="space-y-8">
            <Alert className="border-2 border-dataops-200 p-8 rounded-2xl shadow-lg bg-brand-saffron">
              <AlertDescription className="text-white font-medium text-lg leading-relaxed">
                According to Forrester Research, companies with optimized CRM implementations achieve 
                <span className="text-3xl font-bold text-white block mt-4 mb-2">2.8x higher ROI</span>
                than those with poorly executed systems.
              </AlertDescription>
            </Alert>

            {/* CTA Button */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <Button onClick={startQuiz} className="w-full bg-gradient-to-r from-dataops-600 via-dataops-700 to-dataops-800 hover:from-dataops-700 hover:via-dataops-800 hover:to-dataops-900 text-white py-6 text-xl font-bold rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                Start Your Assessment
              </Button>
              <p className="text-sm text-gray-500 text-center mt-4 font-medium">
                No email required • Instant results • 100% free
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AssessmentIntro;

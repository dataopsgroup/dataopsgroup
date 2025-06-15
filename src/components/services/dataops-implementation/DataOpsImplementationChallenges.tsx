
import React from 'react';

const DataOpsImplementationChallenges = () => {
  const challenges = [
    {
      problem: "Inconsistent Data Quality",
      solution: "Automated validation and cleansing protocols",
      impact: "95% reduction in data errors"
    },
    {
      problem: "Siloed Systems",
      solution: "Unified integration platform",
      impact: "100% system connectivity"
    },
    {
      problem: "Manual Reporting",
      solution: "Automated dashboard generation",
      impact: "80% time savings"
    },
    {
      problem: "Scaling Complexity",
      solution: "Standardized operational frameworks",
      impact: "3x faster portfolio expansion"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-rubik">
              Common Portfolio Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600 font-roboto">
              Addressing the operational pain points that limit portfolio company growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-6">
                  <div className="border-l-4 border-red-400 pl-4">
                    <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
                      Challenge
                    </h3>
                    <p className="text-xl font-bold text-gray-900 font-rubik">
                      {challenge.problem}
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                      Our Solution
                    </h3>
                    <p className="text-lg text-gray-700 font-roboto">
                      {challenge.solution}
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
                      Proven Impact
                    </h3>
                    <p className="text-2xl font-bold text-green-700 font-rubik">
                      {challenge.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6 font-roboto">
              Ready to transform your portfolio operations?
            </p>
            <a 
              href="/contact" 
              className="bg-dataops-600 hover:bg-dataops-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Schedule Your Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataOpsImplementationChallenges;

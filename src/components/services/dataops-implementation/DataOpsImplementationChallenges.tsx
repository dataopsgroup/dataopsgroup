
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

          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 font-rubik">
                      Challenge
                    </h3>
                    <p className="text-gray-600 font-roboto">
                      {challenge.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 font-rubik">
                      Our Solution
                    </h3>
                    <p className="text-gray-600 font-roboto">
                      {challenge.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 font-rubik">
                      Impact
                    </h3>
                    <p className="text-dataops-600 font-medium font-roboto">
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

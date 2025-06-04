import React from 'react';
import { AlertCircle, TrendingDown, Database, Users } from 'lucide-react';
const PEProblemSection = () => {
  const problems = [{
    icon: Database,
    title: "Fragmented systems",
    description: "that hide critical business insights"
  }, {
    icon: TrendingDown,
    title: "Manual processes",
    description: "that limit scalability and growth"
  }, {
    icon: AlertCircle,
    title: "Inconsistent data",
    description: "that makes board reporting a nightmare"
  }, {
    icon: Users,
    title: "Disconnected teams",
    description: "working from different sources of truth"
  }];
  return <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Portfolio Company's Operations Are Costing You Millions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every day your newly acquired companies operate with:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {problems.map((problem, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              <problem.icon className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.description}
              </p>
            </div>)}
        </div>

        <div className="text-center">
          <p className="font-semibold text-dataops-600 text-2xl">
            While your competitors are building unified, data-driven operations that accelerate EBITDA growth.
          </p>
        </div>
      </div>
    </section>;
};
export default PEProblemSection;
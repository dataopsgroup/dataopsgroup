
import React from 'react';
import RescuePhase from './RescuePhase';

interface RescuePlan {
  phase1: string[];
  phase2: string[];
  phase3: string[];
}

interface ImplementationRescuePlanProps {
  rescuePlan: RescuePlan;
}

const ImplementationRescuePlan: React.FC<ImplementationRescuePlanProps> = ({ rescuePlan }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">90-Day Implementation Rescue Plan</h3>
      <p className="text-gray-700 mb-6">Based on your assessment results, we recommend focusing on the following actions:</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <RescuePhase title="Days 1-30: Foundation" actions={rescuePlan.phase1} />
        <RescuePhase title="Days 31-60: Transformation" actions={rescuePlan.phase2} />
        <RescuePhase title="Days 61-90: Optimization" actions={rescuePlan.phase3} />
      </div>
    </div>
  );
};

export default ImplementationRescuePlan;

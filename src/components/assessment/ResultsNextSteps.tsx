
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ResultsNextStepsProps {
  onDownloadResults: () => void;
}

const ResultsNextSteps: React.FC<ResultsNextStepsProps> = ({ onDownloadResults }) => {
  return (
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
          onClick={onDownloadResults}
          className="border-dataops-600 text-dataops-600 hover:bg-dataops-50"
        >
          <Download className="w-4 h-4 mr-2" />
          Download My Results
        </Button>
      </div>
    </div>
  );
};

export default ResultsNextSteps;

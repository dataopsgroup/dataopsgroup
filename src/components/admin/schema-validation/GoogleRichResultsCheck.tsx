
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { checkGoogleRichResultsEligibility } from '@/utils/schema-validation';
import { RichResultsEligibility } from '@/types/structured-data';

const GoogleRichResultsCheck: React.FC = () => {
  const [eligibilityResults, setEligibilityResults] = useState<RichResultsEligibility | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const testRichResultsEligibility = async () => {
    setIsChecking(true);
    
    // Mock FAQ schema data for testing
    const mockFAQSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is HubSpot implementation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HubSpot implementation involves setting up and configuring the HubSpot platform to meet your business needs."
          }
        },
        {
          "@type": "Question", 
          "name": "How long does implementation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implementation typically takes 30-120 days depending on complexity and requirements."
          }
        }
      ]
    };

    try {
      const results = checkGoogleRichResultsEligibility(mockFAQSchema);
      setEligibilityResults(results);
    } catch (error) {
      console.error('Rich results check failed:', error);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Google Rich Results Eligibility</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button 
            onClick={testRichResultsEligibility}
            disabled={isChecking}
            className="flex items-center gap-2"
          >
            {isChecking ? 'Checking...' : 'Check Rich Results Eligibility'}
          </Button>

          {eligibilityResults && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Eligibility Results</h3>
                <div className="flex items-center gap-2">
                  <Badge variant={eligibilityResults.isEligible ? "default" : "destructive"}>
                    {eligibilityResults.isEligible ? (
                      <><CheckCircle className="h-3 w-3 mr-1" /> Eligible</>
                    ) : (
                      <><XCircle className="h-3 w-3 mr-1" /> Not Eligible</>
                    )}
                  </Badge>
                  <div className="text-sm text-gray-600">
                    Score: {eligibilityResults.score}%
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-4">
                {eligibilityResults.summary}
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Requirements Check:</h4>
                {eligibilityResults.requirements.map((req, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex items-center gap-2">
                      {req.passed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-sm">{req.name}</span>
                    </div>
                    <Badge variant={req.required ? "outline" : "secondary"}>
                      {req.required ? "Required" : "Recommended"}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <ExternalLink className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">Google Testing Tools</span>
                </div>
                <div className="text-sm text-blue-600">
                  Use Google's Rich Results Test tool to validate your FAQ schema in production.
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleRichResultsCheck;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle } from 'lucide-react';
import { FAQValidationResult, BulkValidationResult } from '@/types/structured-data';
import { isBulkResult, isSingleResult } from '@/utils/schema-validation';

interface ValidationResultsProps {
  lastValidation: FAQValidationResult | BulkValidationResult | null;
}

const ValidationResults: React.FC<ValidationResultsProps> = ({ lastValidation }) => {
  const getUrlDisplayName = (url: string): string => {
    if (url === '/faqs') return 'Main FAQ Page';
    return url.replace('/faqs/', '').replace('-', ' ').toUpperCase();
  };

  if (!lastValidation) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Quick Results
          {isBulkResult(lastValidation) ? (
            <Badge variant={lastValidation.summary.totalErrors === 0 ? "default" : "destructive"}>
              {lastValidation.summary.totalErrors === 0 ? (
                <><CheckCircle className="h-3 w-3 mr-1" />All Valid</>
              ) : (
                <><XCircle className="h-3 w-3 mr-1" />Issues Found</>
              )}
            </Badge>
          ) : (
            <Badge variant={isSingleResult(lastValidation) && lastValidation.isValid ? "default" : "destructive"}>
              {isSingleResult(lastValidation) && lastValidation.isValid ? (
                <><CheckCircle className="h-3 w-3 mr-1" />Valid</>
              ) : (
                <><XCircle className="h-3 w-3 mr-1" />Issues Found</>
              )}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isBulkResult(lastValidation) ? (
          <div className="space-y-2">
            <p className="text-sm text-gray-600 mb-3">
              Tested {lastValidation.results.length} FAQ pages
            </p>
            {lastValidation.results.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm">{getUrlDisplayName(lastValidation.urls[index])}</span>
                {result.isValid ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-600" />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {isSingleResult(lastValidation) ? lastValidation.faqCount : 0}
              </div>
              <div className="text-sm text-gray-600">FAQ Items Found</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {isSingleResult(lastValidation) ? lastValidation.errors?.length || 0 : 0}
              </div>
              <div className="text-sm text-gray-600">Errors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {isSingleResult(lastValidation) ? lastValidation.warnings?.length || 0 : 0}
              </div>
              <div className="text-sm text-gray-600">Warnings</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default React.memo(ValidationResults);

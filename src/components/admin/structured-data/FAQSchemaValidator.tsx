
import React from 'react';
import { FAQValidationResult, BulkValidationResult } from '@/types/structured-data';
import { useValidation } from '@/hooks/useValidation';
import ValidationControls from './ValidationControls';
import ValidationResults from './ValidationResults';

interface FAQSchemaValidatorProps {
  onValidationComplete: (results: FAQValidationResult | BulkValidationResult) => void;
  selectedUrl: string;
  onUrlChange: (url: string) => void;
}

/**
 * Professional FAQ Schema Validator component
 * Provides validation capabilities with proper error handling and user feedback
 */
const FAQSchemaValidator: React.FC<FAQSchemaValidatorProps> = ({
  onValidationComplete,
  selectedUrl,
  onUrlChange
}) => {
  const { isValidating, lastValidation, handleValidation, handleBulkValidation } = useValidation({
    onValidationComplete
  });

  const onValidation = () => handleValidation(selectedUrl);

  return (
    <div className="space-y-6">
      <ValidationControls
        selectedUrl={selectedUrl}
        onUrlChange={onUrlChange}
        onValidation={onValidation}
        onBulkValidation={handleBulkValidation}
        isValidating={isValidating}
      />
      
      <ValidationResults lastValidation={lastValidation} />
    </div>
  );
};

export default React.memo(FAQSchemaValidator);

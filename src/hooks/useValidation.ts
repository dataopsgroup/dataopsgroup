
import { useState, useCallback } from 'react';
import { validateFAQSchema, validateAllFAQPages } from '@/utils/schema-validation';
import { FAQValidationResult, BulkValidationResult } from '@/types/structured-data';
import { useToast } from '@/hooks/use-toast';

interface UseValidationProps {
  onValidationComplete: (results: FAQValidationResult | BulkValidationResult) => void;
}

export const useValidation = ({ onValidationComplete }: UseValidationProps) => {
  const [isValidating, setIsValidating] = useState(false);
  const [lastValidation, setLastValidation] = useState<FAQValidationResult | BulkValidationResult | null>(null);
  const { toast } = useToast();

  const handleValidation = useCallback(async (selectedUrl: string) => {
    if (!selectedUrl.trim()) {
      toast({
        title: "Validation Error",
        description: "Please select or enter a valid URL",
        variant: "destructive"
      });
      return;
    }

    setIsValidating(true);
    try {
      const results = await validateFAQSchema(selectedUrl);
      setLastValidation(results);
      onValidationComplete(results);
      
      toast({
        title: "Validation Complete",
        description: `Found ${results.faqCount} FAQ items with ${results.errors.length} errors`,
        variant: results.isValid ? "default" : "destructive"
      });
    } catch (error) {
      console.error('Validation error:', error);
      toast({
        title: "Validation Failed",
        description: "An error occurred while validating the schema",
        variant: "destructive"
      });
    } finally {
      setIsValidating(false);
    }
  }, [onValidationComplete, toast]);

  const handleBulkValidation = useCallback(async () => {
    setIsValidating(true);
    try {
      const bulkResults = await validateAllFAQPages();
      setLastValidation(bulkResults);
      onValidationComplete(bulkResults);
      
      toast({
        title: "Bulk Validation Complete",
        description: `Validated ${bulkResults.results.length} pages with ${bulkResults.summary.totalErrors} total errors`,
        variant: bulkResults.summary.totalErrors === 0 ? "default" : "destructive"
      });
    } catch (error) {
      console.error('Bulk validation error:', error);
      toast({
        title: "Bulk Validation Failed",
        description: "An error occurred while validating all FAQ pages",
        variant: "destructive"
      });
    } finally {
      setIsValidating(false);
    }
  }, [onValidationComplete, toast]);

  return {
    isValidating,
    lastValidation,
    handleValidation,
    handleBulkValidation
  };
};

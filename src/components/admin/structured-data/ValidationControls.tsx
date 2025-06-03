
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ExternalLink, Loader2 } from 'lucide-react';
import { FAQ_URLS } from '@/constants/faq-validation';

interface ValidationControlsProps {
  selectedUrl: string;
  onUrlChange: (url: string) => void;
  onValidation: () => void;
  onBulkValidation: () => void;
  isValidating: boolean;
}

const ValidationControls: React.FC<ValidationControlsProps> = ({
  selectedUrl,
  onUrlChange,
  onValidation,
  onBulkValidation,
  isValidating
}) => {
  const openGoogleRichResultsTest = () => {
    const baseUrl = window.location.origin;
    const testUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(baseUrl + selectedUrl)}`;
    window.open(testUrl, '_blank', 'noopener,noreferrer');
  };

  const getUrlDisplayName = (url: string): string => {
    if (url === '/faqs') return 'Main FAQ Page';
    return url.replace('/faqs/', '').replace('-', ' ').toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="url-select">Select FAQ Page</Label>
          <select
            id="url-select"
            value={selectedUrl}
            onChange={(e) => onUrlChange(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isValidating}
          >
            {FAQ_URLS.map(url => (
              <option key={url} value={url}>
                {getUrlDisplayName(url)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <Label htmlFor="custom-url">Or Enter Custom URL</Label>
          <Input
            id="custom-url"
            placeholder="/custom-faq-page"
            value={selectedUrl}
            onChange={(e) => onUrlChange(e.target.value)}
            disabled={isValidating}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button 
          onClick={onValidation}
          disabled={isValidating || !selectedUrl.trim()}
          className="flex items-center gap-2"
        >
          {isValidating && <Loader2 className="h-4 w-4 animate-spin" />}
          {isValidating ? 'Validating...' : 'Validate Schema'}
        </Button>
        
        <Button 
          variant="outline"
          onClick={onBulkValidation}
          disabled={isValidating}
          className="flex items-center gap-2"
        >
          {isValidating && <Loader2 className="h-4 w-4 animate-spin" />}
          Validate All FAQ Pages
        </Button>
        
        <Button 
          variant="outline"
          onClick={openGoogleRichResultsTest}
          className="flex items-center gap-2"
          disabled={!selectedUrl.trim()}
        >
          <ExternalLink className="h-4 w-4" />
          Google Rich Results Test
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ValidationControls);

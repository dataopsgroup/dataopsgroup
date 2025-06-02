
import React from 'react';
import { Button } from '@/components/ui/button';
import { ImageIcon, Loader2 } from 'lucide-react';

interface GenerateButtonProps {
  isGenerating: boolean;
  disabled: boolean;
  onClick: () => void;
}

const GenerateButton = ({ isGenerating, disabled, onClick }: GenerateButtonProps) => {
  return (
    <Button 
      onClick={onClick} 
      disabled={disabled}
      className="w-full"
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating Image...
        </>
      ) : (
        <>
          <ImageIcon className="mr-2 h-4 w-4" />
          Generate PE HubSpot Blog Cover
        </>
      )}
    </Button>
  );
};

export default GenerateButton;

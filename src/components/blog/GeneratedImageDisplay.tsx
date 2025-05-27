
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from 'sonner';

interface GeneratedImageDisplayProps {
  imageUrl: string;
}

const GeneratedImageDisplay = ({ imageUrl }: GeneratedImageDisplayProps) => {
  const downloadImage = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'pe-hubspot-implementation-failure.webp';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success('Image downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download image');
    }
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-lg overflow-hidden">
        <img 
          src={imageUrl} 
          alt="Generated PE HubSpot blog cover" 
          className="w-full h-auto"
        />
      </div>
      <Button onClick={downloadImage} variant="outline" className="w-full">
        <Download className="mr-2 h-4 w-4" />
        Download Image
      </Button>
      <p className="text-xs text-gray-500">
        Save this image as: pe-hubspot-implementation-failure.webp and upload it to your project's public/lovable-uploads folder.
      </p>
    </div>
  );
};

export default GeneratedImageDisplay;

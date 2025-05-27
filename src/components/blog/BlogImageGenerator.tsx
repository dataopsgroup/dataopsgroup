
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';
import { toast } from 'sonner';
import { RunwareService } from '@/services/runwareService';
import ApiKeyInput from './ApiKeyInput';
import GenerateButton from './GenerateButton';
import GeneratedImageDisplay from './GeneratedImageDisplay';

const BlogImageGenerator = () => {
  const [apiKey, setApiKey] = useState('deLRWbx5DoVHBHE5chV4bzJn1JbmnuWs');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const generatePEBlogImage = async () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Runware API key');
      return;
    }

    setIsGenerating(true);
    
    try {
      const runware = new RunwareService(apiKey);
      
      const prompt = `Professional blog cover image, 1200x630 pixels, navy blue background (#0F172A), main headline "64% of PE Portfolio Companies FAIL at HubSpot Implementation" in large bold white text, orange accent color (#FBB03B) for emphasis, "DataOps Group" branding in bottom right corner, clean modern typography, high contrast, LinkedIn-ready, professional corporate design, minimal and striking, suitable for private equity professionals, no people, abstract business graphics elements`;

      const result = await runware.generateImage({
        positivePrompt: prompt,
        width: 1200,
        height: 630,
        model: "runware:100@1",
        numberResults: 1,
        outputFormat: "WEBP",
        CFGScale: 1,
        scheduler: "FlowMatchEulerDiscreteScheduler",
        strength: 0.8
      });
      
      setGeneratedImage(result.imageURL);
      toast.success('Blog cover image generated successfully!');
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            Generate PE Blog Cover Image
          </CardTitle>
          <p className="text-sm text-gray-600">
            Create a professional blog cover featuring "64% of PE Portfolio Companies FAIL at HubSpot Implementation" with navy background, white text, and orange accents.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <ApiKeyInput 
            apiKey={apiKey} 
            onApiKeyChange={setApiKey} 
          />

          <GenerateButton
            isGenerating={isGenerating}
            disabled={isGenerating || !apiKey.trim()}
            onClick={generatePEBlogImage}
          />

          {generatedImage && (
            <GeneratedImageDisplay imageUrl={generatedImage} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogImageGenerator;

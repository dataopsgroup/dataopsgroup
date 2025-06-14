
import React from 'react';
import { Share2, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DataOpsImplementationSocialShare = () => {
  const pageUrl = encodeURIComponent('https://dataopsgroup.com/services/dataops-implementation');
  const pageTitle = encodeURIComponent('DataOps Implementation Services - Portfolio Operations Scaling');
  const pageDescription = encodeURIComponent('Scale marketing operations across your portfolio with streamlined DataOps implementation');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    email: `mailto:?subject=${pageTitle}&body=${pageDescription}%20${pageUrl}`
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-40">
      <div className="bg-white rounded-lg shadow-lg p-2 border border-gray-200">
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleShare('twitter')}
            className="p-2 hover:bg-blue-50 hover:text-blue-600"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleShare('linkedin')}
            className="p-2 hover:bg-blue-50 hover:text-blue-600"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleShare('email')}
            className="p-2 hover:bg-gray-50"
            aria-label="Share via Email"
          >
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataOpsImplementationSocialShare;

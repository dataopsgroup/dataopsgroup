
import React, { useState } from 'react';
import { Linkedin, Twitter, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  title: string;
  className?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  // Share functions
  const handleShareLinkedIn = () => {
    const url = window.location.href;
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=570');
  };
  
  const handleShareTwitter = () => {
    const url = window.location.href;
    const text = title;
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'width=600,height=300');
  };
  
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast({
        title: "Link copied",
        description: "URL copied to clipboard",
      });
      
      // Reset the copied state after 3 seconds
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }).catch(err => {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard",
        variant: "destructive"
      });
    });
  };
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <button 
        onClick={handleShareLinkedIn}
        aria-label="Share on LinkedIn"
        className="text-gray-600 hover:text-dataops-600 transition-colors"
      >
        <Linkedin size={18} />
        <span className="sr-only">Share on LinkedIn</span>
      </button>
      
      <button 
        onClick={handleShareTwitter}
        aria-label="Share on Twitter"
        className="text-gray-600 hover:text-dataops-600 transition-colors"
      >
        <Twitter size={18} />
        <span className="sr-only">Share on Twitter</span>
      </button>
      
      <button 
        onClick={handleCopyLink}
        aria-label="Copy link to clipboard"
        className="text-gray-600 hover:text-dataops-600 transition-colors"
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
        <span className="sr-only">Copy link</span>
      </button>
    </div>
  );
};

export default ShareButtons;


import React, { useState } from 'react';
import { format } from 'date-fns';
import { Linkedin, Twitter, Copy, Check } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';
import { useToast } from '@/hooks/use-toast';

interface BlogHeaderProps {
  title: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  date,
  author,
  category,
  coverImage,
}) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  // Use 'd' instead of 'dd' in the format string to get single digits for days < 10
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');
  const isoDate = new Date(date).toISOString();
  
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
    <div className="mb-8">
      <h1 
        className="blog-post-title mb-4"
        style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: 'bold' }}
      >
        {title}
      </h1>
      
      <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
        <div className="flex items-center">
          <time dateTime={isoDate} className="mr-4">{formattedDate}</time>
          <span className="mr-4">·</span>
          <span className="mr-4">By {author}</span>
          {category && (
            <>
              <span className="mx-4">·</span>
              <span className="bg-dataops-100 text-dataops-800 px-2 py-1 rounded-full text-xs">
                {category}
              </span>
            </>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
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
      </div>
      
      <figure className="mb-12">
        <OptimizedImage
          src={coverImage}
          alt={title}
          className="w-full h-auto rounded-lg"
          width={1200}
          height={630}
          objectFit="cover"
          priority={true}
          aspectRatio={1200/630}
          placeholder="/placeholder.svg"
        />
      </figure>
    </div>
  );
};

export default BlogHeader;

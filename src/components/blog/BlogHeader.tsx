
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Linkedin, Twitter, Copy, Check, Calendar, Clock, User } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

interface BlogHeaderProps {
  title: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
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
    <div className="blog-post-header-enhanced">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Category and Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {category && (
              <Badge className="category-tag-enhanced text-sm">
                {category}
              </Badge>
            )}
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={isoDate}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {author}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="blog-post-title-enhanced mb-8">
            {title}
          </h1>

          {/* Social Share */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white/80 text-sm font-medium">Share:</span>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleShareLinkedIn}
                aria-label="Share on LinkedIn"
                className="social-share-btn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              
              <button 
                onClick={handleShareTwitter}
                aria-label="Share on Twitter"
                className="social-share-btn"
              >
                <Twitter className="w-5 h-5" />
              </button>
              
              <button 
                onClick={handleCopyLink}
                aria-label="Copy link to clipboard"
                className="social-share-btn"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image - Only render if coverImage exists */}
      {coverImage && (
        <div className="relative mt-8">
          <figure className="relative overflow-hidden">
            <OptimizedImage
              src={coverImage}
              alt={title}
              className="w-full h-auto"
              width={1200}
              height={630}
              objectFit="cover"
              priority={true}
              aspectRatio={1200/630}
              placeholder="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </figure>
        </div>
      )}
    </div>
  );
};

export default BlogHeader;


import React from 'react';
import { Clock } from 'lucide-react';
import { generateThumbnailStyle } from '@/utils/thumbnail-generator';
import { Badge } from '@/components/ui/badge';

interface DynamicThumbnailProps {
  title: string;
  category?: string;
  readingTime: number;
  className?: string;
}

const DynamicThumbnail: React.FC<DynamicThumbnailProps> = ({
  title,
  category,
  readingTime,
  className = ''
}) => {
  const thumbnailStyle = generateThumbnailStyle(category);
  
  // Truncate title to fit nicely on thumbnail
  const truncatedTitle = title.length > 80 ? `${title.substring(0, 77)}...` : title;
  
  return (
    <div className={`relative overflow-hidden rounded-t-lg ${className}`}>
      {/* Gradient Background */}
      <div className={`w-full h-48 flex flex-col justify-between p-6 ${thumbnailStyle.gradientClass} transition-transform duration-300 group-hover:scale-105`}>
        {/* Category Badge with color coding */}
        {category && (
          <Badge 
            category={category}
            className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white border-white/30"
          >
            {category.toUpperCase()}
          </Badge>
        )}
        
        {/* Content Area */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className={`font-bold text-lg leading-tight ${thumbnailStyle.textColor} text-center`}>
            {truncatedTitle}
          </h3>
        </div>
        
        {/* Reading Time */}
        <div className="flex items-center justify-center gap-1 text-white/90 text-sm">
          <Clock className="w-4 h-4" />
          <span>{readingTime} min read</span>
        </div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DynamicThumbnail;

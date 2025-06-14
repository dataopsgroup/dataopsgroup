
import React from 'react';
import OptimizedContentImage from '@/components/image/OptimizedContentImage';

interface OptimizedDashboardImageProps {
  src: string;
  alt: string;
  title: string;
}

const OptimizedDashboardImage = ({ src, alt, title }: OptimizedDashboardImageProps) => {
  return (
    <div className="relative group">
      <OptimizedContentImage
        src={src}
        alt={alt}
        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        maxSizeKB={100}
        priority={false}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      <div className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {title}
      </div>
    </div>
  );
};

export default OptimizedDashboardImage;

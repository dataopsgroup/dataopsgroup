
import React, { useCallback } from 'react';

// Memoized background image component to prevent re-renders
const HeroBackground = React.memo(() => {
  // Simple image error handler
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn('Hero background image failed to load');
    // Hide the image container on error
    const imgElement = e.target as HTMLImageElement;
    if (imgElement.parentElement) {
      imgElement.parentElement.style.display = 'none';
    }
  }, []);

  // Simple image load handler
  const handleImageLoad = useCallback(() => {
    console.log('Hero background image loaded successfully');
  }, []);

  return (
    <div className="hero-bg">
      <img 
        src="/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png" 
        alt="Hero background consultant" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'right center'
        }}
        loading="eager"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
});

HeroBackground.displayName = 'HeroBackground';

export default HeroBackground;

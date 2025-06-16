
import React from 'react';

// Simplified background component using pure CSS background-image approach
const HeroBackground = React.memo(() => {
  return (
    <div className="hero-bg" />
  );
});

HeroBackground.displayName = 'HeroBackground';

export default HeroBackground;

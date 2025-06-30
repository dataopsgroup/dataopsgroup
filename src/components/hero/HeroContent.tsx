
import React from 'react';

const HeroContent = React.memo(() => {
  return (
    <div className="hero-content">
      <div className="hero-headline-box">
        <h1 className="hero-headline" id="hero-heading">
          Turn PE Portfolio Operations Into Profit Drivers in{' '}
          <span className="text-yellow-300 text-4xl lg:text-6xl font-bold">100 Days</span>
        </h1>
      </div>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';

export default HeroContent;

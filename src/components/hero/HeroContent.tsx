
import React from 'react';

const HeroContent = React.memo(() => {
  return (
    <div className="hero-content">
      <div className="hero-headline-box">
        <h1 
          className="hero-headline" 
          id="hero-heading"
          style={{
            // Inline critical styles to prevent render blocking
            fontFamily: 'var(--font-rubik)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: '1.2',
            color: 'white',
            textAlign: 'center',
            margin: 0,
            padding: 0
          }}
        >
          Turn PE Portfolio Operations Into Profit Drivers in{' '}
          <span 
            style={{
              color: '#FBB03B',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 'bold'
            }}
          >
            100 Days
          </span>
        </h1>
      </div>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';

export default HeroContent;

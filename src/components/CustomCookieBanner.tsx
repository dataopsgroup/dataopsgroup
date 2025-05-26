
import React, { useState, useEffect } from 'react';

const CustomCookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('hubspot-cookie-choice');
    if (!cookieChoice) {
      // Wait for HubSpot to load and then show our banner
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Hide the original HubSpot banner if it exists
        const originalBanner = document.getElementById('hs-eu-cookie-confirmation');
        if (originalBanner) {
          originalBanner.style.display = 'none';
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Trigger HubSpot's accept function if available
    const hsAcceptButton = document.getElementById('hs-eu-confirmation-button');
    if (hsAcceptButton) {
      hsAcceptButton.click();
    }
    
    // Store the choice
    localStorage.setItem('hubspot-cookie-choice', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Trigger HubSpot's decline function if available
    const hsDeclineButton = document.getElementById('hs-eu-decline-button');
    if (hsDeclineButton) {
      hsDeclineButton.click();
    }
    
    // Store the choice
    localStorage.setItem('hubspot-cookie-choice', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div id="custom-cookie-banner">
      <div className="custom-cookie-inner">
        <p>
          We won't track your information when you visit our site. But in order to comply with your preferences, we'll have to use just one tiny cookie so that you're not asked to make this choice again.
        </p>
        <div className="custom-cookie-buttons">
          <button id="custom-accept-button" onClick={handleAccept}>
            Accept
          </button>
          <button id="custom-decline-button" onClick={handleDecline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCookieBanner;

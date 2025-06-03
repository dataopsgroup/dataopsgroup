
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after a slight delay to not block initial render
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else if (cookieConsent === 'accepted') {
      // Load HubSpot if consent was previously given
      loadHubSpotTracking();
    }
  }, []);

  const loadHubSpotTracking = () => {
    // Only load HubSpot if not already loaded
    if (!document.getElementById('hs-script-loader')) {
      const hubspotScript = document.createElement('script');
      hubspotScript.async = true;
      hubspotScript.defer = true;
      hubspotScript.src = '//js.hs-scripts.com/21794360.js';
      hubspotScript.id = 'hs-script-loader';
      document.head.appendChild(hubspotScript);
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    
    // Enable Google Analytics tracking
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
    
    // Load and enable HubSpot tracking
    loadHubSpotTracking();
    
    // Set HubSpot consent when it loads
    const checkHubSpot = setInterval(() => {
      if (window._hsq) {
        window._hsq.push(['doNotTrack', false]);
        clearInterval(checkHubSpot);
      }
    }, 100);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    
    // Disable Google Analytics tracking
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
    
    // Disable HubSpot tracking if it's already loaded
    if (window._hsq) {
      window._hsq.push(['doNotTrack', true]);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1 text-sm text-gray-700">
          <p>
            We use cookies to enhance your experience and analyze site usage. 
            <a href="/privacy" className="text-dataops-600 hover:underline ml-1">
              Learn more
            </a>
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-dataops-600 text-white rounded hover:bg-dataops-700 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-gray-400 hover:text-gray-600"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

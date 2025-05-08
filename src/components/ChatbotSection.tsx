
import React, { useEffect, useRef } from 'react';

const ChatbotSection = () => {
  const scriptLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    // This prevents duplicate script loading if the component remounts
    if (scriptLoadedRef.current) return;

    // Function to load the Botpress injection script
    const loadBotpressScript = () => {
      try {
        // Check if the script is already loaded
        if (document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v2.5/inject.js"]')) {
          console.log('Botpress inject script already exists');
          initBotpressConfig();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v2.5/inject.js';
        script.async = true;
        script.onload = () => {
          console.log('Botpress inject script loaded');
          initBotpressConfig();
        };
        script.onerror = (err) => {
          console.error('Error loading Botpress inject script:', err);
        };
        document.body.appendChild(script);
        scriptLoadedRef.current = true;
      } catch (error) {
        console.error('Error setting up Botpress:', error);
      }
    };

    // Function to load the Botpress configuration script
    const initBotpressConfig = () => {
      try {
        // Check if the script is already loaded
        if (document.querySelector('script[src="https://files.bpcontent.cloud/2025/04/29/19/20250429195414-M5D2AL30.js"]')) {
          console.log('Botpress config script already exists');
          return;
        }

        const configScript = document.createElement('script');
        configScript.src = 'https://files.bpcontent.cloud/2025/04/29/19/20250429195414-M5D2AL30.js';
        configScript.async = true;
        configScript.onload = () => {
          console.log('Botpress config script loaded');
        };
        configScript.onerror = (err) => {
          console.error('Error loading Botpress config script:', err);
        };
        document.body.appendChild(configScript);
      } catch (error) {
        console.error('Error initializing Botpress config:', error);
      }
    };

    // Start the script loading process
    loadBotpressScript();

    // Cleanup function if component unmounts
    return () => {
      // We don't actually remove the scripts on unmount
      // since they're needed globally
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // We're returning an empty fragment since Botpress will inject its own UI
  return <></>;
};

export default ChatbotSection;

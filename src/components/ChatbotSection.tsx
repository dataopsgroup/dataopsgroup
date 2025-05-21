
import React, { useEffect, useRef } from 'react';
import { loadScript, runWhenIdle } from '@/lib/optimization';
// Import polyfills
import '@/lib/polyfills';

const ChatbotSection = () => {
  const scriptLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    // This prevents duplicate script loading if the component remounts
    if (scriptLoadedRef.current) return;

    // Function to load the Botpress injection script
    const loadBotpressScript = async () => {
      try {
        // Check if the script is already loaded
        if (document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v2.5/inject.js"]')) {
          console.log('Botpress inject script already exists');
          await initBotpressConfig();
          return;
        }

        // Defer non-critical script loading
        runWhenIdle(async () => {
          try {
            await loadScript('https://cdn.botpress.cloud/webchat/v2.5/inject.js', true, true);
            console.log('Botpress inject script loaded');
            await initBotpressConfig();
            scriptLoadedRef.current = true;
          } catch (err) {
            console.error('Error loading Botpress inject script:', err);
          }
        });
      } catch (error) {
        console.error('Error setting up Botpress:', error);
      }
    };

    // Function to load the Botpress configuration script
    const initBotpressConfig = async () => {
      try {
        // Check if the script is already loaded
        if (document.querySelector('script[src="https://files.bpcontent.cloud/2025/04/29/19/20250429195414-M5D2AL30.js"]')) {
          console.log('Botpress config script already exists');
          return;
        }

        await loadScript('https://files.bpcontent.cloud/2025/04/29/19/20250429195414-M5D2AL30.js', true, true);
        console.log('Botpress config script loaded');
      } catch (error) {
        console.error('Error initializing Botpress config:', error);
      }
    };

    // Use requestAnimationFrame to ensure we load the scripts after the main content is rendered
    window.requestAnimationFrame(() => {
      loadBotpressScript();
    });

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

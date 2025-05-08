
import React, { useEffect, useRef } from 'react';

const ChatbotSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLParagraphElement>(null);
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
          // Could display an error message to the user here
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
          observeBotpressInitialization();
          return;
        }

        const configScript = document.createElement('script');
        configScript.src = 'https://files.bpcontent.cloud/2025/04/29/19/20250429195414-M5D2AL30.js';
        configScript.async = true;
        configScript.onload = () => {
          console.log('Botpress config script loaded');
          observeBotpressInitialization();
        };
        configScript.onerror = (err) => {
          console.error('Error loading Botpress config script:', err);
        };
        document.body.appendChild(configScript);
      } catch (error) {
        console.error('Error initializing Botpress config:', error);
      }
    };

    // Function to observe when Botpress injects its elements into the DOM
    const observeBotpressInitialization = () => {
      if (!containerRef.current) return;

      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if Botpress has injected its elements
            if (document.querySelector('#botpress-webchat')) {
              console.log('Botpress webchat initialized');
              // Hide our placeholder
              if (placeholderRef.current) {
                placeholderRef.current.style.display = 'none';
              }
              observer.disconnect();
            }
          }
        }
      });
      
      // Start observing the container for changes
      observer.observe(containerRef.current, { childList: true, subtree: true });
      console.log('Observer started for Botpress initialization');
    };

    // Start the script loading process
    loadBotpressScript();

    // Cleanup function to remove scripts if component unmounts
    return () => {
      // We don't actually remove the scripts on unmount since they're needed globally
      // Just clean up any observers or event listeners if needed
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-dataops-600">
            Ask Me Anything
          </h2>
          <div 
            id="botpress-webchat-container" 
            className="bg-white rounded-xl shadow-lg p-4 h-[166px] w-full border border-gray-100 flex items-center justify-center"
            aria-label="DataOps Group Chatbot"
            ref={containerRef}
          >
            <p 
              className="text-gray-400" 
              id="chatbot-placeholder"
              ref={placeholderRef}
            >
              Start typing here to ask your questions.
            </p>
            {/* Botpress will inject the chatbot here */}
            {/* The placeholder will be hidden when Botpress initializes */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;

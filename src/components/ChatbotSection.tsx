
import React, { useEffect, useRef } from 'react';
import { loadScript, runWhenIdle } from '@/lib/optimization';

const ChatbotSection = () => {
  const scriptLoadedRef = useRef<boolean>(false);
  const botInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    // This prevents duplicate script loading if the component remounts
    if (scriptLoadedRef.current) return;

    // Function to load Botpress scripts with proper sequencing and error handling
    const loadBotpressScripts = () => {
      const injectScriptUrl = 'https://cdn.botpress.cloud/webchat/v2.5/inject.js';
      const configScriptUrl = 'https://files.bpcontent.cloud/2025/04/29/19/20250429195414-M5D2AL30.js';
      
      // Check if scripts are already loaded
      const injectScriptExists = document.querySelector(`script[src="${injectScriptUrl}"]`);
      const configScriptExists = document.querySelector(`script[src="${configScriptUrl}"]`);
      
      if (injectScriptExists && configScriptExists) {
        console.log('Botpress scripts already loaded');
        scriptLoadedRef.current = true;
        return;
      }

      // Load scripts in the correct sequence with proper error handling
      // Use intersection observer to only load when user scrolls near the footer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !botInitializedRef.current) {
            botInitializedRef.current = true;
            
            runWhenIdle(async () => {
              try {
                // First load inject script if needed
                if (!injectScriptExists) {
                  await loadScript(injectScriptUrl, true, true);
                  console.log('Botpress inject script loaded');
                }
                
                // Then load config script if needed
                if (!configScriptExists) {
                  await loadScript(configScriptUrl, true, true);
                  console.log('Botpress config script loaded');
                }
                
                scriptLoadedRef.current = true;
              } catch (err) {
                console.error('Error loading Botpress scripts:', err);
                // Reset for retry
                botInitializedRef.current = false;
              }
            });
            
            // Disconnect after loading
            observer.disconnect();
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '200px'
      });
      
      // Start observing the footer element or body if footer doesn't exist
      const target = document.querySelector('footer') || document.body;
      observer.observe(target);
    };

    // Use requestAnimationFrame to ensure we load the scripts after the main content is rendered
    window.requestAnimationFrame(loadBotpressScripts);

    // Cleanup observer if component unmounts
    return () => {
      const observer = new IntersectionObserver(() => {});
      observer.disconnect();
    };
  }, []);

  // Return empty fragment since Botpress will inject its own UI
  return <></>;
};

export default ChatbotSection;

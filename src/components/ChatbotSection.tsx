
import React, { useEffect, useRef } from 'react';
import { loadScript, runWhenIdle } from '@/lib/optimization';

const ChatbotSection = () => {
  const scriptLoadedRef = useRef<boolean>(false);
  const botInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    // This prevents duplicate script loading if the component remounts
    if (scriptLoadedRef.current) return;

    // Function to load Botpress scripts with current working URLs
    const loadBotpressScripts = () => {
      // Updated to current working Botpress URLs
      const injectScriptUrl = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      const configScriptUrl = 'https://mediafiles.botpress.cloud/b4b4b4b4-b4b4-b4b4-b4b4-b4b4b4b4b4b4/webchat/config.js';
      
      // Check if scripts are already loaded
      const injectScriptExists = document.querySelector(`script[src*="botpress.cloud/webchat"]`);
      
      if (injectScriptExists) {
        console.log('Botpress scripts already loaded');
        scriptLoadedRef.current = true;
        return;
      }

      // Use intersection observer to only load when user scrolls near the footer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !botInitializedRef.current) {
            botInitializedRef.current = true;
            
            runWhenIdle(async () => {
              try {
                // Load inject script with fallback
                await loadScript(injectScriptUrl, true, true);
                console.log('Botpress inject script loaded successfully');
                
                // Initialize chatbot with fallback configuration
                if (window.botpress) {
                  window.botpress.init({
                    composerPlaceholder: 'Ask us anything...',
                    botConversationDescription: 'Chat with DataOps Group',
                    botName: 'DataOps Assistant'
                  });
                }
                
                scriptLoadedRef.current = true;
              } catch (err) {
                console.warn('Chatbot temporarily unavailable:', err);
                // Gracefully fail without breaking the page
                scriptLoadedRef.current = false;
                botInitializedRef.current = false;
              }
            });
            
            // Disconnect after loading attempt
            observer.disconnect();
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '200px'
      });
      
      // Start observing the footer element or body if footer doesn't exist
      const target = document.querySelector('footer') || document.body;
      if (target) {
        observer.observe(target);
      }

      // Return cleanup function for the observer
      return () => observer.disconnect();
    };

    // Use requestAnimationFrame to ensure we load the scripts after the main content is rendered
    const animationFrameId = window.requestAnimationFrame(() => {
      loadBotpressScripts();
    });

    // Cleanup function
    return () => {
      // Cancel the animation frame if it hasn't executed yet
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Return empty fragment since Botpress will inject its own UI
  return <></>;
};

export default ChatbotSection;

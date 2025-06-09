
import React, { useEffect, useRef } from 'react';
import { loadScript, runWhenIdle } from '@/lib/optimization';

const ChatbotSection = () => {
  const scriptLoadedRef = useRef<boolean>(false);
  const botInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    // This prevents duplicate script loading if the component remounts
    if (scriptLoadedRef.current) return;

    // Function to load Botpress scripts with updated URLs and proper error handling
    const loadBotpressScripts = () => {
      // Updated Botpress script URLs - using latest stable versions
      const injectScriptUrl = 'https://cdn.botpress.cloud/webchat/v2/inject.js';
      const configScriptUrl = 'https://files.bpcontent.cloud/2025/06/09/21/20250609214000-UPDATED.js';
      
      // Check if scripts are already loaded
      const injectScriptExists = document.querySelector(`script[src*="botpress.cloud/webchat"]`);
      const configScriptExists = document.querySelector(`script[src*="bpcontent.cloud"]`);
      
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
                  console.log('Botpress inject script loaded successfully');
                }
                
                // Then load config script if needed with fallback
                if (!configScriptExists) {
                  try {
                    await loadScript(configScriptUrl, true, true);
                    console.log('Botpress config script loaded successfully');
                  } catch (configError) {
                    console.warn('Config script failed, chatbot may not be available:', configError);
                    // Don't fail completely - the inject script might still work
                  }
                }
                
                scriptLoadedRef.current = true;
              } catch (err) {
                console.error('Error loading Botpress scripts:', err);
                // Reset for potential retry
                botInitializedRef.current = false;
                
                // Optional: Show user-friendly message that chat is temporarily unavailable
                const chatErrorEvent = new CustomEvent('chatbot-unavailable', {
                  detail: { error: err }
                });
                window.dispatchEvent(chatErrorEvent);
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

      // Cleanup function
      return () => observer.disconnect();
    };

    // Use requestAnimationFrame to ensure we load the scripts after the main content is rendered
    const cleanup = window.requestAnimationFrame(loadBotpressScripts);

    // Cleanup observer if component unmounts
    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);

  // Return empty fragment since Botpress will inject its own UI
  return <></>;
};

export default ChatbotSection;

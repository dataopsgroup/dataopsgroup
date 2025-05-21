
import React, { useEffect, useRef } from 'react';
import { loadScript, runWhenIdle } from '@/lib/optimization';

const ChatbotSection = () => {
  const scriptLoadedRef = useRef<boolean>(false);

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
          // Implement retry logic or fallback here if needed
        }
      });
    };

    // Use requestAnimationFrame to ensure we load the scripts after the main content is rendered
    window.requestAnimationFrame(loadBotpressScripts);

    // No cleanup needed as scripts are kept globally
  }, []);

  // Return empty fragment since Botpress will inject its own UI
  return <></>;
};

export default ChatbotSection;

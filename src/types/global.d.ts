
declare global {
  interface Window {
    botpress?: {
      init: (config: {
        composerPlaceholder?: string;
        botConversationDescription?: string;
        botName?: string;
      }) => void;
    };
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export {};

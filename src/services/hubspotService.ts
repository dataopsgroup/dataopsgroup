
/**
 * Simplified HubSpot service focused on reliability
 * Removed complex retry logic and cookie dependencies that were causing issues
 */

interface HubSpotFormConfig {
  portalId: string;
  formId: string;
  target: string;
  region?: string;
  redirectUrl?: string;
  onFormSubmit?: () => void;
  onFormReady?: () => void;
  onFormFailedValidation?: () => void;
}

class HubSpotService {
  private scriptLoaded = false;

  /**
   * Simple script loading without complex state management
   */
  async loadScript(): Promise<boolean> {
    if (this.scriptLoaded || window.hbspt?.forms) {
      return true;
    }

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
    if (existingScript) {
      this.scriptLoaded = true;
      return true;
    }

    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;

      script.onload = () => {
        this.scriptLoaded = true;
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.head.appendChild(script);
    });
  }

  /**
   * Simple form creation without complex error handling
   */
  async createForm(config: HubSpotFormConfig): Promise<boolean> {
    try {
      if (!window.hbspt?.forms) {
        return false;
      }

      const targetElement = document.querySelector(config.target);
      if (!targetElement) {
        return false;
      }

      window.hbspt.forms.create({
        ...config,
        onFormSubmit: config.onFormSubmit,
        onFormReady: config.onFormReady,
        onFormFailedValidation: config.onFormFailedValidation
      });

      return true;
    } catch (error) {
      console.error('Error creating HubSpot form:', error);
      return false;
    }
  }

  isReady(): boolean {
    return this.scriptLoaded && !!window.hbspt?.forms;
  }
}

// Export singleton instance
export const hubspotService = new HubSpotService();

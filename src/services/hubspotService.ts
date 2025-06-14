
/**
 * Centralized HubSpot service to manage script loading and form creation
 * Prevents conflicts and ensures reliable form rendering
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
  private scriptLoading = false;
  private loadPromise: Promise<boolean> | null = null;

  /**
   * Load HubSpot script once and return a promise
   */
  async loadScript(): Promise<boolean> {
    if (this.scriptLoaded) {
      return true;
    }

    if (this.loadPromise) {
      return this.loadPromise;
    }

    this.loadPromise = new Promise((resolve, reject) => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
      if (existingScript && window.hbspt?.forms) {
        this.scriptLoaded = true;
        resolve(true);
        return;
      }

      console.log('Loading HubSpot forms script...');
      this.scriptLoading = true;

      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;

      script.onload = () => {
        console.log('HubSpot script loaded successfully');
        this.scriptLoaded = true;
        this.scriptLoading = false;
        
        // Wait for hbspt to be fully available
        this.waitForHubSpot().then(() => resolve(true)).catch(() => reject(false));
      };

      script.onerror = () => {
        console.error('Failed to load HubSpot forms script');
        this.scriptLoading = false;
        reject(false);
      };

      document.head.appendChild(script);
    });

    return this.loadPromise;
  }

  /**
   * Wait for HubSpot to be fully available
   */
  private waitForHubSpot(): Promise<void> {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 20;
      
      const checkHubSpot = () => {
        attempts++;
        if (window.hbspt?.forms) {
          resolve();
        } else if (attempts < maxAttempts) {
          setTimeout(checkHubSpot, 200);
        } else {
          reject(new Error('HubSpot forms not available after script load'));
        }
      };
      
      checkHubSpot();
    });
  }

  /**
   * Create a HubSpot form with enhanced error handling
   */
  async createForm(config: HubSpotFormConfig): Promise<boolean> {
    try {
      // Ensure script is loaded
      const scriptLoaded = await this.loadScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load HubSpot script');
      }

      // Check if target element exists
      const targetElement = document.querySelector(config.target);
      if (!targetElement) {
        throw new Error(`Target element ${config.target} not found`);
      }

      // Check current cookie consent status
      const cookieConsent = localStorage.getItem('cookie-consent');
      const hasConsent = cookieConsent === 'accepted';

      console.log('Creating HubSpot form with config:', config);

      // Create the form
      window.hbspt.forms.create({
        ...config,
        disableCookieSubmission: !hasConsent,
        onFormSubmit: () => {
          console.log('HubSpot form submitted successfully');
          
          // Track form submission if consent given
          if (hasConsent && typeof window !== 'undefined' && window.gtag) {
            try {
              window.gtag('event', 'form_submission', {
                'event_category': 'Contact',
                'event_label': 'Contact Form',
                'value': 1,
                'conversion': true
              });
            } catch (error) {
              console.warn('Analytics tracking failed:', error);
            }
          }
          
          config.onFormSubmit?.();
        },
        onFormReady: () => {
          console.log('HubSpot form ready and displayed');
          const formElement = targetElement.querySelector('form');
          if (formElement) {
            formElement.setAttribute('data-testid', 'contact-form');
            formElement.setAttribute('aria-label', 'Contact DataOps Group');
          }
          config.onFormReady?.();
        },
        onFormFailedValidation: () => {
          console.log('HubSpot form validation failed');
          config.onFormFailedValidation?.();
        }
      });

      return true;
    } catch (error) {
      console.error('Error creating HubSpot form:', error);
      return false;
    }
  }

  /**
   * Check if HubSpot is ready
   */
  isReady(): boolean {
    return this.scriptLoaded && !!window.hbspt?.forms;
  }
}

// Export singleton instance
export const hubspotService = new HubSpotService();

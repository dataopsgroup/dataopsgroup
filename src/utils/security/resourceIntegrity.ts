
/**
 * Resource Integrity and Security Validation
 * Ensures external resources are loaded securely
 */

interface ResourceIntegrityCheck {
  url: string;
  expectedHash?: string;
  critical: boolean;
}

class ResourceIntegrityManager {
  private knownResources: Map<string, string> = new Map();

  // Known secure resource hashes (these would be updated during build)
  private trustedResources: ResourceIntegrityCheck[] = [
    {
      url: 'https://fonts.googleapis.com/css2',
      critical: true
    },
    {
      url: 'https://www.googletagmanager.com/gtag/js',
      critical: false
    }
  ];

  // Validate external resources on page load
  validateExternalResources(): void {
    if (typeof document === 'undefined') return;

    const scripts = document.querySelectorAll('script[src]');
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"][href]');
    
    [...scripts, ...stylesheets].forEach(element => {
      const url = element.getAttribute('src') || element.getAttribute('href');
      if (url && this.isExternalResource(url)) {
        this.validateResource(element as HTMLElement, url);
      }
    });
  }

  private isExternalResource(url: string): boolean {
    return url.startsWith('http') && !url.includes(window.location.hostname);
  }

  private validateResource(element: HTMLElement, url: string): void {
    const trusted = this.trustedResources.find(resource => 
      url.includes(resource.url.split('/')[2]) // Match domain
    );

    if (!trusted) {
      console.warn(`🔒 Untrusted external resource detected: ${url}`);
      return;
    }

    // Add integrity attributes where possible
    if (element.tagName === 'SCRIPT' || element.tagName === 'LINK') {
      this.enhanceResourceSecurity(element, url);
    }
  }

  private enhanceResourceSecurity(element: HTMLElement, url: string): void {
    // Add crossorigin attribute for external resources
    if (!element.hasAttribute('crossorigin')) {
      element.setAttribute('crossorigin', 'anonymous');
    }

    // Add referrerpolicy
    if (!element.hasAttribute('referrerpolicy')) {
      element.setAttribute('referrerpolicy', 'no-referrer');
    }

    // For scripts, add additional security attributes
    if (element.tagName === 'SCRIPT') {
      const script = element as HTMLScriptElement;
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.defer = true;
      }
    }
  }

  // Check for suspicious resource modifications
  detectResourceTampering(): void {
    if (typeof document === 'undefined') return;

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'SCRIPT' || element.tagName === 'LINK') {
                const src = element.getAttribute('src') || element.getAttribute('href');
                if (src && this.isExternalResource(src)) {
                  console.warn('🔒 Dynamic external resource added:', src);
                  this.validateResource(element as HTMLElement, src);
                }
              }
            }
          });
        }
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

export const resourceIntegrityManager = new ResourceIntegrityManager();

// Auto-initialize on load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    resourceIntegrityManager.validateExternalResources();
    resourceIntegrityManager.detectResourceTampering();
  });
}

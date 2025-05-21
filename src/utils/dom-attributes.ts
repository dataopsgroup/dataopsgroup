/**
 * Utility for handling DOM attributes consistently across the codebase
 * 
 * This module helps maintain consistency between React's camelCase JSX attributes
 * and the standard lowercase HTML attributes used in DOM APIs
 */

type AttributeMapping = {
  [key: string]: string;
};

/**
 * Maps React camelCase attribute names to standard DOM lowercase attribute names
 */
const REACT_TO_DOM_ATTRIBUTES: AttributeMapping = {
  // Resource loading attributes
  fetchPriority: 'fetchpriority',
  crossOrigin: 'crossorigin',
  referrerPolicy: 'referrerpolicy',
  
  // ARIA attributes (keep camelCase in React)
  ariaLabel: 'aria-label',
  ariaDescribedby: 'aria-describedby',
  ariaHidden: 'aria-hidden',
  
  // Data attributes should use dataset in DOM manipulation
  // but are handled differently in JSX (data-*)
  
  // Common HTML attributes
  tabIndex: 'tabindex',
  autoComplete: 'autocomplete',
  autoFocus: 'autofocus',
  maxLength: 'maxlength',
  acceptCharset: 'accept-charset'
};

/**
 * Sets an attribute on a DOM element using the correct attribute name convention
 * 
 * @param element - The DOM element to set the attribute on
 * @param reactAttributeName - The React camelCase attribute name
 * @param value - The attribute value to set
 */
export const setDOMAttribute = (
  element: HTMLElement, 
  reactAttributeName: string, 
  value: string
): void => {
  // Convert React camelCase attribute name to DOM lowercase if needed
  const domAttributeName = REACT_TO_DOM_ATTRIBUTES[reactAttributeName] || reactAttributeName;
  
  // Use setAttribute for standard DOM API calls
  element.setAttribute(domAttributeName, value);
};

/**
 * Creates a link element with proper attribute naming
 * 
 * @param rel - The rel attribute (e.g., "preload", "prefetch")
 * @param href - The URL to link to
 * @param attributes - Additional attributes to set on the link
 * @returns A configured link element
 */
export const createLinkElement = (
  rel: string,
  href: string,
  attributes: Record<string, string> = {}
): HTMLLinkElement => {
  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;
  
  // Set additional attributes with correct naming convention
  Object.entries(attributes).forEach(([key, value]) => {
    setDOMAttribute(link, key, value);
  });
  
  return link;
};

/**
 * Adds a preload link to the document head
 * 
 * @param href - URL to preload
 * @param as - Resource type (e.g., "image", "script", "style")
 * @param options - Additional options like fetchPriority, etc.
 * @returns The created link element
 */
export const addPreloadLink = (
  href: string, 
  as: string, 
  options: Record<string, string> = {}
): HTMLLinkElement => {
  const link = createLinkElement('preload', href, { as, ...options });
  document.head.appendChild(link);
  return link;
};

/**
 * Helper for JSX to DOM attribute conversion
 * 
 * @param jsxAttributes - Object of React/JSX attributes
 * @returns Object with converted DOM attribute names
 */
export const convertJsxToDOMAttributes = (
  jsxAttributes: Record<string, string>
): Record<string, string> => {
  return Object.entries(jsxAttributes).reduce((result, [key, value]) => {
    const domKey = REACT_TO_DOM_ATTRIBUTES[key] || key;
    result[domKey] = value;
    return result;
  }, {} as Record<string, string>);
};

/**
 * Creates an image element with proper attribute naming
 * 
 * @param src - Image source URL
 * @param alt - Alt text
 * @param attributes - Additional image attributes
 * @returns Configured image element
 */
export const createImageElement = (
  src: string,
  alt: string,
  attributes: Record<string, string | number> = {}
): HTMLImageElement => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'width' || key === 'height') {
      (img as any)[key] = value;
    } else {
      setDOMAttribute(img, key, String(value));
    }
  });
  
  return img;
};

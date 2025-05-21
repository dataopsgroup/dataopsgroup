
import React from 'react';

/**
 * Defer loading of non-critical JavaScript
 * @param src URL of the script to load
 * @param id Optional ID for the script element
 * @param async Whether to load the script asynchronously
 * @param defer Whether to defer loading until after page load
 */
export const loadScript = (src: string, id?: string, async = true, defer = true): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id || '') && id) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = src;
    if (id) script.id = id;
    script.async = async;
    script.defer = defer;
    
    script.onload = () => resolve();
    script.onerror = (error) => reject(new Error(`Failed to load script: ${src}`));
    
    document.body.appendChild(script);
  });
};

/**
 * Load CSS asynchronously to prevent render blocking
 * @param href URL of the stylesheet to load
 * @param id Optional ID for the link element
 */
export const loadStylesheet = (href: string, id?: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id || '') && id) {
      resolve();
      return;
    }
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    if (id) link.id = id;
    
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load stylesheet: ${href}`));
    
    document.head.appendChild(link);
  });
};

/**
 * Preconnect to external domains to speed up subsequent requests
 * @param domain Domain to preconnect to
 * @param crossorigin Whether to include crossorigin attribute
 */
export const preconnect = (domain: string, crossorigin = true): void => {
  if (!domain) return;
  
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = domain;
  if (crossorigin) link.crossOrigin = 'anonymous';
  
  document.head.appendChild(link);
};

/**
 * Lazy load components when they're needed
 * @param importPromise Dynamic import function for the component
 * @param fallback Fallback component to display while loading
 */
export const optimizedLazyLoad = <T>(
  importPromise: () => Promise<{ default: React.ComponentType<T> }>,
  fallback: React.ReactNode = null
): React.LazyExoticComponent<React.ComponentType<T>> => {
  return React.lazy(importPromise);
};

// Helper to determine if a particular feature is supported by the browser
export const supportsFeature = (feature: string): boolean => {
  if (typeof document === 'undefined') return false;
  
  switch (feature) {
    case 'IntersectionObserver':
      return 'IntersectionObserver' in window;
    case 'lazyLoading':
      return 'loading' in HTMLImageElement.prototype;
    case 'webp':
      // This is a simplified check, proper check requires Canvas
      return document.createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0;
    default:
      return false;
  }
};

// Calculate resource size for analytics
export const calculateResourceSize = async (url: string): Promise<number> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const contentLength = response.headers.get('content-length');
    return contentLength ? parseInt(contentLength, 10) : 0;
  } catch (error) {
    console.error('Error calculating resource size:', error);
    return 0;
  }
};

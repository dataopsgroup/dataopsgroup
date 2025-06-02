import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes conditionally.
 * @param inputs The class values to merge.
 * @returns The merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Checks if the current device is a mobile device based on screen width and user agent.
 * @returns True if the device is mobile, false otherwise.
 */
export function isMobileDevice() {
  if (typeof window === 'undefined') return false
  
  return (
    window.innerWidth < 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  )
}

/**
 * Ensures an element meets the minimum tap target size for accessibility.
 * @param element The HTML element to check.
 * @param size The minimum size in pixels (default 44).
 */
export function ensureMinTapSize(element: HTMLElement | null, size = 44) {
  if (!element) return
  
  const rect = element.getBoundingClientRect()
  if (rect.width < size) {
    element.style.minWidth = `${size}px`
  }
  if (rect.height < size) {
    element.style.minHeight = `${size}px`
  }
}

/**
 * Returns an optimized image URL, optionally with width and format parameters.
 * @param src The source image URL.
 * @param width Optional width parameter.
 * @param format Optional image format.
 * @returns The optimized image URL.
 */
export function getOptimizedImageUrl(src: string, width?: number, format?: 'webp' | 'avif' | 'jpg' | 'png') {
  // For demonstration - in real implementation this would be connected to an image optimization service
  // This is a placeholder implementation
  if (!src) return ''
  
  // If it's already using an optimized service, return as is
  if (src.includes('imagecdn') || src.includes('imagekit') || src.includes('cloudinary')) {
    return src
  }
  
  // For local images, potentially append width parameters
  if (width && src.startsWith('/')) {
    return `${src}?w=${width}`
  }
  
  return src
}

/**
 * Detects if the browser supports WebP images.
 * @returns Promise resolving to true if WebP is supported, false otherwise.
 */
export async function supportsWebP(): Promise<boolean> {
  if (!self.createImageBitmap) return false
  
  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
  const blob = await fetch(webpData).then(r => r.blob())
  
  return createImageBitmap(blob).then(() => true, () => false)
}

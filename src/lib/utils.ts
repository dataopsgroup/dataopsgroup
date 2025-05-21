
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to check if device is mobile
export function isMobileDevice() {
  if (typeof window === 'undefined') return false
  
  return (
    window.innerWidth < 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  )
}

// Helper for minimum tap target size (44x44px recommended)
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

// Image optimization helper
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

// Function to detect WebP support
export async function supportsWebP(): Promise<boolean> {
  if (!self.createImageBitmap) return false
  
  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
  const blob = await fetch(webpData).then(r => r.blob())
  
  return createImageBitmap(blob).then(() => true, () => false)
}

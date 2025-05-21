
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

// Image optimization helper with improved quality and format options
export function getOptimizedImageUrl(
  src: string, 
  options?: { 
    width?: number, 
    height?: number,
    quality?: number,
    format?: 'webp' | 'avif' | 'jpg' | 'png' 
  }
) {
  if (!src) return ''
  
  // If it's already using an optimized service, return as is
  if (src.includes('imagecdn') || src.includes('imagekit') || src.includes('cloudinary')) {
    return src
  }
  
  const { width, height, quality = 85, format } = options || {}
  
  // For local images, append parameters
  if (src.startsWith('/')) {
    let optimizedUrl = src
    const params = new URLSearchParams()
    
    if (width) params.append('w', width.toString())
    if (height) params.append('h', height.toString())
    if (quality) params.append('q', quality.toString())
    if (format) params.append('fmt', format)
    
    const paramsString = params.toString()
    if (paramsString) {
      optimizedUrl += `?${paramsString}`
    }
    
    return optimizedUrl
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

// Function to detect AVIF support
export async function supportsAVIF(): Promise<boolean> {
  if (!self.createImageBitmap) return false
  
  try {
    const avifData = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='
    const blob = await fetch(avifData).then(r => r.blob())
    return createImageBitmap(blob).then(() => true, () => false)
  } catch (e) {
    return false
  }
}

// Generate a simple blur hash placeholder
export function generateBlurPlaceholder(width: number, height: number, color = '#f3f4f6'): string {
  // Create a small SVG with the specified dimensions and color
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}" />
    </svg>
  `
  
  // Convert the SVG to a base64 data URL
  return `data:image/svg+xml;base64,${btoa(svg.trim())}`
}

// Calculate image dimensions based on the actual display size
export function calculateImageDimensions(
  containerWidth: number,
  originalWidth: number, 
  originalHeight: number
): { width: number; height: number } {
  const aspectRatio = originalWidth / originalHeight
  const calculatedWidth = Math.min(containerWidth, originalWidth)
  const calculatedHeight = Math.round(calculatedWidth / aspectRatio)
  
  return { width: calculatedWidth, height: calculatedHeight }
}

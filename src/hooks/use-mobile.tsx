
import * as React from "react"
import { devicePerformanceMonitor } from '@/utils/performance/device-performance-monitor';

const MOBILE_BREAKPOINT = 1024 // Changed from 768 to 1024 to include tablets

export function useIsMobile() {
  // Initialize with undefined to prevent hydration mismatches
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const [touchDevice, setTouchDevice] = React.useState<boolean>(false)
  const [deviceType, setDeviceType] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  
  // Use refs to prevent infinite loops from dependency changes
  const timeoutRef = React.useRef<NodeJS.Timeout>()
  const isInitializedRef = React.useRef(false)

  // Move useCallback declarations to top level - CRITICAL FIX
  const handleResize = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      const width = window.innerWidth;
      const newIsMobile = width < MOBILE_BREAKPOINT
      const newDeviceType: 'mobile' | 'tablet' | 'desktop' = 
        width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
      
      setIsMobile(prevIsMobile => {
        // Only update if value actually changed
        if (prevIsMobile !== newIsMobile) {
          console.log('📱 Mobile/Tablet state changed:', newIsMobile, 'width:', width, 'type:', newDeviceType)
          
          // Update device type for performance monitoring
          setDeviceType(newDeviceType);
          
          // Update body class for device-specific CSS
          document.body.className = document.body.className.replace(/device-\w+/g, '');
          document.body.classList.add(`device-${newDeviceType}`);
          
          return newIsMobile
        }
        return prevIsMobile
      })
    }, 100) // 100ms debounce
  }, [])
  
  const detectTouch = React.useCallback(() => {
    if (!isInitializedRef.current) {
      const hasTouch = 'ontouchstart' in window || 
                      navigator.maxTouchPoints > 0 || 
                      (navigator as any).msMaxTouchPoints > 0
      setTouchDevice(hasTouch)
      isInitializedRef.current = true
    }
  }, [])

  React.useEffect(() => {
    // SSR guard - only run in browser
    if (typeof window === 'undefined') return;
    
    // Initial setup - use the callbacks defined above
    handleResize()
    detectTouch()
    
    // Event listeners
    window.addEventListener("resize", handleResize, { passive: true })
    
    return () => {
      window.removeEventListener("resize", handleResize)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [handleResize, detectTouch]) // Include callbacks in dependency array

  return React.useMemo(() => ({
    isMobile: !!isMobile, // Now includes tablets (< 1024px)
    isTouch: touchDevice,
    isDesktop: !isMobile && !touchDevice,
    isInitialized: isMobile !== undefined,
    deviceType, // Add device type to hook return
    // Add performance monitoring method
    logPerformanceMetric: (metricName: 'LCP' | 'FCP' | 'CLS' | 'FID' | 'INP', value: number) => {
      devicePerformanceMonitor.logMetric(metricName, value);
    }
  }), [isMobile, touchDevice, deviceType])
}

// Custom hook for handling touch interactions properly
export function useTouchInteractions(minSize: number = 44) {
  const ref = React.useRef<HTMLElement>(null)
  const { isTouch, isInitialized } = useIsMobile()
  
  React.useEffect(() => {
    // Wait for mobile detection to complete
    if (!isInitialized || typeof window === 'undefined' || !isTouch || !ref.current) return
    
    const element = ref.current
    
    // Ensure the element meets minimum tap target size
    const rect = element.getBoundingClientRect()
    if (rect.width < minSize || rect.height < minSize) {
      // Apply minimum size if too small
      if (rect.width < minSize) {
        element.style.minWidth = `${minSize}px`
      }
      if (rect.height < minSize) {
        element.style.minHeight = `${minSize}px`
      }
    }
    
    // Add appropriate touch action
    element.style.touchAction = 'manipulation'
    
  }, [isTouch, isInitialized, minSize])
  
  return ref
}

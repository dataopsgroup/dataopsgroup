
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize with undefined to prevent hydration mismatches
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const [touchDevice, setTouchDevice] = React.useState<boolean>(false)
  
  // Use refs to prevent infinite loops from dependency changes
  const timeoutRef = React.useRef<NodeJS.Timeout>()
  const isInitializedRef = React.useRef(false)

  React.useEffect(() => {
    // SSR guard - only run in browser
    if (typeof window === 'undefined') return;
    
    // Debounced resize handler to prevent excessive re-renders
    const handleResize = React.useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT
        setIsMobile(prevIsMobile => {
          // Only update if value actually changed
          if (prevIsMobile !== newIsMobile) {
            console.log('📱 Mobile state changed:', newIsMobile)
            return newIsMobile
          }
          return prevIsMobile
        })
      }, 100) // 100ms debounce
    }, [])
    
    // Touch detection with caching
    const detectTouch = React.useCallback(() => {
      if (!isInitializedRef.current) {
        const hasTouch = 'ontouchstart' in window || 
                        navigator.maxTouchPoints > 0 || 
                        (navigator as any).msMaxTouchPoints > 0
        setTouchDevice(hasTouch)
        isInitializedRef.current = true
      }
    }, [])
    
    // Initial setup
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
  }, []) // Empty dependency array to prevent re-initialization

  return React.useMemo(() => ({
    isMobile: !!isMobile,
    isTouch: touchDevice,
    isDesktop: !isMobile && !touchDevice,
    isInitialized: isMobile !== undefined
  }), [isMobile, touchDevice])
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

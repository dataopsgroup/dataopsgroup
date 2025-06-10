
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const [touchDevice, setTouchDevice] = React.useState<boolean>(false)

  React.useEffect(() => {
    // SSR guard - only run in browser
    if (typeof window === 'undefined') return;
    
    // Check if it's a mobile device by screen size
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check if it's a touch device
    const checkTouch = () => {
      setTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        (navigator as any).msMaxTouchPoints > 0
      )
    }
    
    // Update on resize
    mql.addEventListener("change", onChange)
    window.addEventListener("resize", checkTouch)
    
    // Initial check
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    checkTouch()
    
    return () => {
      mql.removeEventListener("change", onChange)
      window.removeEventListener("resize", checkTouch)
    }
  }, [])

  return {
    isMobile: !!isMobile,
    isTouch: touchDevice,
    isDesktop: !isMobile && !touchDevice
  }
}

// Custom hook for handling touch interactions properly
export function useTouchInteractions(minSize: number = 44) {
  const ref = React.useRef<HTMLElement>(null)
  const { isTouch } = useIsMobile()
  
  React.useEffect(() => {
    // SSR guard - only run in browser
    if (typeof window === 'undefined' || !isTouch || !ref.current) return
    
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
    
  }, [isTouch, minSize])
  
  return ref
}

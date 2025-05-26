import { useEffect } from 'react';
import { markBusinessEvent, measureBusinessTiming, trackUserInteraction } from '@/utils/performance/business-metrics';

// Extending PerformanceEntry with properties specific to resource timing
interface PerformanceResourceTimingEntry extends PerformanceResourceTiming {
  initiatorType: string;
  duration: number;
}

/**
 * Hook to track business events and user interactions
 */
export const usePerformanceMonitoring = () => {
  // Mark initial component render as a business event
  useEffect(() => {
    const componentName = 'unknown'; // In real usage, pass in component name
    markBusinessEvent(`render_${componentName}`);
    
    return () => {
      markBusinessEvent(`unmount_${componentName}`);
    };
  }, []);
  
  return {
    /**
     * Mark a business event with a timestamp
     * @param eventName Name of the event to mark
     */
    markEvent: (eventName: string) => {
      markBusinessEvent(eventName);
    },
    
    /**
     * Measure time between two business events
     * @param startMark Name of the starting event
     * @param endMark Name of the ending event
     * @param name Name to give this measurement
     */
    measureTiming: (startMark: string, endMark: string, name: string) => {
      measureBusinessTiming(startMark, endMark, name);
    },
    
    /**
     * Track a user interaction with timing
     * @param interactionType Type of interaction (click, hover, etc)
     * @param elementId Optional ID of the element interacted with
     */
    trackInteraction: (interactionType: string, elementId?: string) => {
      trackUserInteraction(interactionType, elementId);
    }
  };
};

/**
 * Hook specifically for monitoring critical user flows
 * @param flowName Name of the flow being monitored
 */
export const useUserFlowMonitoring = (flowName: string) => {
  const { markEvent } = usePerformanceMonitoring();
  
  // Mark the start of a user flow
  useEffect(() => {
    markEvent(`flow_start_${flowName}`);
    
    return () => {
      markEvent(`flow_exit_${flowName}`);
    };
  }, [flowName, markEvent]);
  
  return {
    /**
     * Mark a step in the flow
     * @param stepName Name of the step in the flow
     */
    markStep: (stepName: string) => {
      markEvent(`flow_${flowName}_step_${stepName}`);
    },
    
    /**
     * Mark the flow as complete
     */
    completeFlow: () => {
      markEvent(`flow_complete_${flowName}`);
    },
    
    /**
     * Mark the flow as abandoned
     * @param reason Optional reason for abandonment
     */
    abandonFlow: (reason?: string) => {
      markEvent(`flow_abandon_${flowName}${reason ? `_${reason}` : ''}`);
    }
  };
};

/**
 * Hook to measure resource loading performance
 */
export const useResourceMonitoring = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }
    
    try {
      // Observer for resource timing entries
      const resourceObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        
        entries.forEach(entry => {
          // Type assertion to access resource timing specific properties
          const resourceEntry = entry as PerformanceResourceTimingEntry;
          
          // Filter to important resources only
          if (resourceEntry.initiatorType === 'fetch' || 
              resourceEntry.initiatorType === 'xmlhttprequest' || 
              (resourceEntry.initiatorType === 'img' && resourceEntry.duration > 1000)) {
            console.debug('Slow resource load:', resourceEntry);
          }
        });
      });
      
      resourceObserver.observe({ type: 'resource', buffered: true });
      
      return () => {
        resourceObserver.disconnect();
      };
    } catch (e) {
      console.error('Failed to setup resource monitoring:', e);
    }
  }, []);
};

export default usePerformanceMonitoring;

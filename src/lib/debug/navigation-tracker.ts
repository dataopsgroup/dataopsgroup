
/**
 * Navigation tracking and debugging utility
 */

interface NavigationEvent {
  timestamp: number;
  type: 'pushState' | 'replaceState' | 'popstate' | 'load';
  from: string;
  to: string;
  success: boolean;
  error?: string;
}

class NavigationTracker {
  private events: NavigationEvent[] = [];
  private maxEvents = 50;

  constructor() {
    this.setupTracking();
  }

  private setupTracking() {
    if (typeof window === 'undefined') return;

    // Track initial page load
    this.addEvent({
      timestamp: Date.now(),
      type: 'load',
      from: '',
      to: window.location.pathname,
      success: true
    });

    // Override history methods
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = (...args) => {
      const from = window.location.pathname;
      try {
        originalPushState.apply(history, args);
        const to = window.location.pathname;
        this.addEvent({
          timestamp: Date.now(),
          type: 'pushState',
          from,
          to,
          success: true
        });
      } catch (error) {
        this.addEvent({
          timestamp: Date.now(),
          type: 'pushState',
          from,
          to: args[2] as string || from,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
        throw error;
      }
    };

    history.replaceState = (...args) => {
      const from = window.location.pathname;
      try {
        originalReplaceState.apply(history, args);
        const to = window.location.pathname;
        this.addEvent({
          timestamp: Date.now(),
          type: 'replaceState',
          from,
          to,
          success: true
        });
      } catch (error) {
        this.addEvent({
          timestamp: Date.now(),
          type: 'replaceState',
          from,
          to: args[2] as string || from,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
        throw error;
      }
    };

    // Track popstate events
    window.addEventListener('popstate', () => {
      this.addEvent({
        timestamp: Date.now(),
        type: 'popstate',
        from: this.getLastEvent()?.to || '',
        to: window.location.pathname,
        success: true
      });
    });
  }

  private addEvent(event: NavigationEvent) {
    this.events.push(event);
    if (this.events.length > this.maxEvents) {
      this.events.shift();
    }
    console.log('🧭 Navigation:', event);
  }

  private getLastEvent(): NavigationEvent | undefined {
    return this.events[this.events.length - 1];
  }

  getEvents(): NavigationEvent[] {
    return [...this.events];
  }

  getFailedNavigations(): NavigationEvent[] {
    return this.events.filter(event => !event.success);
  }

  clearEvents() {
    this.events = [];
  }
}

export const navigationTracker = new NavigationTracker();

export const logNavigationState = () => {
  console.group('🧭 Navigation Debug Info');
  console.log('Current URL:', window.location.href);
  console.log('Current pathname:', window.location.pathname);
  console.log('Recent navigation events:', navigationTracker.getEvents().slice(-10));
  console.log('Failed navigations:', navigationTracker.getFailedNavigations());
  console.groupEnd();
};

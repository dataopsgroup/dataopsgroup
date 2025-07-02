
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface DeviceOptimizerProps {
  children: React.ReactNode;
}

interface DeviceCapabilities {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  supportsWebP: boolean;
  connectionType: 'slow' | 'fast' | 'unknown';
  screenWidth: number;
}

const DeviceOptimizer: React.FC<DeviceOptimizerProps> = ({ children }) => {
  const { isMobile, isTouch, isInitialized } = useIsMobile();
  const [deviceCapabilities, setDeviceCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    supportsWebP: false,
    connectionType: 'unknown',
    screenWidth: 1024
  });

  useEffect(() => {
    if (!isInitialized || typeof window === 'undefined') return;

    const detectDeviceCapabilities = () => {
      const screenWidth = window.innerWidth;
      const isMobileDevice = screenWidth < 768;
      const isTabletDevice = screenWidth >= 768 && screenWidth < 1024;
      const isDesktopDevice = screenWidth >= 1024;

      // Detect WebP support
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const supportsWebP = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;

      // Detect connection speed
      let connectionType: 'slow' | 'fast' | 'unknown' = 'unknown';
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType === '4g' || connection.effectiveType === '5g') {
          connectionType = 'fast';
        } else if (connection.effectiveType === '2g' || connection.effectiveType === '3g') {
          connectionType = 'slow';
        }
      }

      setDeviceCapabilities({
        isMobile: isMobileDevice,
        isTablet: isTabletDevice,
        isDesktop: isDesktopDevice,
        supportsWebP,
        connectionType,
        screenWidth
      });

      // Add device class to body for CSS targeting
      document.body.className = document.body.className.replace(/device-\w+/g, '');
      if (isMobileDevice) {
        document.body.classList.add('device-mobile');
      } else if (isTabletDevice) {
        document.body.classList.add('device-tablet');
      } else {
        document.body.classList.add('device-desktop');
      }

      // Add connection type class
      document.body.className = document.body.className.replace(/connection-\w+/g, '');
      document.body.classList.add(`connection-${connectionType}`);

      console.log('🔍 Device Optimizer:', {
        isMobileDevice,
        isTabletDevice,
        isDesktopDevice,
        supportsWebP,
        connectionType,
        screenWidth
      });
    };

    detectDeviceCapabilities();
    window.addEventListener('resize', detectDeviceCapabilities, { passive: true });

    return () => {
      window.removeEventListener('resize', detectDeviceCapabilities);
    };
  }, [isInitialized]);

  // Don't render until device detection is complete
  if (!isInitialized) {
    return <div className="loading-placeholder h-screen" />;
  }

  return (
    <div data-device-type={deviceCapabilities.isMobile ? 'mobile' : deviceCapabilities.isTablet ? 'tablet' : 'desktop'}>
      {children}
    </div>
  );
};

export default DeviceOptimizer;

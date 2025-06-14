
/**
 * Route health checker to validate routing configuration
 */

interface RouteValidationResult {
  path: string;
  exists: boolean;
  isLazy: boolean;
  componentName?: string;
  error?: string;
}

export const validateRouteHealth = async (): Promise<RouteValidationResult[]> => {
  const criticalRoutes = [
    '/',
    '/services',
    '/services/dataops-implementation',
    '/services/analytics-bi',
    '/services/team-training',
    '/services/marketing-operations-revops',
    '/insights',
    '/contact',
    '/about',
    '/approach',
    '/case-studies'
  ];

  const results: RouteValidationResult[] = [];

  for (const route of criticalRoutes) {
    try {
      // Test if route can be navigated to
      const testResult: RouteValidationResult = {
        path: route,
        exists: false,
        isLazy: false
      };

      // Check if route exists in router configuration
      // This is a basic check - in a real implementation you'd inspect the router
      const routeElement = document.querySelector(`[data-route="${route}"]`);
      testResult.exists = routeElement !== null;

      results.push(testResult);
    } catch (error) {
      results.push({
        path: route,
        exists: false,
        isLazy: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  return results;
};

export const logRouteHealth = async () => {
  console.group('🔍 Route Health Check');
  const results = await validateRouteHealth();
  
  const healthyRoutes = results.filter(r => r.exists);
  const unhealthyRoutes = results.filter(r => !r.exists);
  
  console.log('✅ Healthy routes:', healthyRoutes.length);
  console.log('❌ Problematic routes:', unhealthyRoutes.length);
  
  if (unhealthyRoutes.length > 0) {
    console.warn('Problematic routes:', unhealthyRoutes);
  }
  
  console.groupEnd();
  
  return results;
};

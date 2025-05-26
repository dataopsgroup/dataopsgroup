
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

interface OptimizedRedirectProps {
  to: string;
  replace?: boolean;
}

const OptimizedRedirect = React.memo(({ to, replace = true }: OptimizedRedirectProps) => {
  return <Navigate to={to} replace={replace} />;
});

OptimizedRedirect.displayName = 'OptimizedRedirect';

export default OptimizedRedirect;

// Specialized component for AMP redirects that need route params
export const AmpRedirectHandler = React.memo(() => {
  const { postId } = useParams();
  const cleanPostId = postId ? postId.split('?')[0] : '';
  return <Navigate to={`/insights/${cleanPostId}`} replace />;
});

AmpRedirectHandler.displayName = 'AmpRedirectHandler';

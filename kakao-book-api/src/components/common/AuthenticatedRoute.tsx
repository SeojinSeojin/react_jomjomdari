import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';

function AuthenticatedRoute({ component }: { component: ReactElement }) {
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated) {
    return <>{component}</>;
  }

  return <Navigate to='/' />;
}

export default AuthenticatedRoute;

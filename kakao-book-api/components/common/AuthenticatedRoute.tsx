import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';

function AuthenticatedRoute({ component: RouteComponent }) {
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated) {
    return <RouteComponent />;
  }

  return <Navigate to='/' />;
}

export default AuthenticatedRoute;

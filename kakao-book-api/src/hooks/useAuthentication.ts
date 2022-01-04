import { useEffect, useState } from 'react';

export function useAuthentication() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) localStorage.setItem('token', token);
  }, [token]);

  return {
    token,
    setToken,
    resetToken: () => setToken(null),
    isAuthenticated: typeof token === 'string',
  };
}

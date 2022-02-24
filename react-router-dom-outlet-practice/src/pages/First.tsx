import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function First() {
  const [isOnceOpened, setIsOnceOpened] = useState([]);
  useEffect(() => {
    console.log('first useeffect');
  }, [isOnceOpened]);

  return (
    <div>
      first
      <Link to='./second'>Second</Link>
      <Outlet context={{ setIsOnceOpenedTrue: () => setIsOnceOpened([]) }} />
    </div>
  );
}

export default First;

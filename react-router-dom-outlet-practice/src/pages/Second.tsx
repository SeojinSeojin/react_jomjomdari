import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router';

interface OutletContextProps {
  setIsOnceOpenedTrue: () => void;
}

function Second() {
  const { setIsOnceOpenedTrue } = useOutletContext<OutletContextProps>();

  const navigate = useNavigate();
  useEffect(() => {
    return () => setIsOnceOpenedTrue();
  }, []);

  return (
    <div>
      <div onClick={() => navigate(-1)}>sss</div>
    </div>
  );
}

export default Second;

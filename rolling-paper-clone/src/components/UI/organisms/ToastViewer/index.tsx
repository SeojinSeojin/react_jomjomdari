/** @jsxImportSource @emotion/react */
import React from 'react';
import { useToast } from '../../../../hooks/toast';
import Toast from '../../atoms/Toast';

const ToastViewer = () => {
  const { toasts } = useToast();

  return (
    <div style={{ position: 'absolute', top: 0, right: 0 }}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastViewer;

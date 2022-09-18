/** @jsxImportSource @emotion/react */
import React from 'react';
import { useToast } from '../../../../hooks/toast';
import { ToastProps } from '../../../../states/toast';
import { toastStyle } from './style';

const Toast = (toast: ToastProps) => {
  const { removeToast } = useToast();

  return (
    <div
      css={toastStyle}
      onAnimationEnd={() => {
        removeToast(toast.id);
      }}
    >
      {toast.message}
    </div>
  );
};

export default Toast;

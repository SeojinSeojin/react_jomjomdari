import { useRecoilState } from 'recoil';
import { ToastProps, toastState } from '../states/toast';
import { v4 as uuidV4 } from 'uuid';

export const useToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState);

  const removeToast = (toastID: ToastProps['id']) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastID));
  };

  const fireToast = (toast: Omit<ToastProps, 'id'>) => {
    const toastId = uuidV4();
    setToasts((prev) => [...prev, { ...toast, id: toastId }]);
  };

  return { toasts, fireToast, removeToast };
};

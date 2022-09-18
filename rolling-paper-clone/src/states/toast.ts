import { atom } from 'recoil';

export type ToastProps = {
  id: string;
  message: string;
};

export const toastState = atom<ToastProps[]>({
  key: 'toastState',
  default: [],
});

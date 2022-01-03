import { atom } from 'recoil';

type PaperProps = {
  body: string;
  sender: string;
  color: string;
};

export const paperState = atom<PaperProps[]>({
  key: 'paperState',
  default: [],
});

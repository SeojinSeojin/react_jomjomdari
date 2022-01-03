import { atom } from 'recoil';

type StickerProps = {
  positionX: number;
  positionY: number;
  emoji: string;
};

export const stickerState = atom<StickerProps[]>({
  key: 'stickerState',
  default: [],
});

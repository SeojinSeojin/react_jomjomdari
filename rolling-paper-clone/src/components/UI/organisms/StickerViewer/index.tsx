import React from 'react';
import { useRecoilValue } from 'recoil';
import { stickerState } from '../../../../states/stickers';
import Sticker from '../../atoms/Sticker';

function StickerViewer() {
  const stickers = useRecoilValue(stickerState);
  return (
    <>
      {stickers.map((sticker, idx) => (
        <Sticker
          key={idx}
          positionX={sticker.positionX}
          positionY={sticker.positionY}
          emoji={sticker.emoji}
        />
      ))}
    </>
  );
}

export default StickerViewer;

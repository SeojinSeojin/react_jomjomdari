/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { stickerState } from '../../../../states/stickers';
import Button from '../../atoms/Button';

function StickerSelector() {
  const [selectedSticker, setSelectedSticker] = useState<string | null>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const setStickers = useSetRecoilState(stickerState);
  const toggleSelectedSticker = (sticker: string) => {
    if (sticker === selectedSticker) {
      setSelectedSticker(null);
    } else {
      setSelectedSticker(sticker);
    }
  };

  useEffect(() => {
    const saveSticker = (e: MouseEvent) => {
      selectedSticker &&
        setStickers((prev) => [
          ...prev,
          { emoji: selectedSticker, positionX: mouseX, positionY: mouseY },
        ]);
    };
    selectedSticker && document.addEventListener('click', saveSticker);

    return () => {
      document.removeEventListener('click', saveSticker);
    };
  }, [selectedSticker, mouseX, mouseY, setStickers]);

  useEffect(() => {
    const trackMouse = (e: MouseEvent) => {
      const eventObject = (window.event ?? e) as MouseEvent;
      setMouseX(eventObject.clientX);
      setMouseY(eventObject.clientY + document.documentElement.scrollTop);
    };
    selectedSticker && document.addEventListener('mousemove', trackMouse);

    return () => {
      document.removeEventListener('mousemove', trackMouse);
    };
  }, [selectedSticker]);
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div>스티커 누르기</div>
      <div css={{ display: 'flex', fontSize: '20px' }}>
        {['👍', '💖', '🤪'].map((sticker) => (
          <Button
            key={sticker}
            content={sticker}
            backgroundColor='white'
            selected={selectedSticker === sticker}
            selectedLineColor='black'
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              toggleSelectedSticker(sticker);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default StickerSelector;

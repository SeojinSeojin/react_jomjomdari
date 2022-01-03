/** @jsxImportSource @emotion/react */
import React from 'react';
import StickerSelector from '../../UI/molecules/StickerSelector';
import PaperInput from '../../UI/organisms/PaperInput';
import PaperReceiver from '../../UI/organisms/PaperReceiver';
import PaperViewer from '../../UI/organisms/PaperViewer';
import StickerViewer from '../../UI/organisms/StickerViewer';

function HomePage() {
  return (
    <>
      <StickerViewer />
      <div css={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <PaperReceiver />
        <PaperInput />
        <StickerSelector />
        <PaperViewer />
      </div>
    </>
  );
}

export default HomePage;

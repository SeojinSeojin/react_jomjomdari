/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useLocalStorage } from '../../../hooks/localStorage';
import { paperState } from '../../../states/papers';
import { PaperProps } from '../../UI/molecules/Paper';
import StickerSelector from '../../UI/molecules/StickerSelector';
import PaperInput from '../../UI/organisms/PaperInput';
import PaperViewer from '../../UI/organisms/PaperViewer';
import StickerViewer from '../../UI/organisms/StickerViewer';
import ToastViewer from '../../UI/organisms/ToastViewer';

function HomePage() {
  const { readItems: readPaperFromStorage } =
    useLocalStorage<PaperProps>('paper');
  const setPaperItems = useSetRecoilState(paperState);

  useEffect(() => {
    const storagePapers = readPaperFromStorage();
    setPaperItems(storagePapers);
  }, [readPaperFromStorage, setPaperItems]);

  return (
    <>
      <StickerViewer />
      <ToastViewer />
      <div css={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <PaperInput />
        <StickerSelector />
        <PaperViewer />
      </div>
    </>
  );
}

export default HomePage;

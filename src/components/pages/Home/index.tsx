/** @jsxImportSource @emotion/react */
import React from 'react';
import PaperReceiver from '../../UI/organisms/PaperReceiver';
import PaperViewer from '../../UI/organisms/PaperViewer';

function HomePage() {
  return (
    <div css={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <PaperReceiver />
      <PaperViewer />
    </div>
  );
}

export default HomePage;

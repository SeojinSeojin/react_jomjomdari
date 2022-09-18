/** @jsxImportSource @emotion/react */
import React from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { paperState } from '../../../../states/papers';
import Button from '../../atoms/Button';
import Paper from '../../molecules/Paper';
import { wrapperStyle } from './style';

function PaperViewer() {
  const [gridColumns, setGridColumns] = useState<number>(1);
  const papers = useRecoilValue(paperState);

  return (
    <>
      <div css={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div>정렬 방식 선택</div>
        {[1, 2, 3].map((number) => (
          <Button
            key={number}
            content={`${number}`}
            onClick={() => setGridColumns(number)}
            backgroundColor='#EEEEEE'
            selected={number === gridColumns}
            selectedLineColor='#DDDDDD'
          />
        ))}
      </div>
      <div css={wrapperStyle({ gridColumns })}>
        {papers.map((paper) => (
          <Paper props={paper} />
        ))}
      </div>
    </>
  );
}

export default PaperViewer;

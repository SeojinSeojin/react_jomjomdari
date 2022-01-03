/** @jsxImportSource @emotion/react */
import React from 'react';
import { useState } from 'react';
import Button from '../../atoms/Button';
import Paper from '../../molecules/Paper';
import { wrapperStyle } from './style';

type PaperProps = {
  body: string;
  sender: string;
};

function PaperViewer() {
  const [pages, setPages] = useState<PaperProps[]>([
    { body: '안녕', sender: '안녕' },
    { body: '안녕', sender: '안녕' },
    { body: '안녕', sender: '안녕' },
    { body: '안녕', sender: '안녕' },
    { body: '안녕', sender: '안녕' },
  ]);
  const [gridColumns, setGridColumns] = useState<number>(1);

  return (
    <>
      <div css={{ display: 'flex', gap: '20px' }}>
        {[1, 2, 3].map((number) => (
          <Button
            content={`${number}`}
            onClick={() => setGridColumns(number)}
            backgroundColor='#EEEEEE'
            selected={number === gridColumns}
            selectedLineColor='#DDDDDD'
          />
        ))}
      </div>
      <div css={wrapperStyle({ gridColumns })}>
        {pages.map((page: PaperProps) => (
          <Paper props={page} />
        ))}
      </div>
    </>
  );
}

export default PaperViewer;

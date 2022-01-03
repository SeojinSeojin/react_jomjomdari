/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { paperState } from '../../../../states/papers';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

function PaperInput() {
  const setPaper = useSetRecoilState(paperState);
  const uploadPaper = () => {
    setPaper((prev) => [...prev, { body, sender, color }]);
  };
  const [body, setBody] = useState('');
  const [sender, setSender] = useState('');
  const [color, setColor] = useState('#eeeeee');
  return (
    <div
      css={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Input
        onSubmit={uploadPaper}
        onChange={(value) => setBody(value)}
        placeholder='내용'
      />
      <Input
        onSubmit={uploadPaper}
        onChange={(value) => setSender(value)}
        placeholder='작성자'
      />
      <div css={{ display: 'flex', gap: '12px' }}>
        {['#FED3DC', '#E2FFE9', '#FFFEAF'].map((newColor) => (
          <Button
            content={`${newColor}`}
            onClick={() => setColor(newColor)}
            backgroundColor={newColor}
            selected={newColor === color}
            selectedLineColor='#2E4C6D'
          />
        ))}
      </div>
      <div css={{ fontSize: 26, cursor: 'pointer' }} onClick={uploadPaper}>
        +
      </div>
    </div>
  );
}

export default PaperInput;

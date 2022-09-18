/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useLocalStorage } from '../../../../hooks/localStorage';
import { useToast } from '../../../../hooks/toast';
import { paperState } from '../../../../states/papers';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { PaperProps } from '../../molecules/Paper';

function PaperInput() {
  const setPaper = useSetRecoilState(paperState);
  const { fireToast } = useToast();
  const { writeItem: writePaperToStorage } =
    useLocalStorage<PaperProps>('paper');

  const uploadPaper = () => {
    if (body !== '' && sender !== '') {
      const newPaper = { body, sender, color };
      setPaper((prev) => [...prev, newPaper]);
      writePaperToStorage(newPaper);
    } else {
      warnEmptyBody();
    }
  };

  const warnEmptyBody = () => {
    fireToast({ message: '제목 혹은 작성자가 비어 있습니다' });
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
        label='내용'
      />
      <Input
        onSubmit={uploadPaper}
        onChange={(value) => setSender(value)}
        placeholder='작성자'
        label='작성자'
      />
      <div css={{ display: 'flex', gap: '12px' }}>
        {['#FED3DC', '#E2FFE9', '#FFFEAF'].map((newColor) => (
          <Button
            key={newColor}
            content={`${newColor}`}
            onClick={() => setColor(newColor)}
            backgroundColor={newColor}
            selected={newColor === color}
            selectedLineColor='#2E4C6D'
          />
        ))}
      </div>
      <div css={{ fontSize: 26, cursor: 'pointer' }} onClick={uploadPaper}>
        작성하기
      </div>
    </div>
  );
}

export default PaperInput;

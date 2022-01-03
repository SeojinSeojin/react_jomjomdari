/** @jsxImportSource @emotion/react */
import React from 'react';
import { wrapperStyle } from './style';

type PaperProps = {
  body: string;
  sender: string;
  color: string;
};

function Paper({ props }: { props: PaperProps }) {
  const { body, sender, color } = props;
  return (
    <div css={wrapperStyle({ color })}>
      <div>{body}</div>
      <div>{sender}</div>
    </div>
  );
}

export default Paper;

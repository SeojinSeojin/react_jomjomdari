/** @jsxImportSource @emotion/react */
import React from 'react';
import { wrapperStyle } from './style';

type PaperProps = {
  body: string;
  sender: string;
};

function Paper({ props }: { props: PaperProps }) {
  const { body, sender } = props;
  return (
    <div css={wrapperStyle}>
      <div>{body}</div>
      <div>{sender}</div>
    </div>
  );
}

export default Paper;

/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

function HomePage() {
  const wrapperStyle = css`
    background-color: black;
  `;
  return <div css={wrapperStyle}>hello</div>;
}

export default HomePage;

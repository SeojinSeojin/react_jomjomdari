import { css } from '@emotion/react';

export const wrapperStyle = css`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  background-color: #eaedee;
  & div:nth-child(2) {
    margin-top: auto;
  }
`;

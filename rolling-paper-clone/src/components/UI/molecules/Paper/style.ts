import { css } from '@emotion/react';

type wrapperProps = {
  color: string;
};
export const wrapperStyle = (props: wrapperProps) => css`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  background-color: ${props.color};
  & div:nth-child(2) {
    margin-top: auto;
  }
`;

import { css } from '@emotion/react';

type wrapperProps = {
  gridColumns: number;
};
export const wrapperStyle = (props: wrapperProps) => css`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(${props.gridColumns}, 1fr);
`;

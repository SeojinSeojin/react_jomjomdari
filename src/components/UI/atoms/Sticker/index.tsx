import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import React from 'react';

type stickerStyles = {
  positionX: number;
  positionY: number;
};
type stickerProps = stickerStyles & {
  emoji: string;
};

const stickerStyle = (props: stickerStyles) => css`
  position: absolute;
  font-size: 30px;
  left: ${props.positionX}px;
  top: ${props.positionY}px;
`;

function Sticker(props: stickerProps) {
  const { emoji, ...styles } = props;
  return <div css={stickerStyle({ ...styles })}>{emoji}</div>;
}

export default Sticker;

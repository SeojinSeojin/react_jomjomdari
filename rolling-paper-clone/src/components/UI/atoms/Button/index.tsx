/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type ButtonStyles = {
  backgroundColor: string;
  selected: boolean;
  selectedLineColor: string;
};

type ButtonProps = ButtonStyles & {
  content: string;
  onClick: () => void;
};

const buttonStyle = (props: ButtonStyles) => css`
  background-color: ${props.backgroundColor};
  border-radius: 20px;
  padding: 10px 20px;
  box-sizing: content-box;
  cursor: pointer;
  border: 2px solid ${props.selected ? props.selectedLineColor : 'transparent'};
`;

function Button(props: ButtonProps) {
  const { content, onClick, ...styles } = props;
  return (
    <div onClick={onClick} css={buttonStyle({ ...styles })}>
      {content}
    </div>
  );
}

export default Button;

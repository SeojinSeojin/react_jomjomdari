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
  ${props.selected && `border: 2px solid ${props.selectedLineColor};`}
`;

function Button(props: ButtonProps) {
  const { content, onClick, backgroundColor, selected, selectedLineColor } =
    props;
  return (
    <div
      onClick={onClick}
      css={buttonStyle({ backgroundColor, selected, selectedLineColor })}
    >
      {content}
    </div>
  );
}

export default Button;

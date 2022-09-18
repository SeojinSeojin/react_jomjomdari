import { css, keyframes } from '@emotion/react';

const TOAST_ANIMATION_DURATION = 2;

const toastFadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const toastStyle = css`
  width: 300px;
  padding: 12px;
  text-align: center;
  border-radius: 4px;
  background-color: #eeeeee;
  opacity: 0;
  animation-duration: ${TOAST_ANIMATION_DURATION}s;
  animation-name: ${toastFadeInOut};
  animation-iteration-count: 1;
`;

import { css } from '@emotion/core';

const fadeIn = css`
  @keyframes fade {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  animation: 1s fade ease-in-out;
`;

export default fadeIn;

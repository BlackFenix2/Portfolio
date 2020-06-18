import React from 'react';
import TabLink from 'src/components/TabLink';
import { css } from '@emotion/core';

const Credits = () => (
  <>
    <h1>Licensing</h1>
    <div>
      images/vectors
      <p>
        Images provided by unsplash -
        <TabLink href="https://unsplash.com">
          <span
            css={css`
              text-decoration: underline;
            `}
          >
            unsplash.com
          </span>
        </TabLink>
      </p>
    </div>
  </>
);

export default Credits;

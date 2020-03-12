import React from 'react';
import TabLink from 'src/components/TabLink';
import { css } from 'linaria';

const Credits = () => (
  <>
    <h1>Licensing</h1>
    <div>
      images/vectors
      <p>
        Images provided by unsplash -
        <TabLink href="https://unsplash.com">
          <span
            className={css`
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

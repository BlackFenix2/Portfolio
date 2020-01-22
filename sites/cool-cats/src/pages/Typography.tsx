import * as React from 'react';
import Seo from 'src/components/SEO';
import { css } from '@emotion/core';

const Typography = () => (
  <>
    <Seo title="Typography" />
    <div
      css={css`
        display: flex;
        justify-content: space-around;
      `}
    >
      <div>
        <p>Paragraph</p>
        <ul>
          <li>List Item</li>
          <li>List Item</li>
          <ul>
            <li>indented item</li>
          </ul>
        </ul>
      </div>
      <div>
        <h1>Heading 1</h1>
        <p>Paragraph</p>
        <h2>Heading 2</h2>
        <p>Paragraph</p>
        <h3>Heading 3</h3>
        <p>Paragraph</p>
        <h4>Heading 4</h4>
        <p>Paragraph</p>
        <h5>Heading 5</h5>
        <p>Paragraph</p>
        <h6>Heading 6</h6>
        <p>Paragraph</p>
      </div>
    </div>
  </>
);

export default Typography;

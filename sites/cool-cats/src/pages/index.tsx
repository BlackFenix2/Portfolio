import React from 'react';

import SEO from 'src/components/SEO';
import { css } from '@emotion/react';

import img from 'src/lib/img/cat-sunglasses.jpg';
import fadeIn from 'src/components/animations/fadeIn';

const style = css`
  width: 200px;
  height: 100%;
  ${fadeIn}
`;
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Cool Cats (WIP)</h1>
    <p>Pardon our appearance, our website is under construction </p>

    <div>
      <img src={img} alt="Construction banner" css={style} />
    </div>
  </>
);

export default IndexPage;

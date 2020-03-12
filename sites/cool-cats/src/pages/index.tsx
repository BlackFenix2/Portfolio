import React from 'react';

import SEO from 'src/components/SEO';
import { css, cx } from 'linaria';

import img from 'src/lib/img/cat-sunglasses.jpg';
import fadeIn from 'src/components/animations/fadeIn';

const style = css`
  width: 100%;
  height: 100%;
`;
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Cool Cats (WIP)</h1>
    <p>Pardon our appearance, our website is under construction </p>

    <div>
      <img src={img} alt="Construction banner" className={cx(style, fadeIn)} />
    </div>
  </>
);

export default IndexPage;

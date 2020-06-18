import React from 'react';
import SEO from 'src/components/SEO';
import img from 'src/lib/img/cat-sunglasses.jpg';
import fadeIn from 'src/components/animations/fadeIn';
import { css } from '@emotion/core';

const style = css`
  height: 60vh;
`;
const CoolCats = () => (
  <>
    <SEO title="About Me" />
    <h1>About me</h1>
    <div>
      <img src={img} alt="Construction banner" css={style && fadeIn} />
      <p>Ay yo, i am Chris P. the cool cat!</p>
    </div>
  </>
);

export default CoolCats;

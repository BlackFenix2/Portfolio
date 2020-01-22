import React from 'react';
import { css } from '@emotion/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TabLink from 'src/components/TabLink';

export const Footer = () => (
  <>
    <div>
      <TabLink href="https://github.com/BlackFenix2/Cool-Cats">
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
      </TabLink>
    </div>
    <div>
      <span>
        Ernie Francis &copy;
        {new Date().getFullYear()}
      </span>
    </div>
  </>
);
export default Footer;

import React from 'react';

import { FaGithub } from 'react-icons/fa';
import TabLink from 'src/components/TabLink';

export const Footer: React.FC = () => (
  <>
    <div>
      <TabLink href="https://github.com/BlackFenix2/Cool-Cats">
        <FaGithub size="2em" />
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

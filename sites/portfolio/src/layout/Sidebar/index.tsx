import { Divider, List, Box } from '@material-ui/core';
import { Home, AccountTree, Work } from '@material-ui/icons';

import React from 'react';
import { css } from '@emotion/core';
import ListItemLink from './ListItemLink';
import ProfileStub from './ProfileStub';

const styles = {
  nestedStyle: css`
    padding-left: 32px !important;
  `,
};

const SideBar = () => {
  return (
    <>
      <Box p={2}>
        <ProfileStub />
      </Box>
      <Divider />
      <nav>
        <List>
          <ListItemLink to="/" icon={Home} label="Home" />
        </List>

        <Divider />
        <List>
          <ListItemLink to="/Resume" icon={Work} label="Resume" />

          <ListItemLink to="/Projects" icon={AccountTree} label="Projects" />
        </List>
      </nav>
    </>
  );
};

export default SideBar;

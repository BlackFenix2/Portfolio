import { Divider, List } from '@material-ui/core';
import {
  Home,
  List as ListIcon,
  VideogameAsset,
  Pets,
  Movie,
  Domain,
  Gavel,
} from '@material-ui/icons';

import React from 'react';
import { css } from '@emotion/core';
import ListItemLink from './ListItemLink';
import ListItemDropDown from './ListItemDropdown';

const styles = {
  nestedStyle: css`
    padding-left: 32px !important;
  `,
};

const SideBar = () => {
  return (
    <nav>
      <List>
        <ListItemLink to="/" icon={Home} label="Home" />
      </List>

      <Divider />
      <List>
        <ListItemLink to="/Todo" icon={ListIcon} label="Todo" />

        <ListItemLink to="/Shows" icon={Movie} label="Shows" />

        <ListItemLink to="/Domain" icon={Domain} label="Domain" />

        <ListItemLink to="/Cats" icon={Pets} label="Cats" />

        <ListItemDropDown icon={VideogameAsset} label="Games">
          <ListItemLink
            to="/Games/TicTacToe"
            label="Tic-Tac-Toe"
            css={styles.nestedStyle}
          />

          <ListItemLink
            to="/Games/FlappyBird"
            label="Flappy Bird"
            css={styles.nestedStyle}
          />
        </ListItemDropDown>

        <ListItemLink icon={Gavel} to="/License" label="License" />
      </List>
    </nav>
  );
};

export default SideBar;

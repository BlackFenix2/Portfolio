import React from 'react';

import { Link } from 'gatsby';
import img from 'src/lib/img/icon.png';
import { Menu } from 'antd';
import { css } from '@emotion/core';

const NavBar = () => (
  <nav>
    <Menu
      mode="horizontal"
      theme="dark"
      css={css`
        line-height: 64px;
      `}
    >
      <Menu.Item>
        <Link to="/">
          <i>
            <img src={img} alt="cool cat icon" height={60} width={60} />
          </i>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/AboutMe">About Me</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/CoolCats">Cool Cats</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Typography">Typography</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Credits">Credits</Link>
      </Menu.Item>
    </Menu>
  </nav>
);

export default NavBar;

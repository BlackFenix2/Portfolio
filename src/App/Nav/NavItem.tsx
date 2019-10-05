import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react';
import React from 'react';

interface Props {
  url: string;
  active: boolean;
  clickEvent: (e, { to }) => void;
}

const NavItem: React.FC<Props> = props => (
  // decorate menu as Link for React-Router
  <Menu.Item
    as={Link}
    to={props.url}
    active={props.active}
    onClick={props.clickEvent}
  >
    {props.children}
  </Menu.Item>
);

export default NavItem;

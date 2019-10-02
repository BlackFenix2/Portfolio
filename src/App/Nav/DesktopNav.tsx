import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { RouteStore } from 'src/state/stores/routeStore';

const NavBar = props => (
  <Menu fixed="top" borderless>
    {props.children}
  </Menu>
);

const NavItem = props => (
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

const DropdownComponent = props => (
  <Dropdown item simple text={props.name}>
    <Dropdown.Menu>{props.children}</Dropdown.Menu>
  </Dropdown>
);

// generate simple nav links
const LinkGenerator = props => {
  const { routes } = props;
  const navLinks = routes.map((item, key) =>
    item.children.length === 0 ? (
      <NavItem
        key={key}
        active={props.activeUrl === item.url}
        url={item.url}
        clickEvent={props.clickEvent}
      >
        {item.name}
      </NavItem>
    ) : (
      <DropdownComponent key={key} name={item.name}>
        {item.children.map((child, index) => (
          <NavItem
            key={index}
            active={props.activeUrl === item.url}
            url={item.url + child.url}
            clickEvent={props.clickEvent}
          >
            {child.name}
          </NavItem>
        ))}
      </DropdownComponent>
    )
  );
  return navLinks;
};

const User = props => (
  <Menu.Item position="right">
    {/* <span>Login: {String(props.login)}</span> */}
    <span>
      Hello
      {`${props.firstName} ${props.lastName}`}
    </span>
  </Menu.Item>
);

const DesktopNav: React.FC<{
  Routes: RouteStore;
  auth?: any;
}> = props => {
  const [activeUrl, setActiveUrl] = useState('/');
  const handleItemClick = (e, { to }) => {
    setActiveUrl(to);
  };
  return (
    <NavBar>
      <NavItem url="/" active={activeUrl === '/'} clickEvent={handleItemClick}>
        <Icon name="home" />
      </NavItem>
      <LinkGenerator
        routes={props.Routes.routes}
        clickEvent={handleItemClick}
        activeUrl={activeUrl}
      />
      <User firstName="John" lastName="Doe" login={false} />
    </NavBar>
  );
};

export default DesktopNav;

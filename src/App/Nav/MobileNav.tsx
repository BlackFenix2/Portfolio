import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'gatsby';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { RouteStore } from 'src/state/stores/routeStore';
import MobileDropdownComponent from './MobileDropdownComponent';
import NavItem from './NavItem';

const NavBar = props => (
  <Menu vertical fluid>
    {props.children}
  </Menu>
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
      <MobileDropdownComponent key={key} name={item.name}>
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
      </MobileDropdownComponent>
    )
  );
  return navLinks;
};

interface State {
  visible: boolean;
  activeUrl: string;
}

class MobileNav extends React.Component<{ Routes: RouteStore }, State> {
  state = {
    visible: false,
    activeUrl: '/'
  };

  homeButtonCLick = () => {
    this.setState({ visible: false });
  };

  handleItemClick = (e, { to }) => {
    this.setState({ activeUrl: to, visible: false });
  };

  handleHamburgerClick = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  handleHideClick = () => this.setState({ visible: false });

  render() {
    return (
      <NavBar>
        <Menu.Item position="right">
          <Link to="/" onClick={this.homeButtonCLick}>
            <Icon name="home" color="black" />
          </Link>

          <Icon name="align justify" onClick={this.handleHamburgerClick} />
        </Menu.Item>
        <Sidebar
          visible={this.state.visible}
          animation="overlay"
          onHide={this.handleHideClick}
          style={{ background: '#fff' }}
        >
          <LinkGenerator
            routes={this.props.Routes.routes}
            clickEvent={this.handleItemClick}
            activeUrl={this.state.activeUrl}
          />
        </Sidebar>
      </NavBar>
    );
  }
}

export default MobileNav;

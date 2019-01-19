import * as React from 'react';
import { Collapse } from 'react-collapse';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import MobileDropdownComponent from './MobileDropdownComponent';

const NavBar = props => (
  <Menu fixed="top" vertical fluid>
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

// tslint:disable-next-line:max-classes-per-file
class MobileNav extends React.Component<{ routes: any }, State> {
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
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <NavBar>
        <Menu.Item position="right">
          <Link to="/" onClick={this.homeButtonCLick}>
            <Icon name="home" color="black" />
          </Link>

          <Icon name="align justify" onClick={this.handleHamburgerClick} />
        </Menu.Item>
        <Collapse isOpened={this.state.visible} style={{ overflow: 'auto' }}>
          <LinkGenerator
            routes={this.props.routes}
            clickEvent={this.handleItemClick}
            activeUrl={this.state.activeUrl}
          />
        </Collapse>
      </NavBar>
    );
  }
}
const mapStateToProps = ({ routes }) => ({ routes });

export default connect(mapStateToProps)(MobileNav);

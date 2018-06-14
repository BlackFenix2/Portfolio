import { faHome } from '@fortawesome/fontawesome-free-solid';
import Icon from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = props => <nav className="w3-bar">{props.children}</nav>;

const NavItem = props => (
  <Link className="w3-bar-item w3-button" to={props.url}>
    {props.children}
  </Link>
);

const Dropdown = props => (
  <div className="w3-dropdown-hover">
    <button className="w3-button">{props.name}</button>
    <div className="w3-dropdown-content w3-bar-block w3-card-4">
      {props.children}
    </div>
  </div>
);

// generate simple nav links
const LinkGenerator = props => {
  const { routes } = props;
  const navLinks = routes.map(
    (item, key) =>
      item.children.length === 0 ? (
        <NavItem key={key} url={item.url}>
          {item.name}
        </NavItem>
      ) : (
        <Dropdown key={key} name={item.name}>
          {item.children.map((child, index) => (
            <NavItem key={index} url={item.url + child.url}>
              {child.name}
            </NavItem>
          ))}
        </Dropdown>
      )
  );
  return navLinks;
};

const User = props => (
  <div className="w3-bar-item w3-right">
    <span>Hello {`${props.firstName} ${props.lastName}`}</span>
  </div>
);

class Nav extends React.Component<{ routes: any }> {
  public state;
  public render() {
    return (
      <NavBar>
        <NavItem url="/">
          <Icon icon={faHome} />
        </NavItem>
        <LinkGenerator routes={this.props.routes} />
        <User firstName="test" lastName="user" />
      </NavBar>
    );
  }
}
const mapStateToProps = ({ routes }) => ({ routes });

export default connect(mapStateToProps)(Nav);

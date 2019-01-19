import React from 'react';
import { Responsive } from 'semantic-ui-react';
import DesktopNav from 'src/App/Nav/DesktopNav';
import MobileNav from 'src/App/Nav/MobileNav';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={992} />;

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Desktop>
          <DesktopNav />
        </Desktop>
        <Mobile>
          <MobileNav />
        </Mobile>
      </React.Fragment>
    );
  }
}

export default Nav;

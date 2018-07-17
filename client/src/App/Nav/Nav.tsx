import React from 'react';
import Responsive from 'react-responsive';
import DesktopNav from 'src/App/Nav/DesktopNav';
import MobileNav from 'src/App/Nav/MobileNav';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={992} />;

const Nav = () => (
  <React.Fragment>
    {/* Render Desktop Nav */}
    <Desktop>
      <DesktopNav />
    </Desktop>
    {/* Render Desktop Nav */}
    <Mobile>
      <MobileNav />
    </Mobile>
  </React.Fragment>
);

export default Nav;

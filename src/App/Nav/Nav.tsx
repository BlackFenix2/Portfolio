import React from 'react';
import DesktopNav from 'src/App/Nav/DesktopNav';
import MobileNav from 'src/App/Nav/MobileNav';
import routeStore from 'src/state/stores/routeStore';

const Nav = () => {
  const [mobile] = React.useState(
    typeof window !== 'undefined' && window && window.innerWidth < 992
  );
  const RouteStore = React.useContext(routeStore);

  return mobile ? (
    <MobileNav Routes={RouteStore} />
  ) : (
    <DesktopNav Routes={RouteStore} />
  );
};

export default Nav;

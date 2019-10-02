import * as React from 'react';
import { Responsive } from 'semantic-ui-react';
import DesktopNav from 'src/App/Nav/DesktopNav';
import MobileNav from 'src/App/Nav/MobileNav';
import routeStore from 'src/state/stores/routeStore';

const Desktop = props => <Responsive fireOnMount {...props} minWidth={992} />;
const Mobile = props => <Responsive fireOnMount {...props} maxWidth={992} />;

const Nav = () => {
  const RouteStore = React.useContext(routeStore);
  return (
    <>
      <Desktop>
        <DesktopNav Routes={RouteStore} />
      </Desktop>
      <Mobile>
        <MobileNav Routes={RouteStore} />
      </Mobile>
    </>
  );
};

export default Nav;

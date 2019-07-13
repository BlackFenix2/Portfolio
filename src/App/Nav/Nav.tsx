import { inject } from 'mmlpx';
import * as React from 'react';
import { Responsive } from 'semantic-ui-react';
import DesktopNav from 'src/App/Nav/DesktopNav';
import MobileNav from 'src/App/Nav/MobileNav';
import RouteStore from 'src/state/stores/routeStore';

const Desktop = props => <Responsive fireOnMount {...props} minWidth={992} />;
const Mobile = props => <Responsive fireOnMount {...props} maxWidth={992} />;

class Nav extends React.Component {
  @inject() RouteStore: RouteStore;

  // juryrig to fix snapshot responsiveness
  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <>
        <Desktop>
          <DesktopNav Routes={this.RouteStore} />
        </Desktop>
        <Mobile>
          <MobileNav Routes={this.RouteStore} />
        </Mobile>
      </>
    );
  }
}

export default Nav;

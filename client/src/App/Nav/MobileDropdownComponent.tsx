import * as React from 'react';
import { Collapse } from 'react-collapse';
import { Icon, Menu } from 'semantic-ui-react';

import * as styles from './MobileDropdownComponent.module.css';

interface Props {
  name: string;
}

class MobileDropdownComponent extends React.Component<Props> {
  state = {
    visible: false
  };
  toggleVisible = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <React.Fragment>
        <Menu.Item name={this.props.name} onClick={this.toggleVisible}>
          {this.props.name}
          <Icon
            name="angle down"
            color="black"
            className={this.state.visible ? styles.flipped : styles.normal}
          />
        </Menu.Item>
        <Collapse isOpened={this.state.visible}>
          <Menu.Menu>{this.props.children}</Menu.Menu>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default MobileDropdownComponent;

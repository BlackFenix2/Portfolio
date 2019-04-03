import { css } from '@emotion/core';
import * as React from 'react';
import { Collapse } from 'react-collapse';
import { Icon, Menu } from 'semantic-ui-react';

interface Props {
  name: string;
}

const flipped = css`
  transition: 0.5s;
  transform: scaleY(-1);
`;

const normal = css`
  transition: 0.5s;
`;

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
            css={this.state.visible ? flipped : normal}
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

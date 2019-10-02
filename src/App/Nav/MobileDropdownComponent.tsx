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

const MobileDropdownComponent: React.FC<Props> = props => {
  const [visible, setVisible] = React.useState(false);
  const toggleVisible = () => {
    setVisible(prevState => !prevState);
  };
  return (
    <React.Fragment>
      <Menu.Item name={props.name} onClick={toggleVisible}>
        {props.name}
        <Icon
          name="angle down"
          color="black"
          css={visible ? flipped : normal}
        />
      </Menu.Item>
      <Collapse isOpened={visible}>
        <Menu.Menu>{props.children}</Menu.Menu>
      </Collapse>
    </React.Fragment>
  );
};

export default MobileDropdownComponent;

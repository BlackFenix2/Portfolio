import * as React from 'react';
import { Modal, TransitionablePortal } from 'semantic-ui-react';

interface Props {
  visible: boolean;
  header: string;
  toggleEvent: () => void;
  children: any;
}

const AnimatedModal = (props: Props) => (
  <TransitionablePortal
    open={props.visible}
    transition={{ animation: 'fade down', duration: 600 }}
  >
    <Modal open={true} onClose={props.toggleEvent} size="tiny">
      <Modal.Header>
        <h1>{props.header}</h1>
      </Modal.Header>
      <Modal.Content>{props.children}</Modal.Content>
    </Modal>
  </TransitionablePortal>
);

export default AnimatedModal;

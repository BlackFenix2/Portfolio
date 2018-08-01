import * as React from 'react';
import { Modal, TransitionablePortal } from 'semantic-ui-react';

const ModalContent = props => (
  <TransitionablePortal
    open={props.visible}
    transition={{ animation: 'fade down', duration: 600 }}
  >
    <Modal open={true} onClose={props.toggleEvent} size="tiny">
      <Modal.Header>
        <span> Fruit</span>
      </Modal.Header>
      <Modal.Content>{props.children}</Modal.Content>
    </Modal>
  </TransitionablePortal>
);

export default ModalContent;

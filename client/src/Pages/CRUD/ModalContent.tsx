import * as React from 'react';
import { Modal } from 'semantic-ui-react';

const ModalContent = props => (
  <Modal open={props.visible} onClose={props.toggleEvent} size="tiny">
    <Modal.Header>
      <span> Fruit</span>
    </Modal.Header>
    <Modal.Content>{props.children}</Modal.Content>
  </Modal>
);

export default ModalContent;

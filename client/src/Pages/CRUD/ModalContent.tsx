import * as React from 'react';
import Modal from 'src/components/elements/Modal';

const ModalContent = props => (
  <Modal visible={props.visible}>
    <div>
      <header className="w3-container w3-teal">
        <button
          onClick={props.toggleEvent}
          className="w3-button w3-display-topright"
        >
          &times;
        </button>
        <h2>Apple</h2>
      </header>
      <div className="w3-panel">{props.children}</div>
    </div>
  </Modal>
);

export default ModalContent;

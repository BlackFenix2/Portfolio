import React, { Component } from 'react';
import Modal from 'src/components/elements/Modal';

class Register extends Component {
  public state = {
    visible: true
  };

  public toggleEvent = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  public render() {
    return (
      <Modal
        header={'Register'}
        visible={this.state.visible}
        toggleEvent={this.toggleEvent}
      >
        <h1>Register</h1>
      </Modal>
    );
  }
}

export default Register;
import * as React from 'react';

import Modal from 'src/components/elements/Modal';

interface Props {
  visible?: boolean;
}
class Register extends React.Component<Props> {
  state = {
    visible: this.props.visible
  };

  toggleEvent = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <Modal
        header="Register"
        visible={this.state.visible}
        toggleEvent={this.toggleEvent}
      >
        <h1>Register</h1>
      </Modal>
    );
  }
}

export default Register;

import * as React from 'react';
import { Form, Input, Label } from 'semantic-ui-react';
import Modal from 'src/components/elements/Modal';

interface Props {
  visible?: boolean;
}
class Login extends React.Component<Props, unknown> {
  state = {
    visible: this.props.visible
  };

  toggleEvent = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  render() {
    return (
      <Modal
        header="Login"
        visible={this.state.visible}
        toggleEvent={this.toggleEvent}
      >
        <Form>
          <Form.Field>
            <Label>Username</Label>
            <Input />
          </Form.Field>
          <Form.Field>
            <Label>Password</Label>
            <Input />
          </Form.Field>
        </Form>
      </Modal>
    );
  }
}

export default Login;

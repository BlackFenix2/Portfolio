import classNames from 'classnames';
import * as React from 'react';

interface IProps {
  visible: boolean;
}

class Modal extends React.Component<IProps> {
  public state;
  public render() {
    if (!this.props.visible) {
      return null;
    }
    const modalClasses = classNames({
      'w3-show': this.props.visible,
      'w3-modal': true
    });
    return (
      <div className={modalClasses}>
        <div
          className="w3-modal-content w3-card w3-animate-top"
          style={{ maxWidth: '35%' }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;

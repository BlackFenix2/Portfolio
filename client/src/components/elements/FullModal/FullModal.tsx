import classNames from 'classnames';
import React from 'react';

interface Props {
  visible: boolean;
}

class FullModal extends React.Component<Props> {
  state;
  render() {
    if (!this.props.visible) {
      return null;
    }
    const modalClasses = classNames({
      'w3-show': this.props.visible,
      'w3-modal': true
    });
    return (
      <div className={modalClasses} style={{ padding: '0' }}>
        <div
          className="w3-modal-content w3-card w3-animate-top"
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FullModal;

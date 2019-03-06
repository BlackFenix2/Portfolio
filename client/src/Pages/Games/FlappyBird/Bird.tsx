import * as React from 'react';

export interface BirdProps {
  x: number;
  y: number;
  size: number;
}

export default class Bird extends React.Component<BirdProps, any> {
  render() {
    return (
      <React.Fragment>
        <circle cx={this.props.x} cy={this.props.y} r={this.props.size} />
      </React.Fragment>
    );
  }
}

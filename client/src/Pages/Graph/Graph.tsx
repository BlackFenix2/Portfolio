import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

@observer
class Graph extends React.Component {
  @observable graphHeight: number = 100;
  @observable graphWidth: number = 100;

  handleChange = event => {
    event.target.name === 'heightRange'
      ? (this.graphHeight = event.target.value)
      : (this.graphWidth = event.target.value);
  };

  render() {
    return (
      <div>
        <h2>This is the graph page</h2>
        <p>Height: {this.graphHeight}</p>
        <p>Width: {this.graphWidth}</p>
        <div>
          <input
            type="range"
            name="heightRange"
            value={this.graphHeight}
            min="10"
            max="210"
            onChange={this.handleChange}
          />
          <input
            type="range"
            name="widthRange"
            value={this.graphWidth}
            min="10"
            max="210"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <svg width="200" height="210">
            <rect height={this.graphHeight} width={this.graphWidth} />
          </svg>
        </div>
      </div>
    );
  }
}

export default Graph;

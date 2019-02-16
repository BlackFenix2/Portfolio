import Slider from '@material-ui/lab/Slider';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Divider } from 'semantic-ui-react';

@observer
class Graph extends React.Component {
  @observable graphHeight: number = 100;
  @observable graphWidth: number = 100;

  handleHeightChange = (event, value) => {
    this.graphHeight = value;
  };
  handleWidthChange = (event, value) => {
    this.graphWidth = value;
  };

  render() {
    return (
      <div>
        <h2>This is the graph page</h2>
        <p>Height: {this.graphHeight}</p>
        <p>Width: {this.graphWidth}</p>
        <div>
          <Slider
            min={10}
            max={210}
            value={this.graphHeight}
            onChange={this.handleHeightChange}
          />
          <Divider />
          <Slider
            min={10}
            max={210}
            value={this.graphWidth}
            onChange={this.handleWidthChange}
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

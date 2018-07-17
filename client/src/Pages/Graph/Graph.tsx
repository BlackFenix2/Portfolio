import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'src/state/actions';

interface IProps {
  actions: any;
  graph: any;
}
class Graph extends React.Component<IProps> {
  public handleChange = event => {
    event.target.name === 'heightRange'
      ? this.props.actions.setGraphArea({
          height: event.target.value,
          width: this.props.graph.width
        })
      : this.props.actions.setGraphArea({
          height: this.props.graph.height,
          width: event.target.value
        });
  };

  public render() {
    return (
      <div>
        <h2>This is the graph page</h2>
        <p>Height: {this.props.graph.height}</p>
        <p>Width: {this.props.graph.width}</p>
        <div>
          <input
            type="range"
            name="heightRange"
            value={this.props.graph.height}
            min="10"
            max="210"
            onChange={this.handleChange}
          />
          <input
            type="range"
            name="widthRange"
            value={this.props.graph.width}
            min="10"
            max="210"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <svg width="200" height="210">
            <rect
              height={this.props.graph.height}
              width={this.props.graph.width}
            />
          </svg>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ graphArea }) => ({ graph: graphArea });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph);

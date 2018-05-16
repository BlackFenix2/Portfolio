import * as React from 'react';

interface IProps {
  percent: number;
}
class ProgressBar extends React.Component<IProps> {
  public getColor = () => {
    if (this.props.percent >= 100) {
      return 'green';
    }
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  };
  public getProgress = () =>
    this.props.percent > 100 ? 100 : this.props.percent;

  public render() {
    const Style = {
      width: `${this.getProgress()}%`,
      height: 28,
      backgroundColor: this.getColor()
    };
    const outerStyle = {
      border: 'solid 1px grey'
    };
    return (
      <div style={outerStyle}>
        <div style={Style} />
      </div>
    );
  }
}

export default ProgressBar;

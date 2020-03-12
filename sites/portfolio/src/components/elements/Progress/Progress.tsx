import { styled } from 'linaria/react';
import * as React from 'react';

interface Props {
  percent: number;
}

const ProgressContainer = styled.div`
  border: solid 1px grey;
`;

const ProgressItem = styled.div`
  width: ${(props: any) => props.barWidth};
  height: 28px;
  background-color: ${(props: any) => props.color};
  transition: 0.5s;
`;
class ProgressBar extends React.Component<Props> {
  getColor = () => {
    if (this.props.percent >= 100) {
      return 'green';
    }
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  };

  getProgress = () =>
    this.props.percent > 100 ? '100%' : `${this.props.percent}%`;

  render() {
    const styles = {
      barWidth: this.getProgress(),
      color: this.getColor()
    };

    return (
      <ProgressContainer>
        <ProgressItem {...styles} />
      </ProgressContainer>
    );
  }
}

export default ProgressBar;

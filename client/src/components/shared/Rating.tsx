import {
  faFrown,
  faStar as nostar
} from '@fortawesome/fontawesome-free-regular';
import { faStar as star } from '@fortawesome/fontawesome-free-solid';
import Icon from '@fortawesome/react-fontawesome';
import * as React from 'react';

interface IProps {
  starCount: number;
}

class Rating extends React.PureComponent<IProps> {
  public getRating = starCount => {
    let stars = [];
    const max = 5;
    if (starCount > 0) {
      for (let index = 1; index <= max; index++) {
        stars = stars.concat(
          starCount >= index ? <Star key={index} /> : <EmptyStar key={index} />
        );
      }
    } else {
      stars = stars.concat(<NoStars key={max} />);
    }
    return stars;
  };

  public render() {
    return <span>{this.getRating(this.props.starCount)}</span>;
  }
}

const Star = () => <Icon icon={star} style={{ color: 'gold' }} />;
const EmptyStar = () => <Icon icon={nostar} />;
const NoStars = () => (
  <span>
    <span>No Stars!</span>
    <Icon icon={faFrown} />
  </span>
);

export default Rating;

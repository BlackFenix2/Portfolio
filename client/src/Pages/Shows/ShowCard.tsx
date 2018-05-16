import Button from 'material-ui/Button';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'src/components/shared/Rating';

// Image equalizer
const imgStyle = {
  width: '200px',
  height: '300px'
};

interface IShow {
  rating: number;
  poster: string;
  image: string;
  imdbID: string;
  title: string;
  year: any;
  description: string;
}

class ShowCard extends React.PureComponent<IShow> {
  public static defaultProps = {
    rating: 0
  };

  public state = {
    rating: this.props.rating
  };

  public increaseRating = () =>
    this.state.rating < 5
      ? this.setState((prevState: IShow) => ({
          rating: prevState.rating + 1
        }))
      : null;

  public decreaseRating = () =>
    this.state.rating > 0
      ? this.setState((prevState: IShow) => ({
          rating: prevState.rating - 1
        }))
      : null;
  public render() {
    const image = require(`src/img/posters/${this.props.poster}`);
    return (
      <div className="w3-card-4 w3-row">
        <div className="w3-col w3-half">
          <Link to={`/Details/${this.props.imdbID}`}>
            <img
              className="w3-image"
              alt={`${this.props.title} Show Poster`}
              src={image}
              style={imgStyle}
            />
          </Link>
        </div>
        <div className="w3-col w3-half">
          <div className="w3-container">
            <h3>{this.props.title}</h3>
            <h4>{this.props.year}</h4>
            <p className="w3-small">{this.props.description}</p>
            <div className="w3-center">
              <Button mini variant="fab" onClick={this.decreaseRating}>
                -
              </Button>
              <Rating starCount={this.state.rating} />
              <Button mini variant="fab" onClick={this.increaseRating}>
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCard;

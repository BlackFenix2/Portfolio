import { Fab } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Rating } from 'semantic-ui-react';
// import Card from 'src/components/elements/Card';
// Image equalizer
import styles from './ShowCard.module.css';

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
  static defaultProps = {
    rating: 0
  };

  state = {
    rating: this.props.rating,
    loading: true
  };

  increaseRating = () =>
    this.state.rating < 5
      ? this.setState((prevState: IShow) => ({
          rating: prevState.rating + 1
        }))
      : null;

  decreaseRating = () =>
    this.state.rating > 0
      ? this.setState((prevState: IShow) => ({
          rating: prevState.rating - 1
        }))
      : null;

  setLoading = () => {
    this.setState({
      loading: false
    });
  };
  render() {
    // TODO Remove require statement
    const image = require(`src/lib/img/posters/${this.props.poster}`);
    return (
      <Card raised>
        <Link to={`/Details/${this.props.imdbID}`}>
          <Image
            alt={`${this.props.title} Show Poster`}
            src={image}
            className={styles.img}
            onLoad={this.setLoading}
          />
        </Link>
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>

          <Card.Meta>{this.props.year}</Card.Meta>

          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>

        <Card.Content extra textAlign="center">
          <Fab size="small" onClick={this.decreaseRating}>
            <Remove />
          </Fab>
          <Rating
            icon="star"
            rating={this.state.rating}
            maxRating={5}
            disabled
          />
          <Fab size="small" onClick={this.increaseRating}>
            <Add />
          </Fab>
        </Card.Content>
      </Card>
    );
  }
}

export default ShowCard;

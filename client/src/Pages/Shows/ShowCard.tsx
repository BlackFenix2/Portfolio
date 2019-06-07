import { css } from '@emotion/core';
import { Fab } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Rating } from 'semantic-ui-react';
import { trimString } from 'src/helpers/stringHelpers';

interface Show {
  rating: number;
  poster: string;
  image: string;
  imdbID: string;
  title: string;
  year: any;
  description: string;
  className?: string;
}

class ShowCard extends React.PureComponent<Show> {
  static defaultProps = {
    rating: 0
  };

  state = {
    rating: this.props.rating
  };

  increaseRating = () =>
    this.state.rating < 5
      ? this.setState((prevState: Show) => ({
          rating: prevState.rating + 1
        }))
      : null;

  decreaseRating = () =>
    this.state.rating > 0
      ? this.setState((prevState: Show) => ({
          rating: prevState.rating - 1
        }))
      : null;

  render() {
    // TODO Remove require statement
    // className needed because senamtic-ui-react cant wrap custom components in transition groups
    const { className } = this.props;
    const image = require(`src/lib/img/posters/${this.props.poster}`);
    return (
      <Card raised className={className}>
        <Link to={`/Shows/Details/${this.props.imdbID}`}>
          <Image
            alt={`${this.props.title} Show Poster`}
            src={image}
            css={css`
              width: 300px;
              height: 400px;
            `}
          />
        </Link>
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>

          <Card.Meta>{this.props.year}</Card.Meta>

          <Card.Description>
            {trimString(this.props.description, 60)}
          </Card.Description>
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

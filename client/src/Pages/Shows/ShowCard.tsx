import { Button, Fab } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, Image, Rating } from 'semantic-ui-react';
import Card from 'src/components/elements/Card';
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
    rating: this.props.rating
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
  render() {
    const image = require(`src/lib/img/posters/${this.props.poster}`);
    return (
      <Card>
        <Grid stackable>
          <Grid.Column width={7} className={styles.grid} floated="left">
            <Link to={`/Details/${this.props.imdbID}`}>
              <Image
                alt={`${this.props.title} Show Poster`}
                src={image}
                className={styles.img}
              />
            </Link>
          </Grid.Column>
          <Grid.Column width={9} floated="right">
            <Container>
              <Header>{this.props.title}</Header>

              <code>{this.props.year}</code>

              <p>{this.props.description}</p>
            </Container>
            <Container textAlign="center">
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
            </Container>
          </Grid.Column>
        </Grid>
      </Card>
    );
  }
}

export default ShowCard;

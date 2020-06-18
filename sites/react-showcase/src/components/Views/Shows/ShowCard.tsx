import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Button,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'gatsby';
import { trimString } from 'src/helpers/stringHelpers';
import { Rating } from '@material-ui/lab';
import { Movie } from 'src/services/API/moviesAPI';
import moment from 'moment';

const ShowCard: React.FC<Movie> = (props) => {
  const { first_air_date, release_date } = props;
  const parsedReleaseDate = moment(
    first_air_date || release_date,
    'YYYY-MM-DD'
  ).format('MM/DD/YYYY');

  return (
    <Card raised>
      <Link to={`/Shows/Details/${props.id}`}>
        <CardMedia
          component="img"
          alt={`${props.name || props.title} Show Poster`}
          title={`${props.name || props.title} Show Poster`}
          image={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
        />
      </Link>

      <CardHeader
        title={props.name || props.title}
        subheader={parsedReleaseDate}
      />
      <CardContent>
        {trimString(props.overview || 'none provided', 60)}
      </CardContent>

      <Box
        component={CardActions}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box>{props.vote_average}/10</Box>
        <Rating
          readOnly
          defaultValue={props.vote_average}
          max={10}
          precision={0.5}
        />
      </Box>
      <CardActions>
        <Link
          to={`/Shows/Details/${props.id}`}
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" size="small" color="primary">
            Details
          </Button>
        </Link>

        <Button variant="contained" size="small" color="primary">
          IMDB
        </Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(ShowCard);

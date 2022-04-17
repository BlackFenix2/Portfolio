import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Button,
} from '@mui/material';
import React from 'react';
import { Link } from 'gatsby';
import { trimString } from 'src/helpers/stringHelpers';
import { Rating } from '@mui/lab';
import { Movie } from 'src/services/API/moviesAPI';
import moment from 'moment';

type Props = {
  movie: Movie;
};

const ShowCard: React.FC<Props> = ({ movie }) => {
  const { first_air_date, release_date } = movie;
  const parsedReleaseDate = moment(
    first_air_date || release_date,
    'YYYY-MM-DD'
  ).format('MM/DD/YYYY');

  const mediaType = movie.first_air_date == null ? 'movie' : 'tv';

  return (
    <Card raised>
      <Link to={`/Shows/Details/${movie.id}`}>
        <CardMedia
          component="img"
          alt={`${movie.name || movie.title} Show Poster`}
          title={`${movie.name || movie.title} Show Poster`}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </Link>

      <CardHeader
        title={movie.name || movie.title}
        subheader={parsedReleaseDate}
      />
      <CardContent>
        {trimString(movie.overview || 'none provided', 60)}
      </CardContent>

      <Box
        component={CardActions}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box>{movie.vote_average}/10</Box>
        <Rating
          readOnly
          defaultValue={movie.vote_average}
          max={10}
          precision={0.5}
        />
      </Box>
      <CardActions>
        <Link
          to={`/Shows/Details/${movie.id}`}
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" size="small" color="primary">
            Details
          </Button>
        </Link>

        <a
          href={`https://www.themoviedb.org/${mediaType}/${movie.id}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" size="small" color="primary">
            IMDB
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default React.memo(ShowCard);

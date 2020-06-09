import {
  Fab,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Box,
} from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { Link } from 'gatsby';
import { trimString } from 'src/helpers/stringHelpers';
import { Rating } from '@material-ui/lab';
import { Movie } from 'src/services/API/moviesAPI';

const ShowCard: React.FC<Movie> = (props) => {
  const [image, setImage] = React.useState<string>('');
  const [rating, setRating] = React.useState(props.popularity || 0);

  const increaseRating = () =>
    rating < 5 ? setRating((prevRating) => prevRating + 1) : null;

  const decreaseRating = () =>
    rating > 0 ? setRating((prevRating) => prevRating - 1) : null;

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
        subheader={props.first_air_date || props.release_date}
      />
      <CardContent>
        {trimString(props.overview || 'none provided', 60)}
      </CardContent>

      <Box component={CardActions} display="flex" justifyContent="center">
        <Fab size="small" onClick={decreaseRating}>
          <Remove />
        </Fab>
        <Rating value={rating} readOnly />
        <Fab size="small" onClick={increaseRating}>
          <Add />
        </Fab>
      </Box>
    </Card>
  );
};

export default React.memo(ShowCard);

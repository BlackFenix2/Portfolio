import { css } from '@emotion/core';
import {
  Fab,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Box
} from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { Link } from 'gatsby';
import { trimString } from 'src/helpers/stringHelpers';
import { getImagePath } from 'src/helpers/imageHelper';
import { Rating } from '@material-ui/lab';

interface Show {
  rating: number;
  poster: string;
  imdbID: string;
  title: string;
  year: number;
  description: string;
  className?: string;
}

const ShowCard: React.FC<Show> = props => {
  const [image, setImage] = React.useState<string>('');
  const [rating, setRating] = React.useState(props.rating || 0);

  const increaseRating = () =>
    rating < 5 ? setRating(prevRating => prevRating + 1) : null;

  const decreaseRating = () =>
    rating > 0 ? setRating(prevRating => prevRating - 1) : null;

  React.useEffect(() => {
    const getImage = async () => {
      const result: string = await getImagePath(
        import(`src/lib/img/posters/${props.poster}`)
      );
      setImage(result);
    };
    getImage();
  }, [props.poster]);

  return (
    <Card raised>
      <Link to={`/Shows/Details/${props.imdbID}`}>
        <img
          alt={`${props.title} Show Poster`}
          src={image}
          css={css`
            width: 315px;
            height: 400px;
          `}
        />
      </Link>

      <CardHeader title={props.title} subheader={props.year} />
      <CardContent>{trimString(props.description, 60)}</CardContent>

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

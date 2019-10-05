import { css } from '@emotion/core';
import { Fab } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import * as React from 'react';
import { Link } from 'gatsby';
import { Card, Image, Rating } from 'semantic-ui-react';
import { trimString } from 'src/helpers/stringHelpers';

import { getImagePath } from 'src/helpers/imageHelper';

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
  const [image, setImage] = React.useState(null);
  const [rating, setRating] = React.useState(0);

  const getImage = React.useCallback(async () => {
    const img = await getImagePath(
      import(`src/lib/img/posters/${props.poster}`)
    );
    return img;
  }, [props.poster]);

  const increaseRating = () =>
    rating < 5 ? setRating(prevRating => prevRating + 1) : null;

  const decreaseRating = () =>
    rating > 0 ? setRating(prevRating => prevRating - 1) : null;

  React.useEffect(() => {
    setImage(getImage());
  }, [getImage]);

  return (
    <Card raised className={props.className}>
      <Link to={`/Shows/Details/${props.imdbID}`}>
        <Image
          alt={`${props.title} Show Poster`}
          src={image}
          css={css`
            width: 300px;
            height: 400px;
          `}
        />
      </Link>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>

        <Card.Meta>{props.year}</Card.Meta>

        <Card.Description>{trimString(props.description, 60)}</Card.Description>
      </Card.Content>

      <Card.Content extra textAlign="center">
        <Fab size="small" onClick={decreaseRating}>
          <Remove />
        </Fab>
        <Rating icon="star" rating={rating} maxRating={5} disabled />
        <Fab size="small" onClick={increaseRating}>
          <Add />
        </Fab>
      </Card.Content>
    </Card>
  );
};

export default React.memo(ShowCard);

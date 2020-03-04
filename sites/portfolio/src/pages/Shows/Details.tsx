import { css } from 'linaria';
import { Link } from 'gatsby';
import { Image } from 'semantic-ui-react';
import { getImagePath } from 'src/helpers/imageHelper';
import showStore from 'src/state/stores/showStore';
import React from 'react';
import { Router } from '@reach/router';
import { pickBy } from 'lodash';
// Image equalizer

const imgStyle = css`
  width: 300px;
  height: 400px;
`;

const DetailsComponent = (props: any) => {
  const [image, setImage] = React.useState('');

  const ShowStore = React.useContext(showStore);

  const showFilter = pickBy(ShowStore.shows, value =>
    value.imdbID.toUpperCase().match(props.imdbID.toUpperCase())
  );

  const show = Object.values(showFilter)[0];

  // TODO add util folder for effects
  React.useEffect(() => {
    const getImage = async () => {
      const result = await getImagePath(
        import(`src/lib/img/posters/${show.poster}`)
      );
      setImage(result);
    };
    getImage();
  }, [show.poster]);
  return (
    <div>
      <Image src={image} alt="where is the item" css={imgStyle} />
      <h1>{show.title}</h1>
      <p>{show.description}</p>
      <Link to="/Shows">Go Back</Link>
    </div>
  );
};

const Details = () => (
  <Router>
    <DetailsComponent path="Shows/Details/:imdbID" />
  </Router>
);

export default Details;

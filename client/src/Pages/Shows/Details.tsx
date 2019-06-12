import { css } from '@emotion/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { getImagePath } from 'src/helpers/imageHelper';
// Image equalizer

const imgStyle = css`
  width: 300px;
  height: 400px;
`;

const Details = (props: any) => {
  const [image, setImage] = React.useState('');

  // TODO add util folder for effects
  React.useEffect(() => {
    const getImage = async () => {
      const result = await getImagePath(
        import(`src/lib/img/posters/${props.poster}`)
      );
      setImage(result);
    };
    getImage();
  }, [props.poster]);
  return (
    <div>
      <Image src={image} alt="where is the item" css={imgStyle} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Link to="/Shows">Go Back</Link>
    </div>
  );
};

export default Details;

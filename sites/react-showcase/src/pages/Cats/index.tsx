import * as React from 'react';

import SEO from 'src/components/modules/SEO';
import { FormControl, TextField, Button, Divider } from '@mui/material';
import { Form } from 'informed';
import { css } from '@emotion/css';

import { StaticImage } from 'gatsby-plugin-image';

const catImage = css`
  width: 100%;
  height: auto;

  @media screen and (min-width: 767px) {
    width: auto;
    height: auto;
  }
`;

const Cats: React.FC<any> = () => {
  const [result, setResult] = React.useState(200);
  const [number, setNumber] = React.useState(200);

  const onChangeEvent = (e) => {
    setResult(e.target.value);
  };
  const onSubmitEvent = () => {
    setNumber(result);
  };

  return (
    <>
      <SEO title="Cats" />
      <div>
        <h2>HTTP Cats</h2>
        <StaticImage
          src={`https://http.cat/${number}.jpg`}
          alt="No cat found :("
          className={catImage}
        />
        <Divider />
        <Form onSubmit={onSubmitEvent}>
          <FormControl>
            <TextField
              placeholder="Enter search term"
              label="HTTP Status Code"
              value={result}
              onChange={onChangeEvent}
            />
            <Button variant="contained" color="primary">
              Show me a cat
            </Button>
          </FormControl>
        </Form>
      </div>
    </>
  );
};

export default Cats;

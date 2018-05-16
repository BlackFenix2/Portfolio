import * as React from 'react';
import { create } from 'react-test-renderer';
import Rating from './Rating';

describe('Rating', () => {
  for (let index = 0; index <= 6; index++) {
    test(`test rating of ${index}`, () => {
      const component = create(<Rating starCount={index} />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  }
});

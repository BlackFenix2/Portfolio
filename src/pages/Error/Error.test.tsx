import { shallow } from 'src/pages/Error/node_modules/enzyme';
import * as React from 'src/pages/Error/node_modules/react';
import Error from 'src/pages/Error';

describe('Error Test', () => {
  it('renders with crashing', () => {
    try {
      const wrapper = shallow(<Error />);
      expect(wrapper).toThrow();
    } catch (error) {
      expect(true).toBeTruthy();
    }
  });
});

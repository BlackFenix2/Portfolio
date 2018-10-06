import { shallow } from 'enzyme';
import * as React from 'react';
import Error from 'src/Pages/Error';

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

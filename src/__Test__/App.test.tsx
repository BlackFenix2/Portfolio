import React from 'react';
import { mount, shallow } from 'enzyme';
import App from 'src/App/App';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('Doesnt crash', () => {
    expect(wrapper).toBeTruthy();
  });
});

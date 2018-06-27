import { shallow } from 'enzyme';
import React from 'react';

// get app without css imports to avoid jest erros
import App from 'src/App/App';

describe('Test App', () => {
  const wrapper = shallow(<App />);
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('has chidren', () => {
    expect(wrapper.children).toBeTruthy();
  });
});

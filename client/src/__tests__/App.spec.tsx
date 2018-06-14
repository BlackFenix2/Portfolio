import React from 'react';
import ReactDOM from 'react-dom';

// get app without css imports to avoid jest erros
import App from 'src/App/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

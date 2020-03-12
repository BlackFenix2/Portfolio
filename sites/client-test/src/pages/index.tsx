import React from 'react';
import { Router, Link, Location } from '@reach/router';
import Page from '../components/Page';

const App = () => {
  return (
    <div>
      <h1>Client route test</h1>
      <nav className="nav">
        <Link to="/">Page 1</Link> <Link to="page/2">Page 2</Link>
        <Link to="page/3">Page 3</Link> <Link to="page/4">Page 4</Link>
      </nav>

      <div>
        <Router>
          <Page path="/" page="1" />
          <Page path="page/:page" />
        </Router>
      </div>
    </div>
  );
};

export default App;

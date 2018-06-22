import * as React from 'react';
import { Container, Icon, Segment } from 'semantic-ui-react';

import styles from './App.module.css';
const Icons = () => (
  <div>
    <a
      title="GitHub"
      href="https://github.com/BlackFenix2/Portfolio"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon inverted link name="github" size="big" />
    </a>
  </div>
);

const CopyRight = () => (
  <div>
    <span>Ernie Francis &copy; {new Date().getFullYear()}</span>
  </div>
);

const Foot = () => (
  <footer>
    <Segment inverted basic>
      <Container textAlign="center">
        <Icons />
        <CopyRight />
      </Container>
    </Segment>
  </footer>
);

export default Foot;

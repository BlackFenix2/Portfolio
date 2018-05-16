import { faGithub } from '@fortawesome/fontawesome-free-brands';
import Icon from '@fortawesome/react-fontawesome';
import * as React from 'react';

const Icons = () => (
  <div className="w3-bar">
    <a
      title="GitHub"
      href="https://github.com/BlackFenix2/Portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="w3-bar-item w3-hover-none w3-hover-text-black"
    >
      <Icon icon={faGithub} size="2x" />
    </a>
  </div>
);

const CopyRight = () => (
  <div>
    <span>Ernie Francis &copy; {new Date().getFullYear()}</span>
  </div>
);

const Foot = () => (
  <footer className="w3-green w3-center">
    <div>
      <Icons />
    </div>
    <div>
      <CopyRight />
    </div>
  </footer>
);

export default Foot;

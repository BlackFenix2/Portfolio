import * as React from 'react';
import CountDown from 'src/components/modules/Countdown';
import SEO from 'src/components/modules/SEO';
import { PageProps } from 'gatsby';

const ie11EolDate = new Date(2022, 6, 15);
const Home = (props: PageProps) => (
  <div>
    <SEO title="Home Page" />

    <CountDown date={ie11EolDate} label="IE11 End of Life" />
  </div>
);

export default Home;

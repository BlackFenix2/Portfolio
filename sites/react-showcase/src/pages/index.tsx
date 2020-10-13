import * as React from 'react';
import CountDown from 'src/components/modules/Countdown';
import SEO from 'src/components/modules/SEO';
import { PageProps } from 'gatsby';

const flashEolDate = new Date(2020, 11, 31);
const Home = (props: PageProps) => {
  return (
    <div>
      <SEO title="Home Page" />
      <CountDown
        date={flashEolDate}
        label={`Flash End of Life - ${flashEolDate.toDateString()}`}
      />
    </div>
  );
};

export default Home;

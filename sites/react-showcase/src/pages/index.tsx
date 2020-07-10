import * as React from 'react';
import CountDown from 'src/components/modules/Countdown';
import SEO from 'src/components/modules/SEO';
import { PageProps } from 'gatsby';

const Home = (props: PageProps) => {
  return (
    <div>
      <SEO title="Home Page" />
      <CountDown
        date={new Date(2020, 0, 14)}
        label={`Windows 7/Server 2008 End of Life - ${new Date(
          2020,
          0,
          14
        ).toDateString()}`}
      />
    </div>
  );
};

export default Home;

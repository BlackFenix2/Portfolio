import * as React from 'react';
import CountDown from 'src/components/Countdown';

interface Props {
  routing: any;
}

const Home = (props: Props) => {
  return (
    <div>
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

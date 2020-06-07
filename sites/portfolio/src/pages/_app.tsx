import { AppProps } from 'next/app';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    Layout Loaded
    <Component {...pageProps} />
  </div>
);

export default App;

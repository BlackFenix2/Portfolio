/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import React from 'react';
import Layout from 'src/layout';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Ernie Francis IV</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ernie Francis IV" />
        <meta
          property="og:description"
          content="Portfolio site for Ernie Francis IV"
        />
        <meta
          name="description"
          content="Portfolio site for Ernie Francis IV"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;

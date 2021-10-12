/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import React from 'react';
import Layout from 'src/layout';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'src/lib/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'src/lib/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Ernie Francis IV</title>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ernie Francis IV" />
      <meta
        property="og:description"
        content="Portfolio site for Ernie Francis IV"
      />
      <meta name="description" content="Portfolio site for Ernie Francis IV" />
    </Head>
    <CssBaseline />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CacheProvider>
);

export default App;

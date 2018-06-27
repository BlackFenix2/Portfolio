import history from 'connect-history-api-fallback';
import convert from 'koa-connect';
import merge from 'webpack-merge';
import webpackServeWaitpage from 'webpack-serve-waitpage';
import common from './webpack.common';

const devConfig = {
  // set mode to development, enables dev defaults
  mode: 'development',
  // use source map, override dev mode default
  devtool: 'source-map',

  // webpack-serve dev options
  serve: {
    // open default browser on load
    open: true,

    // enable HMR
    // hot: true,

    // middleware options
    add: (app, middleware, options) => {
      // add history API fallback
      app.use(convert(history()));

      // webpack waiting page
      app.use(webpackServeWaitpage(options));

      // open dev app
      middleware.webpack();
      middleware.content();
    }
  }
};

export default merge(common, devConfig);

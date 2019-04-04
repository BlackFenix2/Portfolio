import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';

const devConfig: webpack.Configuration = {
  // set mode to development, enables dev defaults
  mode: 'development',
  // use source map, override dev mode default
  devtool: 'source-map',

  // webpack dev server
  devServer: {
    // open browser on start
    open: true,
    // hot reload
    hot: true,
    // error overlay
    overlay: true,

    // route all to index.html
    historyApiFallback: true
  }
};

export default merge(common, devConfig);

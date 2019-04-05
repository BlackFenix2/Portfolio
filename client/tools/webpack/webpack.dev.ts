import webpack from 'webpack';
import { Configuration } from 'webpack-dev-server';
import merge from 'webpack-merge';
import common from './webpack.common';

interface WebpackConfig extends webpack.Configuration {
  devServer?: Configuration;
}

const devConfig: WebpackConfig = {
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

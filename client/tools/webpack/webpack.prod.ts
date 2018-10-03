import CleanWebpackPlugin from 'clean-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import path from 'path';
import uglifyJSPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import paths from '../paths';
import common from './webpack.common';
const prodConfig: webpack.Configuration = {
  // set mode to production, enables prod defaults
  mode: 'production',

  // change output to hashing
  output: {
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[name].[hash].js'
  },

  optimization: {
    minimizer: [
      new uglifyJSPlugin({
        parallel: true
      })
    ]
  },
  plugins: [
    // add CSS files with Hash
    new ExtractCssChunks({
      filename: 'static/css/[name].[hash].css'
    }),

    // compresses output files to .gz
    new CompressionPlugin({
      // exclude .html files from gzip
      exclude: /\.html$/
      // remove original files (saves on server data)
      // deleteOriginalAssets: true
    }),

    // clean build folder
    new CleanWebpackPlugin([`${paths.buildDir}/*`], {
      allowExternal: true
    })
  ]
};

// bundles express server
const serverConfig: webpack.Configuration = {
  // target node
  target: 'node',

  mode: 'production',

  entry: {
    server: [paths.serverIndex]
  },
  output: {
    path: path.resolve(__dirname, paths.buildDir),
    filename: '[name].js'
  }
};

export default [serverConfig, merge(common, prodConfig)];

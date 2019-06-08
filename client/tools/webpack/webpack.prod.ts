import BrotliPlugin from 'brotli-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
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
      new TerserPlugin({
        cache: true,
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
    }),
    // compress output files to .br
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|ts|css|svg)$/
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
  },
  plugins: [
    // clean build folder
    new CleanWebpackPlugin()
  ]
};

export default [serverConfig, merge(common, prodConfig)];

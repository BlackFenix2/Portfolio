import HtmlWebPackPlugin from 'html-webpack-plugin';
import HtmlTemplate from 'html-webpack-template';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import webpack from 'webpack';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import htmlParams from '../htmlParams';
import paths from '../paths';

import { staging } from '../env';

const config = {
  entry: {
    // client entry
    bundle: [paths.index]
  },

  // split chunks by vendors in node modules
  optimization: {
    splitChunks: {
      cacheGroups: {
        // bundle vendor modules
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'vendor',
          minChunks: 2
        }
      }
    },
    runtimeChunk: false
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, paths.buildDir),
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].js'
  },
  resolve: {
    // namespace src to avoid ../../
    // enabled untill webpack 4 support for Awesome-typescript-loader
    alias: {
      src: paths.codeRoot
    },
    // add file extensions to shorthand ES6 imports
    extensions: ['.ts', '.tsx', 'json', '.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        // check each loader for matching files
        oneOf: [
          // default loader for ts and tsx
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'awesome-typescript-loader',
                options: {
                  silent: true,
                  transpileOnly: true
                }
              }
            ],

            exclude: /node_modules/
          },
          // css loader with modules
          {
            test: /\.module.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              // add css loader with modules
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              }
            ]
          },
          // default css loader, catch global css imports
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },

          // fallback loader if other loaders excluded
          // URL loader falls back to file-loader if size limit is exceeded
          {
            loader: 'url-loader',
            // exclude HTML framework elements regardless
            exclude: [/\.(js|jsx|ts|tsx|mjs|ejs|css)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[ext]/[name].[ext]',
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // define environemt vars
    new webpack.EnvironmentPlugin({
      // set staging var
      STAGING: staging
    }),

    // load css into separate .css file
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css'
    }),

    // HTML generation, put before other manifest plugins
    new HtmlWebPackPlugin({
      inject: false,
      template: HtmlTemplate,
      favicon: paths.Icon,
      mobile: true,
      lang: 'en-US',
      appMountId: htmlParams.rootID,
      title: htmlParams.title
    }),

    // add serviceworker
    new SWPrecacheWebpackPlugin(),

    // create manifest.json for PWA, injects into htmlwebpack plugin
    new WebpackPwaManifest({
      name: "Ernie's test app",
      short_name: 'ErnieApp',
      description: 'Test App',
      background_color: '#01579b',
      theme_color: '#01579b',
      start_url: '/',

      icons: [
        {
          src: paths.Icon,
          sizes: [16, 32, 48, 96, 128, 150, 180, 192, 256, 384, 512, 1024],
          destination: path.join('assets', 'icons')
        }
      ]
    })
  ]
};

export default config;

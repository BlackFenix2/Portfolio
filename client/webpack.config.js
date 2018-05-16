const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const outputPath = path.resolve('dist');
const serverPath = path.resolve('server');

const Icon = path.resolve('./src/img/loading.png');

module.exports = () => {
  // common config for client and server
  const config = {
    output: {
      publicPath: '/'
    },
    resolve: {
      //namespace src to avoid ../../
      // enabled untill webpack 4 support for Awesome-typescript-loader
      alias: {
        src: path.resolve(__dirname, 'src')
      },
      // add file extensions to shorthand ES6 imports
      extensions: ['.ts', '.tsx', 'json', '.js', '.jsx', '.css']
    },

    plugins: [
      // copy tsconfig alias paths to Webpack
      // disabled untill webpack 4 support for Awesome-typescript-loader
      // new TsConfigPathsPlugin()
    ]
  };

  const clientConfig = {
    // find starting js file
    entry: {
      bundle: ['./src/index.tsx']
    },

    // dev server options
    devServer: {
      // open default browser on load
      open: true,
      // display lint error overlay
      overlay: true,
      // enable HMR
      hot: true,
      // use historyAPI for routes
      historyApiFallback: true
    },

    // bundled code output
    output: {
      path: path.resolve(__dirname, outputPath),
      // needed for common chunks
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[name].chunk.js'
    },

    module: {
      rules: [
        {
          // check each loader for matching files
          oneOf: [
            // default loader for ts and tsx
            {
              test: /\.tsx?$/,
              use: ['awesome-typescript-loader'],

              exclude: /node_modules/
            },
            // default css loader
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader']
            },

            // fallback loader if other loaders excluded
            // URL loader falls back to file-loader
            {
              loader: 'url-loader',
              // exclude HTML framework elements regardless
              exclude: [/\.(js|jsx|ts|tsx|mjs|css)$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // add hot loading for webpack dev server
      new webpack.HotModuleReplacementPlugin(),

      // load css into separate .css file
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[id].chunk.css'
      }),

      // HTML generation, put before other manifest plugins
      new HtmlWebPackPlugin({
        template: './src/index.html',
        favicon: Icon
      }),
      // add serviceworker
      new SWPrecacheWebpackPlugin(),
      // create manifest.json for PWA
      new WebpackPwaManifest({
        name: "Ernie's test app",
        short_name: 'ErnieApp',
        description: 'Test App',
        background_color: '#01579b',
        theme_color: '#01579b',
        start_url: '/',

        icons: [
          {
            src: Icon,
            sizes: [16, 32, 48, 96, 128, 150, 180, 192, 256, 384, 512, 1024],
            destination: path.join('assets', 'icons')
          }
        ]
      })
    ]
  };
  const serverConfig = {
    // node specific settings for server
    target: 'node',

    // find starting js file
    entry: {
      server: './src/server.jsx'
    },

    // bundled code output
    output: {
      path: path.resolve(__dirname, serverPath),

      filename: '[name].js',
      // needed for server prerendering
      libraryTarget: 'commonjs2'
    },

    module: {
      rules: [
        // Check JS and JSX files before building
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          // check each loader for matching files
          oneOf: [
            // default loader for js and jsx with inline babel config
            {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              // use internal babel options for SSR
              options: {
                presets: ['env', 'react', 'flow'],
                plugins: [
                  'babel-plugin-transform-runtime',
                  'babel-plugin-dynamic-import-node',
                  'babel-plugin-transform-object-rest-spread',
                  'babel-plugin-transform-class-properties'
                ],
                // Don't read from .babelrc
                babelrc: false
              }
            },
            {
              loader: 'url-loader',

              exclude: [/\.(js|jsx|mjs|css)$/, /\.html$/, /\.json$/],
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  };

  // apply common config and development or production to client and server.
  const clientBundleConfig = merge(clientConfig, config);

  const serverBundleConfig = merge(serverConfig, config);

  // return [clientBundleConfig, serverBundleConfig];

  return [clientBundleConfig];
};

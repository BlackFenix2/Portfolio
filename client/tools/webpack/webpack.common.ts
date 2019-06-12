import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import HtmlTemplate from 'html-webpack-template';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import WorkboxPlugin from 'workbox-webpack-plugin';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import htmlParams from '../htmlParams';
import manifest from '../manifest';
import paths from '../paths';

const config: webpack.Configuration = {
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
    // speeds up webpack builds
    pathinfo: false,
    publicPath: '/',
    path: path.resolve(__dirname, paths.buildDir),
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].js'
  },
  resolve: {
    // enabled untill i clean out absolute require statements in shows
    alias: {
      src: paths.codeRoot
    },

    plugins: [
      // add tsconfig paths to webpack
      new TsconfigPathsPlugin()
    ],

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
              // thread-loader for expensive loader
              'thread-loader',

              // add babel for plugins, add cache option
              'babel-loader?cacheDirectory'
            ],

            exclude: /node_modules/
          },

          // default css loader, catch global css imports
          {
            test: /\.css$/,
            use: [
              {
                loader: ExtractCssChunks.loader,
                options: {
                  hot: true,
                  reloadAll: true // when desperation kicks in - this is a brute force HMR flag
                }
              },
              'css-loader'
            ]
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
    // load css into separate .css file
    new ExtractCssChunks({
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
    new WorkboxPlugin.GenerateSW(),

    // create manifest.json for PWA, injects into htmlwebpack plugin
    new WebpackPwaManifest({
      name: manifest.name,
      short_name: manifest.short_name,
      description: manifest.description,
      background_color: manifest.background_color,
      theme_color: manifest.theme_color,
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

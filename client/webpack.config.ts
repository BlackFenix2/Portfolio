import history from 'connect-history-api-fallback';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import HtmlTemplate from 'html-webpack-template';
import convert from 'koa-connect';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import webpackServeWaitpage from 'webpack-serve-waitpage';
import htmlParams from './tools/htmlParams';
import paths from './tools/paths';
const outputPath = path.resolve(paths.buildDir);

export default function(env, args) {
  // common config for client and server
  const envMode = process.env.WEBPACK_SERVE ? 'development' : 'production';
  const config: webpack.Configuration = {
    // set mode to development when called by webpack-serve

    mode: envMode,
    output: {
      publicPath: '/'
    },
    resolve: {
      // namespace src to avoid ../../
      // enabled untill webpack 4 support for Awesome-typescript-loader
      alias: {
        src: path.resolve(__dirname, 'src')
      },
      // add file extensions to shorthand ES6 imports
      extensions: ['.ts', '.tsx', 'json', '.js', '.jsx', '.css']
    },

    plugins: []
  };

  const clientConfig = {
    // find starting ts file
    entry: {
      // client entry
      bundle: [paths.index]
    },

    // split chunks by vendors in node modules
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            chunks: 'initial',
            maxInitialRequests: 5,
            name: 'common',
            minChunks: 2,
            minSize: 0
          },
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            priority: 10,
            enforce: true
          }
        }
      },
      runtimeChunk: true
    },
    // use source map in development
    devtool: envMode.includes('development') ? 'source-map' : false,

    // webpack-serve dev options
    serve: {
      // open default browser on load
      open: true,

      // enable HMR
      hot: true,

      // middleware options
      add: (app, middleware, options) => {
        // add history API fallback
        app.use(convert(history()));

        // webpack waiting page
        app.use(webpackServeWaitpage(options));

        middleware.webpack();
        middleware.content();
      }
    },

    // bundled code output
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[name].js'
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
            // default css loader
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

  // apply common config and development or production to client and server.
  const clientBundleConfig = merge(clientConfig, config);

  // return [clientBundleConfig, serverBundleConfig];

  return [clientBundleConfig];
}

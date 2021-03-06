import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';

// Two parameters are passed in at bundle time, env & argv. argv contains all flags passed into webpack, including mode.
const webpackConfiguration = (_, argv) => ({
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.[hash].js',
  },
  // Configures Loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: argv.mode === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  // Configures Plugins
  plugins: [
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(argv.mode),
    }),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // inject: false,
      templateContent: ({ htmlWebpackPlugin }) =>
        `<!DOCTYPE html>
        <html lang="en">
          <head>
            <title>${htmlWebpackPlugin.options.title}</title>
          </head>
          <body>
            <div id="${htmlWebpackPlugin.options.appMountId}"></div>
          </body>
        </html>`,
      title: 'The New York Times (Clone) - Home Page',
      appMountId: 'app',
      minify:
        argv.mode === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            }
          : false,
      hash: argv.mode === 'production',
      //Prevents automatic injection of CSS & HTML into template.
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css?[hash]',
    }),
  ],
  devtool: argv.mode === 'production' ? false : 'eval-source-map',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  // Configures Optimizations
  optimization: {
    minimizer:
      argv.mode === 'production'
        ? [new TerserJSPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]
        : [],
    splitChunks: {
      chunks: 'all',
    },
  },
  //Configures Webpack DevServer
  devServer: {
    port: 8080,
    // Enables webpack's Hot Module Replacement feature.
    hot: true,
    // Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default.
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});

export default webpackConfiguration;

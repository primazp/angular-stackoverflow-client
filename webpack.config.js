/**
 * Webpack config for development
 */

'use strict';

var baseConfig = require('./webpack.base');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  devServer: {
    contentBase: './public',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  }
});

// CSS LOADER
// Reference: https://github.com/webpack/css-loader
// Allow loading css through js
//
// Reference: https://github.com/postcss/postcss-loader
// Postprocess your css with PostCSS plugins
config.module.loaders.push({
  test: /\.styl$/,
  // Reference: https://github.com/webpack/extract-text-webpack-plugin
  // Extract css files in production builds
  //
  // Reference: https://github.com/webpack/style-loader
  // Use style-loader in development.
  loader: ExtractTextPlugin.extract('style', 'css?sourceMap|stylus')
});

config.plugins.push(
  new ExtractTextPlugin('[name].css', {
    disable: true
  }),
  // Reference: https://github.com/ampedandwired/html-webpack-plugin
  // Render index.html
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body'
  })
);

module.exports = config;

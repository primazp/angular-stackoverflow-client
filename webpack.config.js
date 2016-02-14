/**
 * Webpack config for development
 */

'use strict';

var baseConfig = require('./webpack.base');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

console.log(path.join(__dirname, 'node_modules'));

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

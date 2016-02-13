'use strict';

var baseConfig = require('./webpack.base');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  devtool: 'source-map'
});

config.module.loaders.push({
  test: /\.styl$/,
  loader: ExtractTextPlugin.extract('style', 'css?sourceMap|stylus')
});

config.plugins.push(
  new ExtractTextPlugin('[name].[contenthash].css'),
  // Reference: https://github.com/ampedandwired/html-webpack-plugin
  // Render index.html
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body'
  }),
  // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
  // Only emit files when there are no errors
  new webpack.NoErrorsPlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
  // Dedupe modules in the output
  new webpack.optimize.DedupePlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  // Minify all javascript, switch loaders to minimizing mode
  new webpack.optimize.UglifyJsPlugin()
)

module.exports = config;

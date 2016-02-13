'use strict';

var baseConfig = require('./webpack.base');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: {},
  output: {},
  devtool: 'inline-source-map'
});

config.module.preLoaders.push({
  test: /\.js$/,
  exclude: [
    /node_modules/,
    /\.test\.js$/
  ],
  loader: 'isparta-instrumenter'
});

config.module.loaders.push({
  test: /\.styl$/,
  loader: 'null'
});

config.plugins.push(
  new ExtractTextPlugin('[name].css', { disable: true })
);

module.exports = config;

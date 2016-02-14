'use strict';

var baseConfig = require('./webpack.base');
var webpack = require('webpack');
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

config.module.loaders[0].loader = 'null'; // do not load styles in tests

config.plugins.push(
  new ExtractTextPlugin('[name].css', { disable: true })
);

module.exports = config;

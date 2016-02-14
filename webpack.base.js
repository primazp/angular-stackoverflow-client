'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

/**
 * Config
 * Reference: http://webpack.github.io/docs/configuration.html
 * This is the object where all configuration gets set
 */
module.exports = {
  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  entry: {
    app: './src/app/app.js'
  },

  output: {
    // Absolute output directory
    path: path.resolve(__dirname, 'public'),

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: 'http://localhost:8080/',

    // Filename for entry points
    filename: '[name].bundle.js',

    // Filename for non-entry points
    chunkFilename: '[name].bundle.js'
  },

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */

  // Initialize module
  module: {
    preLoaders: [],
    loaders: [{
      test: /\.less$/,
      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Extract css files in production builds
      //
      // Reference: https://github.com/jtangelder/sass-loader.git
      loader: ExtractTextPlugin.extract(
        'style',
        'css?sourceMap!autoprefixer?browsers=last 2 versions!less?sourceMap'
      )
    }, {
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      // Compiles ES6 and ES7 into ES5 code
      test: /\.js$/,
      loader: 'ng-annotate!babel',
      exclude: /node_modules/
    }, {
      // ASSET LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      // JADE LOADER
      // Reference: https://github.com/webpack/jade-loader
      // Allow loading jade through js
      test: /\.jade$/,
      loader: 'jade'
    }, {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$/,
      loader: 'raw'
    }]
  },

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
   devtool: 'eval',

   plugins: [],

   resolves: ['', '.js', '.less', '.jade']
};

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {path: __dirname, filename: 'src/bundle.js' },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
};

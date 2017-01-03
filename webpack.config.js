const webpack = require('webpack'); // to access built-in plugins

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
}

module.exports = config;

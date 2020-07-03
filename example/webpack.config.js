const { resolve } = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },
};

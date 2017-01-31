const path = require('path');

const dependencies = [
  'axios',
  'react',
  'react-dom',
  'react-router',
];

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: dependencies,
  },
  output: {
    path: './public/js',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      react: path.join(__dirname, './', 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [],
};

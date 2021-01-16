const path = require('path');
webpack = require('webpack');
const SRC_DIR = path.join(__dirname, './frontend/src');
const DIST_DIR = path.join(__dirname, './public');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      { // 1
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // query: {
          //   presets: ['@babel/preset-env', '@babel/preset-react']
          // }
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }       
        },
        // options: {
        //   presets: ['@babel/preset-env', '@babel/preset-react']
        // }          
      }
    ]
  },
  // devServer: {
  //   inline: false,
  //   contentBase: path.join(__dirname, '../public')
  // },
};
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/frontend',
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirctories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?presets[]=es2015',
        include: __dirname + '/frontend'
      },
      {
        test: /\.js?$/,
        include: __dirname + '/frontend',
        loader: 'babel?presets[]=es2015'
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!postcss!resolve-url!sass?sourceMap')
      },
      {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpeg|\.jpg|\.gif$/,
          loader: 'url?name=[path][name].[ext]?[hash]&limit=4096'
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ],
  devServer: {
    hot: true,
    contentBase: './'
  },
};

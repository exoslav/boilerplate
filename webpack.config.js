var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = function () {
  console.log('<-- FOOD-MANAGER startup... -->');

  var config = {
    entry: {
      'app': './src/js/app.js'
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].min.js'
    },
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'cheap-module-source-map' : 'inline-source-map', // viz.: https://webpack.js.org/configuration/devtool/
    plugins: [
      new HtmlWebpackPlugin({
        template: './www/index.html'
      })
    ],
    resolve: {
      extensions: ['.js', '.json']
    },
    devServer: {
      contentBase: './dist',
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: path.join(__dirname, '/src/js'),
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      ]
    }
  };

  return config;
}
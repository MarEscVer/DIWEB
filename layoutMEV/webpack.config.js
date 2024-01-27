'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html' }),
    new HtmlWebpackPlugin({ template: './src/registro.html', filename: 'registro.html' }),
    new HtmlWebpackPlugin({ template: './src/estadistica.html', filename: 'estadistica.html' }),
    new MiniCssExtractPlugin({ filename: 'main.css' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/img', to: 'img' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: require.resolve('chart.js'),
        use: 'import-loader',
      },
    ],
  },
};

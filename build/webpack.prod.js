"use strict";

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve("assets/svg"),
        to: resolve("dist/assets/svg"),
        toType: "dir"
      },
      {
        from: resolve("libs"),
        to: resolve("dist/libs"),
        toType: "dir"
      }
    ])
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

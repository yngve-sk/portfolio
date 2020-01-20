"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   use: "eslint-loader",
      //   enforce: "pre"
      // },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: "responsive-loader",
        options: {
          adapter: require("responsive-loader/sharp"),
          sizes: [800],
          // size: 1200,
          placeholder: true,
          placeholderSize: 50,
          outputPath: 'assets/images'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "template.html",
      filename: "index.html",
      inject: true
    }),
    new VueLoaderPlugin()
  ]
};

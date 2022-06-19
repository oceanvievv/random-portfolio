const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.js"
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Portfolio",
      template: "./index.pug"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        type: 'asset/resource'
      },
    ]
  }
}
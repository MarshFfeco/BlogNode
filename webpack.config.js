const path = require('path'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: './frontend/assets/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: 'js/bundle.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],

  module:{
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ],
  },
  devtool: 'source-map'
};
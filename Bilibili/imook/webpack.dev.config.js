const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  },
  // contentBase?
  devServer: {
    port: 3020,
    contentBase: path.join(__dirname, 'release'),
    open: true,
    hot: true,
  },
  // what's the difference between join and resolve??
  plugins: [
    // hot to use this plugin? some features is confusing me
    // hash is working, title is not
    new htmlWebpackPlugin({
      template: './indexYo.html',
      filename: 'index.html',
      title: 'Hello Title',
      hash: true
    })
  ]
}
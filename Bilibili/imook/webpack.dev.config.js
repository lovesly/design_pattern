const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      }
    ]
  },
  // contentBase?
  // devtool: 'source-map',
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

// "@babel/plugin-proposal-class-properties": "^7.7.4",
// 有点奇怪，这个配置了没啥用, 有没有可能是因为 sourceMap，导致看不到polyfill 后的结果？
// "@babel/plugin-transform-runtime": "^7.7.6",
// "@babel/runtime": "^7.7.7",
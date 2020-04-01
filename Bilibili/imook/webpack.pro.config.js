const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      }
    ]
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
// 有点奇怪，这个配置了没啥用
// "@babel/plugin-transform-runtime": "^7.7.6",
// "@babel/runtime": "^7.7.7",
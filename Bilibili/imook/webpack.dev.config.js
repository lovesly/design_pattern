const path = require('path');
const fs = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');

const filePath = path.join(__dirname, 'src');
// 多入口？参考 zz-axios
module.exports = {
  mode: 'development',
  // 多入口配置，。。。
  entry: fs.readdirSync(filePath).reduce((entries, dir) => {
    const fullDir = path.join(filePath, dir);
    const entry = path.join(fullDir, 'index.js');
    // ??
    console.log('entries: ', entries)
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      // entries[dir] = ['webpack-hot-middleware/client', entry]
      entries[dir] = [entry];
    }
    return entries;
  }, {}),

  /**
   * 根据不同的目录名称，打包生成目标 js，名称和目录名一致
   */
  output: {
    path: path.join(__dirname, 'release'),
    filename: '[name].bundle.js',
    // publicPath: '/__build__/'
  },
  // entry: './src/index.js',
  // output: {
  //   path: __dirname,
  //   filename: './release/bundle.js'
  // },
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
const path = require('path');
const fs = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');

const filePath = path.join(__dirname, 'src');
// 多入口？参考 zz-axios
module.exports = {
  mode: 'development',
  /**
   * 多入口配置，有几个问题：
   * 1. 现在是生成的 script 直接给插入 html 里一起执行了，如果我想打包出来，但是 html 里分别手动使用要怎么做？
   * 2. 发现多入口，似乎有不少重复代码。这个要怎么解决？
   */
  entry: fs.readdirSync(filePath).reduce((entries, dir) => {
    const fullDir = path.join(filePath, dir);
    const entry = path.join(fullDir, 'index.js');
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
  module: {
    rules: [
      { 
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      }
    ]
  },
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
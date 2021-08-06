const path = require('path')
const modules = require('./config/modules')

module.exports = {
  // publicPath:'',
  alias: {
    //自定义别名
    '@': path.resolve(__dirname, 'src')
  },
  plugins: [

  ],
  module: {
    //自定义loader
    rules: [
      { test: /\.(css|scss)$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      }
    ]
  },
  devServer: {
    port: 9000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://cnodejs.org',
        changeOrigin: true
      }
    }
  }
}
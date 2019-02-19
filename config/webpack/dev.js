const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { baseConfig, resolvePath } = require('./base')

module.exports = baseConfig({
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('views/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    open: true,
    port: process.env.PORT,
    hotOnly: true,
    overlay: true
  }
})
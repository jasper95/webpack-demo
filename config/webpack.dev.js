const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware')
const webpack = require('webpack')
const base = require('./webpack.base')

const { PORT } = process.env
module.exports = (mode) => {
  return base({
    entry: [
      require.resolve('react-dev-utils/webpackHotDevClient'),
    ],
    mode,
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      open: true,
      port: PORT,
      hot: true,
      before(app, server) {
        app.use(evalSourceMapMiddleware(server));
        // This lets us open files from the runtime error overlay.
        app.use(errorOverlayMiddleware());
      }
    }
  })
}
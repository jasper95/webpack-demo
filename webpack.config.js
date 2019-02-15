const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv')

module.exports = () => {
  const { NODE_ENV: mode } = process.env
  return {
    mode,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules|bower_components/,
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            cacheCompression: false
          }
        }
      ]
    },
    output: {
      path: path.join(process.cwd(), 'build'),
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].chunk.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: resolvePath('public/index.html'),
      }),
      new webpack.DefinePlugin(getEnv()),
    ]
  }
}

function getEnv(){
  const env = Object
    .entries(process.env)
    .reduce((result, [key, val]) => {
      result[key] = JSON.stringify(val)
      return result
    }, {})
  return {
    'process.env': env
  }
}

function resolvePath(relativePath) {
  return path.join(process.cwd(), relativePath)
}

function getStyleLoaders(cssOptions, preProcessor) {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {

      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
      },
    },
  ];
  if (preProcessor) {
    loaders.push(require.resolve(preProcessor));
  }
  return loaders;
};

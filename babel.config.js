module.exports = () => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            ie: 9,
          },
          ignoreBrowserslistConfig: true,
          useBuiltIns: false,
          modules: false,
          exclude: ['transform-typeof-symbol'],
        },
      ],
      '@babel/preset-react'
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: true,
          useESModules: true
        },
      ],
      // '@babel/plugin-syntax-dynamic-import',
      // '@babel/plugin-proposal-function-bind',
      // ['@babel/plugin-proposal-decorators', { legacy: true }],
      // ['@babel/plugin-proposal-class-properties', { loose: true }],
      // '@babel/plugin-transform-async-to-generator',
      // '@babel/plugin-proposal-object-rest-spread',
      // '@loadable/babel-plugin',
      // web && 'react-hot-loader/babel'
    ].filter(Boolean)
  }
}
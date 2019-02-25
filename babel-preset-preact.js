// Use until https://github.com/developit/babel-preset-preact/pull/9 gets merged

var transformReactJsx = require('babel-plugin-transform-react-jsx')

module.exports = function() {
  return {
    plugins: [
      [transformReactJsx, { pragma: 'h' }],
      require('babel-plugin-syntax-jsx'),
    ],
  }
}

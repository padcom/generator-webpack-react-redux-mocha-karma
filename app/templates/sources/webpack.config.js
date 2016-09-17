var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // define application entry point
  entry: __dirname + "/src/main/index.js",
  // define where to output the compiled sources
  output: {
    path: __dirname + "/target", filename: "index.js"
  },
  module: {
    preLoaders: [
      // enable ESLint for all .js sources
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      // transpile all .js files from es6 to es5
      { test: /\.js$/, exclude: /node_modules/, loaders: [ 'babel-loader' ] },
      // process all .less files to css
      { test: /\.less$/, exclude: /node_modules/, loaders: [ 'classnames', 'style', 'css?modules&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss', 'less' ] },
      // load images from Less/CSS
      { test: /\.(gif|png|jpg|jpeg|svg)($|\?)/, loader: 'url?limit=5000&hash=sha512&digest=hex&size=16&name=assets/[name]-[hash].[ext]' },
      // load json
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  postcss() {
    // configuration for the postcss loader;
    // enables autoprefixer postprocessor in CSS
    return [ require('autoprefixer') ]
  },
  plugins: [
    // this plugin creates the final index.html based on a template
    new HtmlWebpackPlugin({ template: 'src/main/index.html' })
  ]
}

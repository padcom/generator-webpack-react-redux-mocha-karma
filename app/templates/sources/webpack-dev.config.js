const webpack = require('webpack');
const Config = require('webpack-config').Config;

const config = new Config().extend('./webpack.config.js').merge({
  // select the appropriate sourcemap for debugging
  devtool: 'eval-source-map',
  // configure dev server
  devServer: {
    stats: { colors: true, modules: false, chunks: false, timings: true }
  }
});

// Enable react-hot loader for JavaScript sources
config.module.loaders[0].loaders.splice(0, 0, 'react-hot');

// export the final configuration
module.exports = config;

const webpack = require('webpack');
const Config = require('webpack-config').Config;

const config = new Config().extend('./webpack.config.js').merge({
  // select the appropriate sourcemap for production
  devtool: null,
  // enable loaders that are specific to tests
  module: {
    loaders: [
      // json loader needed for testing (mocha-specific)
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  // define externals that are otherwise available
  externals: {
    'react/addons': true,
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
    'mocha': true
  }
});

// strip react-hot loader; this is necessary to allow Mocha to re-run
// all tests that depend on the currently modified files
config.module.loaders[0].loader = config.module.loaders[0].loader.replace('react-hot!', '');

// override entry point to run tests automatically
config.entry = 'mocha!./src/test/setup.js';

// export the final configuration
module.exports = config;

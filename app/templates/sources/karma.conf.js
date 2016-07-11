
// Load webpack configuration and trim it down so that Karma can run
const webpack = require('./webpack-test.config');
webpack.entry = undefined;
webpack.output = undefined;
webpack.module.preloaders = undefined;
webpack.plugins = undefined;

// transpile all .js files from es6 to es5 using babel but
// with instrumentation so that coverage can be measured
webpack.module.loaders.push({ test: /\.js$/, include: /src\/main/, loader: 'isparta' })
// code coverage configuration using isparta; src/main is loaded using isparta
// which uses babel to understand the syntax. Therefore babel needs not to process
// the sources in src/main
webpack.module.loaders[0].exclude = /node_modules|src\/main/;

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'mocha' ],
    // list of files / patterns to load in the browser
    files: [ 'src/test/setup.js' ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/**/*.js': [ 'webpack' ]
    },
    // webpack configuration
    webpack: webpack,
    webpackMiddleware: {
      stats: { colors: true, modules: false, chunks: false, timings: true }
    },
    // test results reporter to use; possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'progress', 'junit', 'coverage' ],
    // junit output configuration
    junitReporter: {
      outputDir: './target/tests',
      outputFile: 'test-results.xml',
      useBrowserName: false
    },
    coverageReporter: {
      dir: './target/coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'text', subdir: '.', file: 'details.txt' },
        { type: 'text-summary', subdir: '.', file: 'summary.txt' }
      ]
    },
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ 'PhantomJS' ],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

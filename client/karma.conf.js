module.exports = config => {
  const options = {
    frameworks: ['jasmine'],

    files: ['karma.entry.js'],

    preprocessors: {
      'karma.entry.js': ['coverage', 'webpack', 'sourcemap']
    },

    webpack: require('./webpack.config'),

    webpackServer: {
      noInfo: true
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },

    reporters: ['mocha', 'coverage'],

    logLevel: config.LOG_INFO,

    autoWatch: false,

    singleRun: true,

    browsers: ['PhantomJS'],

    browserNoActivityTimeout: 150000,

    client: { captureConsole: false }
  };

  config.set(options);
};

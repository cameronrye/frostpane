module.exports = {
  plugins: {
    autoprefixer: {
      // Support last 2 versions of major browsers
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead',
        'not ie 11'
      ]
    },
    cssnano: {
      preset: ['default', {
        // Preserve important comments (license headers)
        discardComments: {
          removeAll: false
        }
      }]
    }
  }
};


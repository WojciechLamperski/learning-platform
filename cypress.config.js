const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  screenshotOnRunFailure: false,
  trashAssetsBeforeRuns: true,
  video: false,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://localhost:3000/',
    supportFile: false,
    specPattern: 'tests/e2e/**/*.e2e.js',
  },

  component: {
    specPattern: '**/*.test.js',
    supportFile: 'tests/support/component.js',
    indexHtmlFile: 'tests/support/component-index.html',
    //czemu tego nie potrzebowaliśmy?
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    }, 
  },
});
